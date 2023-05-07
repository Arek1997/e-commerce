import { PropsWithChildren } from 'react';
import Navigation from '../navigation/Navigation';
import Cart from '../cart/Cart';
import CartOrderWrapper from '../cart/CartOrder';
import Footer from '../footer/Footer';
import Alert from '../alert/Alert';
import Profile from '../profile/Profile';

const Layout = (props: PropsWithChildren) => {
	return (
		<>
			<Navigation />
			<Cart />
			<main>
				{props.children}
				<Profile />
				<CartOrderWrapper />
				<Alert />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
