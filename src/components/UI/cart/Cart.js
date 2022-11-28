import { useSelector, useDispatch } from 'react-redux';

import { navigationActions } from '../../../store/navigation-slice';

import CartMenu from '../../../assets/style/cart/styled-cart';
import CartList from './Cart-list';

const Cart = (props) => {
	const dispatch = useDispatch();
	const { productsList } = useSelector((state) => state.cart);

	const { isCartShown } = useSelector((state) => state.navigation);

	const totalPrice = productsList.reduce((prev, current) => {
		return prev + current.price * current.amount;
	}, 0);

	const toggleCartHandler = () => {
		dispatch(navigationActions.toggleCart());
		dispatch(navigationActions.toggleOverlay());
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
					<button className='checkout'>Order</button>
				</footer>
			)}
		</CartMenu>
	);
};

export default Cart;
