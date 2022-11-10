import { Link } from 'react-router-dom';
import StyledProduct from '../../assets/style/products/styled-products-item';

const ProductsItem = (props) => {
	return (
		<StyledProduct className='product-item '>
			<div className='product-body'>
				<img className='product-img' src={props.image} alt={props.title} />
				<div className='product-icon-actions'>
					<Link to={`../products/${props.id}`} className='product-details'>
						<i className='fa-solid fa-magnifying-glass'></i>
					</Link>
					<button className='add-product'>
						<i className='fa-solid fa-cart-shopping'></i>
					</button>
				</div>
			</div>
			<div className='product-bottom'>
				<h3 className='product-title'>{props.title}</h3>
				<span className='product-price'>${props.price.toFixed(2)}</span>
			</div>
		</StyledProduct>
	);
};

export default ProductsItem;
