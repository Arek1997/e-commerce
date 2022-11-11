import { useSelector } from 'react-redux';

import CartMenu from '../../../assets/style/cart/styled-cart';
import CartList from './Cart-list';

const Cart = (props) => {
	const { productsList } = useSelector((state) => state.cart);

	const totalPrice = productsList.reduce((prev, current) => {
		return prev + current.price * current.amount;
	}, 0);

	return (
		<CartMenu className={props.showCart ? 'open' : ''}>
			<i className='fa-solid fa-xmark closeCart' onClick={props.onCartShow}></i>
			<header>
				<h3>Your Cart</h3>
			</header>
			<CartList />
			<footer>
				<p className='total'>Total: ${totalPrice.toFixed(2)}</p>
				<button className='checkout'>Checkout</button>
			</footer>
		</CartMenu>
	);
};

export default Cart;
