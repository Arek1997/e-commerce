import React from 'react';

import CartMenu from '../../../assets/style/cart/styled-cart';

const Cart = (props) => {
	return (
		<CartMenu className={props.showCart ? 'open' : ''}>
			<i className='fa-solid fa-xmark closeCart' onClick={props.onCartShow}></i>
			<header>
				<h3>Your Cart</h3>
			</header>
			<div className='cart-items'></div>
			<footer>
				<p className='total'>Total: $0.00</p>
				<button className='checkout'>Checkput</button>
			</footer>
		</CartMenu>
	);
};

export default Cart;
