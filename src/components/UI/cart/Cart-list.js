import { useSelector } from 'react-redux';

import CartProduct from './Cart-product';

const CartList = () => {
	const { productsList } = useSelector((state) => state.cart);
	console.log(productsList);

	return (
		<div className='cart-items'>
			{productsList.length > 0
				? productsList.map((product) => (
						<CartProduct
							key={product.id}
							title={product.title}
							image={product.image}
							price={product.price}
							amount={product.amount}
						/>
				  ))
				: ''}
		</div>
	);
};

export default CartList;
