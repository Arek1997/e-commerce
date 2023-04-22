import useFetch from 'react-fetch-hook';

import FeaturedItem from './Featured-item';
import { StyledList } from '../../../assets/style/featured/styled-list';

import { API_URL } from '../../../helpers/values';
import Loading from '../../Loading/Loading';

const PRODUCTS_API = `${API_URL}?limit=3`;

const FeaturedList = () => {
	const { isLoading, error, data } = useFetch(PRODUCTS_API);

	let content = <p className='error-text'>Products not found</p>;

	if (isLoading) {
		content = <Loading />;
	}

	if (error) {
		content = (
			<p className='error-text'>
				{error.status} {error.message} Check if URL address "{PRODUCTS_API}" is
				correct.
			</p>
		);
	}

	if (data) {
		content = (
			<StyledList className='product-list'>
				{data.map((item) => {
					return (
						<FeaturedItem
							key={item.id}
							id={item.id}
							image={item.image}
							title={item.title}
							price={item.price}
						/>
					);
				})}
			</StyledList>
		);
	}

	return <>{content}</>;
};

export default FeaturedList;
