import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-slice';
import { Link } from 'react-router-dom';

import StyledCartProduct from '../../../assets/style/cart/styled-cart-item';

const CartProduct = (props) => {
	const total = props.price * props.amount;
	const dispatch = useDispatch();

	const changeProductAmoutnHandler = (increase) => {
		dispatch(
			cartActions.changeProductAmount({ id: props.id, increase: increase })
		);

		if (!increase && props.amount === 1) {
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
					onClick={() => changeProductAmoutnHandler(true)}
				>
					<i className='fa-solid fa-chevron-up'></i>
				</button>
				<span className='product__amount'>{props.amount}</span>
				<button
					className='product__decrease'
					onClick={() => changeProductAmoutnHandler(false)}
				>
					<i className='fa-solid fa-chevron-down'></i>
				</button>
			</div>
		</StyledCartProduct>
	);
};

export default CartProduct;
