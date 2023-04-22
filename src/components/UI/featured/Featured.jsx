import { Link } from 'react-router-dom';

import Container from '../container/Container';
import FeaturedList from './Featured-list';
import { StyledFeatured } from '../../../assets/style/featured/styled-featured';

const Featured = () => {
	return (
		<section className='pt-5 pb-5 text-center section'>
			<Container>
				<StyledFeatured>
					<h2>Featured</h2>
					<FeaturedList />
					<Link to='../products' className='featured-btn button'>
						All products
					</Link>
				</StyledFeatured>
			</Container>
		</section>
	);
};

export default Featured;
