import useFetch from 'react-fetch-hook';

import FeaturedItem from './Featured-item';
import { StyledList } from '../../../assets/style/featured/styled-list';
import loadingSpinner from '../../../assets/loadingspinner.gif';

import { API_URL } from '../../API/API';

const productsApi = `${API_URL}?limit=3`;

const FeaturedList = () => {
	const { isLoading, error, data } = useFetch(productsApi);

	let content = <p className='error-text'>Products not found</p>;

	if (isLoading) {
		content = (
			<img
				style={{ display: 'block', margin: '0 auto' }}
				src={loadingSpinner}
				alt='Loadingspinner'
			/>
		);
	}

	if (error) {
		content = (
			<p className='error-text'>
				{error.status} {error.message} Check if URL address "{productsApi}" is
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
