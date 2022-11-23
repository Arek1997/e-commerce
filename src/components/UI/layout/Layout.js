import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { navigationActions } from '../../../store/navigation-slice';

import Navigation from '../navigation/Navigation';
import Cart from '../cart/Cart';
import Overlay from '../overlay/Overlay';
import Footer from '../footer/Footer';
import ProfileModal from '../profile/ProfileModal';

const Layout = (props) => {
	const dispatch = useDispatch();
	const { isNavShown, isCartShown, isOverlayShown, isProfileModalShown } =
		useSelector((state) => state.navigation);

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
	};

	return (
		<>
			<Navigation />
			<Cart />
			<main>{props.children}</main>
			<Footer />
			{isOverlayShown && <Overlay onClick={toggleOverlayHandler} />}
			{isProfileModalShown && <ProfileModal />}
		</>
	);
};

export default Layout;
