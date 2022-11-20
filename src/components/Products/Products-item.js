import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import { Link } from 'react-router-dom';
import StyledProduct from '../../assets/style/products/styled-products-item';

const ProductsItem = (props) => {
	const dispatch = useDispatch();

	const product = {
		id: props.id,
		title: props.title,
		price: props.price,
		image: props.image,
		amount: 1,
	};

	const addProductHandler = () => dispatch(cartActions.addProduct(product));

	return (
		<StyledProduct className='product'>
			<div className='product__body'>
				<img className='product__img' src={props.image} alt={props.title} />
				<div className='product__icon-actions'>
					<Link
						to={`../products/${props.id}`}
						aria-label='Show product details'
						className='product__details'
					>
						<i className='fa-solid fa-magnifying-glass'></i>
					</Link>
					<button
						aria-label='add product button'
						className='product__add'
						onClick={addProductHandler}
					>
						<i className='fa-solid fa-cart-shopping'></i>
					</button>
				</div>
			</div>
			<div className='product__bottom'>
				<Link to={`../products/${props.id}`}>
					<h3 className='product__title'>{props.title}</h3>
				</Link>
				<span className='product__price'>${props.price.toFixed(2)}</span>
			</div>
		</StyledProduct>
	);
};

export default ProductsItem;
