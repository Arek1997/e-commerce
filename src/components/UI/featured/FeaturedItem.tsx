import { FetchedProduct } from '../../../interface';
import ProductItem from '../../Products/ProductsItem';

const FeaturedItem = ({ id, title, price, image }: FetchedProduct) => {
	return <ProductItem id={id} image={image} title={title} price={price} />;
};

export default FeaturedItem;
