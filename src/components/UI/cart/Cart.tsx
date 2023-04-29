import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';

import { toggleCart, toggleCartOrder } from '../../../store/navigation-slice';
import { showAlert } from '../../../store/alert-slice';

import CartMenu from './style/styled-cart';
import CartList from './Cart-list';
import Overlay from '../overlay/Overlay';
import useMediaQueries from '../../../hooks/useMediaQueries';

const Cart = () => {
	const dispatch = useAppDispatch();
	const { productsList } = useAppSelector((state) => state.cart);
	const { isCartShown } = useAppSelector((state) => state.navigation);
	const { isLoggedIn } = useAppSelector((state) => state.authentication);
	const matches = useMediaQueries('min-width: 768px');

	const totalPrice = productsList.reduce((prev, current) => {
		return prev + current.price * current.amount;
	}, 0);

	const toggleCartHandler = () => dispatch(toggleCart());

	const toggleCartOrderHandler = () => {
		if (isLoggedIn) {
			dispatch(toggleCartOrder());
		} else {
			dispatch(
				showAlert({
					status: 'warning',
					title: 'Warning',
					message: `If you wanna order products you have to be logged	firstfully`,
				})
			);
		}

		toggleCartHandler();
	};

	return (
		<>
			{isCartShown && matches && (
				<Overlay onClose={toggleCartHandler}>{}</Overlay>
			)}
			<CartMenu
				className={isCartShown ? 'open' : ''}
				data-testid='cart-wrapper'
			>
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
		</>
	);
};

export default Cart;
