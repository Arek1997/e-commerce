import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';

import { navigationActions } from '../../../store/navigation-slice';
import { showAlert } from '../../../store/alert-slice';

import Navigation from '../navigation/Navigation';
import Cart from '../cart/Cart';
import CartOrder from '../cart/Cart-order';
import Overlay from '../overlay/Overlay';
import Footer from '../footer/Footer';
import ProfileAuthModal from '../profile/ProfileAuthModal';
import ProfileDetails from '../profile/ProfileDetails';
import ProfileFavProducts from '../profile/ProfileFavProducts';
import Alert from '../alert/Alert';

const Layout = (props) => {
	const dispatch = useAppDispatch();
	const {
		isNavShown,
		isCartShown,
		isCartOrderShown,
		isOverlayShown,
		isProfileAuthModalShown,
		isProfileDetailsShown,
		ifProfileFavProductsShown,
	} = useAppSelector((state) => state.navigation);

	const { isOpen } = useAppSelector((state) => state.alert);

	useEffect(() => {
		isOverlayShown
			? (document.body.className = 'scroll-disabled')
			: (document.body.className = '');
	}, [isOverlayShown]);

	const toggleOverlayHandler = () => {
		dispatch(navigationActions.toggleOverlay());
		isNavShown && dispatch(navigationActions.toggleNav());
		isCartShown && dispatch(navigationActions.toggleCart());
		isCartOrderShown && dispatch(navigationActions.toggleCartOrder());
		isProfileAuthModalShown &&
			dispatch(navigationActions.toggleProfileAuthModal());
		isProfileDetailsShown && dispatch(navigationActions.toggleProfileDetails());
		ifProfileFavProductsShown &&
			dispatch(navigationActions.toggleProfileFavProducts());
		isOpen && dispatch(showAlert());
	};

	return (
		<>
			<Navigation />
			<Cart />
			<main>{props.children}</main>
			<Footer />
			{isOverlayShown && <Overlay onClick={toggleOverlayHandler} />}
			{isProfileAuthModalShown && <ProfileAuthModal />}
			{isProfileDetailsShown && <ProfileDetails />}
			{ifProfileFavProductsShown && <ProfileFavProducts />}
			{isCartOrderShown && <CartOrder />}
			{isOpen && <Alert />}
		</>
	);
};

export default Layout;
