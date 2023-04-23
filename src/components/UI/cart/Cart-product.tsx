import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-slice';
import { Link } from 'react-router-dom';

import StyledCartProduct from '../../../assets/style/cart/styled-cart-item';
import { ProductAmountMode } from '../../../interface';

const CartProduct = (props) => {
	const total = props.price * props.amount;
	const dispatch = useDispatch();

	const changeProductAmountHandler = (mode: ProductAmountMode) => {
		dispatch(cartActions.changeProductAmount({ id: props.id, mode }));

		if (mode === 'decrease' && props.amount === 1) {
			dispatch(cartActions.removeProduct({ id: props.id }));
		}
	};

	const removeProductHandler = () => {
		dispatch(cartActions.removeProduct({ id: props.id }));
	};

	return (
		<StyledCartProduct className='product'>
			<img src={props.image} alt={props.title} className='product__img' />

			<div className='product__center'>
				<Link to={`../products/${props.id}`}>
					<h4 className='product__title'>{props.title}</h4>
				</Link>
				<span className='product__price'>${props.price.toFixed(2)}</span>
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
				<span className='product__amount'>{props.amount}</span>
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
