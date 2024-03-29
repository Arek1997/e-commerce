import Container from '../UI/container/Container';
import ProductList from './ProductsList';
import ProductsFilter from './ProductsFilter';

import ProductContainer from './style/styled-products';

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
