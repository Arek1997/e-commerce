import { useSelector, useDispatch } from 'react-redux';

import {
	toggleCart,
	toggleCartOrder,
	toggleOverlay,
} from '../../../store/navigation-slice';
import { showAlert } from '../../../store/alert-slice';

import CartMenu from '../../../assets/style/cart/styled-cart';
import CartList from './Cart-list';

const Cart = (props) => {
	const dispatch = useDispatch();
	const { productsList } = useSelector((state) => state.cart);

	const { isCartShown } = useSelector((state) => state.navigation);

	const { isLoggedIn } = useSelector((state) => state.authentication);

	const totalPrice = productsList.reduce((prev, current) => {
		return prev + current.price * current.amount;
	}, 0);

	const toggleCartHandler = () => {
		dispatch(toggleCart());
		dispatch(toggleOverlay());
	};

	const toggleCartOrderHandler = () => {
		if (isLoggedIn) {
			dispatch(toggleCartOrder());
			isCartShown && dispatch(toggleCart());
		} else {
			dispatch(toggleCart());
			dispatch(
				showAlert({
					status: 'warning',
					title: 'Warning',
					message: `If you wanna order products you have to be logged
			firstfully`,
				})
			);
		}
	};

	return (
		<CartMenu className={isCartShown ? 'open' : ''} data-testid='cart-wrapper'>
			<i
				className='fa-solid fa-xmark closeCart'
				onClick={toggleCartHandler}
				data-testid='close-cart'
			></i>
			<header>
				<h3>Your Cart</h3>
			</header>
			<CartList />
			{productsList.length > 0 && (
				<footer>
					<p className='total'>Total: ${totalPrice.toFixed(2)}</p>
					<button className='checkout' onClick={toggleCartOrderHandler}>
						Order
					</button>
				</footer>
			)}
		</CartMenu>
	);
};

export default Cart;
