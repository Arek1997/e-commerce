import { useState, useEffect, useCallback } from 'react';

import FeaturedItem from './Featured-item';
import { StyledList } from '../../../assets/style/featured/styled-list';
import loadingSpinner from '../../../assets/loadingspinner.gif';

const FeaturedList = () => {
	const [productList, setProductList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const getThreeProducts = useCallback(async () => {
		setIsLoading(true);
		setError(null);

		const response = await fetch('https://fakestoreapi.com/products?limit=3');

		try {
			if (!response.ok) {
				console.log(response);
				throw new Error(
					`${response.status} error. Check if URL(${response.url}) is correct.`
				);
			}

			const data = await response.json();
			setProductList(data);

			getThreeProducts();
		} catch (err) {
			console.log(err);
			setError(err.message);
		}

		setIsLoading(false);
	}, []);

	useEffect(() => {
		getThreeProducts();
	}, [getThreeProducts]);

	let content = <p className='error-text'>Products not found</p>;

	if (productList.length > 0) {
		content = (
			<StyledList className='product-list'>
				{productList.map((item) => {
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

	if (error) {
		content = <p className='error-text'>{error}</p>;
	}

	if (isLoading) {
		content = (
			<img
				style={{ display: 'block', margin: '0 auto' }}
				src={loadingSpinner}
				alt='Loadingspinner'
			/>
		);
	}

	return <>{content}</>;
};

export default FeaturedList;
