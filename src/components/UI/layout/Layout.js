import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { navigationActions } from '../../../store/navigation-slice';
import { alertActions } from '../../../store/alert-slice';

import Navigation from '../navigation/Navigation';
import Cart from '../cart/Cart';
import Overlay from '../overlay/Overlay';
import Footer from '../footer/Footer';
import ProfileModal from '../profile/ProfileModal';
import ProfileDetails from '../profile/ProfileDetails';
import ProfileFavProducts from '../profile/ProfileFavProducts';
import Alert from '../alert/Alert';

const Layout = (props) => {
	const dispatch = useDispatch();
	const {
		isNavShown,
		isCartShown,
		isOverlayShown,
		isProfileModalShown,
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
		isProfileModalShown && dispatch(navigationActions.toggleProfileModal());
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
			{isProfileModalShown && <ProfileModal />}
			{isProfileDetailsShown && <ProfileDetails />}
			{ifProfileFavProductsShown && <ProfileFavProducts />}
			{showAlert && <Alert />}
		</>
	);
};

export default Layout;
