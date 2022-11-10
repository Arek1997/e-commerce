import React from 'react';

import StyledCartProduct from '../../../assets/style/cart/styled-cart-item';

const CartProduct = (props) => {
	console.log(props.image);
	return (
		<StyledCartProduct className='product'>
			<img src={props.image} alt={props.title} className='product__img' />

			<div className='product__center'>
				<h4 className='product__title'>{props.title}</h4>
				<span className='product__price'>${props.price}</span>
				<button className='product__remove'>remove</button>
				<span className='product__total-price'>
					Total: ${props.price * props.amount}
				</span>
			</div>

			<div className='product__right'>
				<button className='product__increase'>
					<i className='fa-solid fa-chevron-up'></i>
				</button>
				<span className='product__amount'>1</span>
				<button className='product__decrease'>
					<i className='fa-solid fa-chevron-down'></i>
				</button>
			</div>
		</StyledCartProduct>
	);
};

export default CartProduct;
