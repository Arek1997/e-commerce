import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useFetch from 'react-fetch-hook';

import loadingSpinner from '../../assets/loadingspinner.gif';
import StyledProductsList from '../../assets/style/products/styled-products-list';

import ProductItem from './Products-item';
import { API_URL } from '../API/API';
import { productsActions } from '../../store/products-slice';

const PRODUCTS_API = `${API_URL}?limit=8`;
let isInitial = true; // Fetch data only if isInitial

const ProductsList = () => {
	const dispatch = useDispatch();

	const { filteredArr } = useSelector((state) => state.products);

	const { isLoading, error, data } = useFetch(PRODUCTS_API, {
		depends: [isInitial],
	});

	useEffect(() => {
		data && dispatch(productsActions.saveFetchedProducts(data));
		// Push new data to state, only if there are new data
	}, [data]);

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
				{error.status} {error.message} Check if URL address "{PRODUCTS_API}" is
				correct.
			</p>
		);
	}

	if (filteredArr.length > 0) {
		isInitial = false;

		content = (
			<>
				{filteredArr.map((item) => {
					return (
						<ProductItem
							key={item.id}
							id={item.id}
							image={item.image}
							title={item.title}
							price={item.price}
						/>
					);
				})}
			</>
		);
	}

	return (
		<StyledProductsList className='products__list text-center'>
			{content}
		</StyledProductsList>
	);
};

export default ProductsList;
