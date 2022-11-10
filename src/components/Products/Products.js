import Container from '../UI/container/Container';
import ProductList from './Products-list';
import ProductsFilter from './Products-filter';

import ProductContainer from '../../assets/style/products/styled-products';

const Products = () => {
	return (
		<section className='products section'>
			<Container>
				<ProductContainer className='products__container'>
					<ProductsFilter />
					<ProductList />
				</ProductContainer>
			</Container>
		</section>
	);
};

export default Products;
