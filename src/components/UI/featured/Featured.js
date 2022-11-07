import { NavLink } from 'react-router-dom';

import Container from '../container/Container';
import FeaturedList from './Featured-list';
import { StyledFeatured } from '../../../style/featured/styled-featured';

const Featured = () => {
	return (
		<section className='pt-5 pb-5 text-center section'>
			<Container>
				<StyledFeatured>
					<h2>Featured</h2>
					<FeaturedList />
					<NavLink to='../products' className='featured-btn'>
						All products
					</NavLink>
				</StyledFeatured>
			</Container>
		</section>
	);
};

export default Featured;
