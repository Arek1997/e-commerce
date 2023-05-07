import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-slice';
import { Link } from 'react-router-dom';

import StyledCartProduct from './style/styled-cart-item';
import { SelectedProduct, ProductAmountMode } from '../../../interface';

const CartProduct = ({ id, title, price, image, amount }: SelectedProduct) => {
	const total = price * amount;
	const dispatch = useDispatch();

	const changeProductAmountHandler = (mode: ProductAmountMode) => {
		dispatch(cartActions.changeProductAmount({ id, mode }));

		if (mode === 'decrease' && amount === 1) removeProductHandler();
	};

	const removeProductHandler = () => dispatch(cartActions.removeProduct(id));

	return (
		<StyledCartProduct className='product'>
			<img src={image} alt={title} className='product__img' />

			<div className='product__center'>
				<Link to={`../products/${id}`}>
					<h4 className='product__title'>{title}</h4>
				</Link>
				<span className='product__price'>${price.toFixed(2)}</span>
				<span className='product__total-price'>Total: ${total.toFixed(2)}</span>
				<button className='product__remove' onClick={removeProductHandler}>
					<i className='fa-solid fa-trash'></i>
				</button>
			</div>

			<div className='product__right'>
				<button
					className='product__increase'
					onClick={() => changeProductAmountHandler('increase')}
				>
					<i className='fa-solid fa-chevron-up'></i>
				</button>
				<span className='product__amount'>{amount}</span>
				<button
					className='product__decrease'
					onClick={() => changeProductAmountHandler('decrease')}
				>
					<i className='fa-solid fa-chevron-down'></i>
				</button>
			</div>
		</StyledCartProduct>
	);
};

export default CartProduct;
