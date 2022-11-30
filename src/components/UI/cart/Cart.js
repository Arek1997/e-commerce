import { useSelector, useDispatch } from 'react-redux';

import { navigationActions } from '../../../store/navigation-slice';
import { alertActions } from '../../../store/alert-slice';

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
		dispatch(navigationActions.toggleCart());
		dispatch(navigationActions.toggleOverlay());
	};

	const toggleCartOrderHandler = () => {
		if (isLoggedIn) {
			dispatch(navigationActions.toggleCartOrder());
			isCartShown && dispatch(navigationActions.toggleCart());
		} else {
			dispatch(navigationActions.toggleCart());
			dispatch(
				alertActions.showAlert({
					status: 'warning',
					title: 'Warning',
					message: `If you wanna order products you have to be logged
			firstfully`,
				})
			);
		}
	};

	return (
		<CartMenu className={isCartShown ? 'open' : ''}>
			<i
				className='fa-solid fa-xmark closeCart'
				onClick={toggleCartHandler}
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
