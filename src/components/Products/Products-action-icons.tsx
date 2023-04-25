import StyledActionIcons from './style/styled-products-action-icons';
import { Link } from 'react-router-dom';

interface Props {
	favourite: boolean;
	id: string;
	onAddProduct: () => void;
	onFavourite: () => void;
}

const ProductsActionIcons = ({
	favourite,
	id,
	onAddProduct,
	onFavourite,
}: Props) => {
	return (
		<StyledActionIcons className='product__icon-actions' favourite={favourite}>
			<Link
				to={`../products/${id}`}
				aria-label='Show product details'
				className='product__details'
			>
				<i className='fa-solid fa-magnifying-glass'></i>
			</Link>
			<button
				aria-label='add product button'
				className='product__add'
				onClick={onAddProduct}
			>
				<i className='fa-solid fa-cart-shopping'></i>
			</button>

			<button
				aria-label='add to favourite button'
				className='product__favourite'
				onClick={onFavourite}
			>
				<i className='fa-solid fa-heart'></i>
			</button>
		</StyledActionIcons>
	);
};

export default ProductsActionIcons;
