import Container from '../container/Containter';
import FeaturedList from './Featured-list';
import { StyledFeatured } from '../../../style/featured/styled-featured';

const Featured = () => {
	return (
		<section className='pt-5 pb-5 text-center section'>
			<Container>
				<StyledFeatured>
					<h2>Featured</h2>
					<FeaturedList />
					<a href='' className='featured-btn'>
						All products
					</a>
				</StyledFeatured>
			</Container>
		</section>
	);
};

export default Featured;
