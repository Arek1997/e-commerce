import Container from '../UI/container/Container';
import ProductList from './Products-list';
import ProductsFilter from './Products-filter';

const Products = () => {
	return (
		<section className='products'>
			<Container>
				<div className='products__container'>
					<ProductsFilter />
					<ProductList />
				</div>
			</Container>
		</section>
	);
};

export default Products;
