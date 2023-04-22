import ProductSection from '../components/Products/Products';
import Container from '../components/UI/container/Container';
import { SectionHero } from '../assets/style/hero-section/styled-hero';

const Products = () => {
	return (
		<>
			<SectionHero>
				<Container>
					<h2>Products</h2>
				</Container>
			</SectionHero>

			<ProductSection />
		</>
	);
};

export default Products;
