import React, { useState } from 'react';

import Navigation from '../navigation/Navigation';
import Cart from '../cart/Cart';
import Overlay from '../overlay/Overlay';

const Layout = (props) => {
	const [showCart, setShowCart] = useState(false);

	const toggleCartHandler = () => {
		setShowCart(!showCart);
	};

	return (
		<>
			<Navigation onCartShow={toggleCartHandler} />
			<Cart showCart={showCart} onCartShow={toggleCartHandler} />
			<main>{props.children}</main>

			{showCart && <Overlay onClose={toggleCartHandler} />}
		</>
	);
};

export default Layout;
