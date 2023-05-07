import { useAppSelector } from '../../../hooks/reduxHooks';

import CartProduct from './CartProduct';

const CartList = () => {
	const { productsList } = useAppSelector((state) => state.cart);

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
