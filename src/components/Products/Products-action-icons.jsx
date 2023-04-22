import StyledActionIcons from '../../assets/style/products/styled-products-action-icons';
import { Link } from 'react-router-dom';

const ProductsActionIcons = (props) => {
	return (
		<StyledActionIcons
			className='product__icon-actions'
			favourite={props.favourite}
		>
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
				onClick={props.onAddProduct}
			>
				<i className='fa-solid fa-cart-shopping'></i>
			</button>

			<button
				aria-label='add to favourite button'
				className='product__favourite'
				onClick={props.onFavourite}
			>
				<i className='fa-solid fa-heart'></i>
			</button>
		</StyledActionIcons>
	);
};

export default ProductsActionIcons;
