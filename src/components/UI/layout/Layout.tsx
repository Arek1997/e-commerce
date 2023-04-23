import { PropsWithChildren } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';

// import { navigationActions } from '../../../store/navigation-slice';

import Navigation from '../navigation/Navigation';
import Cart from '../cart/Cart';
import CartOrder from '../cart/Cart-order';
import Footer from '../footer/Footer';
import ProfileAuthModal from '../profile/ProfileAuthModal';
import ProfileDetails from '../profile/ProfileDetails';
import ProfileFavProducts from '../profile/ProfileFavProducts';
import Alert from '../alert/Alert';

const Layout = (props: PropsWithChildren) => {
	const dispatch = useAppDispatch();
	const {
		isCartShown,
		isCartOrderShown,
		isProfileAuthModalShown,
		isProfileDetailsShown,
		ifProfileFavProductsShown,
	} = useAppSelector((state) => state.navigation);

	// const toggleOverlayHandler = () => {
	// 	dispatch(navigationActions.toggleOverlay());
	// 	isCartShown && dispatch(navigationActions.toggleCart());
	// 	isCartOrderShown && dispatch(navigationActions.toggleCartOrder());
	// 	isProfileAuthModalShown &&
	// 		dispatch(navigationActions.toggleProfileAuthModal());
	// 	isProfileDetailsShown && dispatch(navigationActions.toggleProfileDetails());
	// 	ifProfileFavProductsShown &&
	// 		dispatch(navigationActions.toggleProfileFavProducts());
	// };

	return (
		<>
			<Navigation />
			<Cart />
			<main>
				{props.children}
				{/* {isOverlayShown && <Overlay onClose={toggleOverlayHandler} />} */}
				{isProfileAuthModalShown && <ProfileAuthModal />}
				{isProfileDetailsShown && <ProfileDetails />}
				{ifProfileFavProductsShown && <ProfileFavProducts />}
				{isCartOrderShown && <CartOrder />}
				<Alert />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
