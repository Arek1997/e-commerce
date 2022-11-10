import ProductItem from '../../Products/Products-item';

const FeaturedItem = (props) => {
	const { id, image, title, price } = props;

	return <ProductItem id={id} image={image} title={title} price={price} />;
};

export default FeaturedItem;
