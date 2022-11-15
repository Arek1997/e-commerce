import React, { useState, useEffect } from 'react';

import Navigation from '../navigation/Navigation';
import Cart from '../cart/Cart';
import Overlay from '../overlay/Overlay';
import Footer from '../footer/Footer';

const Layout = (props) => {
	const [showCart, setShowCart] = useState(false);
	const [showOverlay, setShowOverlay] = useState(false);

	useEffect(() => {
		showCart
			? (document.body.className = 'scroll-disabled')
			: (document.body.className = '');
	}, [showCart]);

	const toggleCartHandler = () => {
		setShowCart(!showCart);
		setShowOverlay(!showOverlay);
	};

	return (
		<>
			<Navigation onCartShow={toggleCartHandler} />
			<Cart showCart={showCart} onCartShow={toggleCartHandler} />
			<main>{props.children}</main>
			<Footer />
			{showOverlay && <Overlay onClose={toggleCartHandler} />}
		</>
	);
};

export default Layout;
