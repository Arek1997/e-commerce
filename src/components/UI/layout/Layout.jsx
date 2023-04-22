import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { navigationActions } from '../../../store/navigation-slice';
import { alertActions } from '../../../store/alert-slice';

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
	const dispatch = useDispatch();
	const {
		isNavShown,
		isCartShown,
		isCartOrderShown,
		isOverlayShown,
		isProfileAuthModalShown,
		isProfileDetailsShown,
		ifProfileFavProductsShown,
	} = useSelector((state) => state.navigation);

	const { showAlert } = useSelector((state) => state.alert);

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
		showAlert && dispatch(alertActions.showAlert());
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
			{showAlert && <Alert />}
		</>
	);
};

export default Layout;
