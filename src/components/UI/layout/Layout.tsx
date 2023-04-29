import { PropsWithChildren } from 'react';
import { useAppSelector } from '../../../hooks/reduxHooks';

import Navigation from '../navigation/Navigation';
import Cart from '../cart/Cart';
import CartOrder from '../cart/Cart-order';
import Footer from '../footer/Footer';
import ProfileAuthModal from '../profile/ProfileAuthModal';
import ProfileDetails from '../profile/ProfileDetails';
import ProfileFavProducts from '../profile/ProfileFavProducts';
import Alert from '../alert/Alert';

const Layout = (props: PropsWithChildren) => {
	const {
		isCartOrderShown,
		isProfileAuthModalShown,
		isProfileDetailsShown,
		ifProfileFavProductsShown,
	} = useAppSelector((state) => state.navigation);

	return (
		<>
			<Navigation />
			<Cart />
			<main>
				{props.children}
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
