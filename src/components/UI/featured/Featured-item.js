import { Link } from 'react-router-dom';
import { StyledItem } from '../../../style/featured/styled-item';

const FeaturedItem = (props) => {
	return (
		<StyledItem className='product-item'>
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
				<span className='product-price'>{props.price}</span>
			</div>
		</StyledItem>
	);
};

export default FeaturedItem;
