import { useSelector } from 'react-redux';

import CartProduct from './Cart-product';

const CartList = () => {
	const { productsList } = useSelector((state) => state.cart);

	return (
		<div className='cart-items'>
			{productsList.length > 0 ? (
				productsList.map((product) => (
					<CartProduct
						id={product.id}
						key={product.id}
						title={product.title}
						image={product.image}
						price={product.price}
						amount={product.amount}
					/>
				))
			) : (
				<p className='mt-5'>Your cart is empty.</p>
			)}
		</div>
	);
};

export default CartList;
