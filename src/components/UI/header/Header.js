import React, { useState } from 'react';

import Navigation from '../navigation/Navigation';
import Container from '../container/Containter';

import StyledHeader, {
	StyledHeading,
	CartMenu,
	OverLay,
} from '../../../style/header/header-style';

const Header = () => {
	const [showCart, setShowCart] = useState(false);

	const toggleCartHandler = () => setShowCart(!showCart);

	return (
		<StyledHeader>
			<Container>
				<Navigation onShowCart={toggleCartHandler} />
				<StyledHeading>
					<h1>Rest, Relax, Unwind</h1>
					<p>Embrace your choices - we do</p>
					<button>Show now</button>
				</StyledHeading>
			</Container>

			<OverLay display={showCart ? 'block' : ''} />
			<CartMenu className={showCart ? 'open' : ''}>
				<i
					className='fa-solid fa-xmark closeCart'
					onClick={toggleCartHandler}
				></i>
				<header>
					<h3>Your Cart</h3>
				</header>
				<div className='cart-items'></div>
				<footer>
					<p className='total'>Total: $0.00</p>
					<button className='checkout'>Checkput</button>
				</footer>
			</CartMenu>
		</StyledHeader>
	);
};

export default Header;
