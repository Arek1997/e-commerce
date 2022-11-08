import { useState, useEffect } from 'react';

import FeaturedItem from './Featured-item';

import { StyledList } from '../../../assets/style/featured/styled-list';

const FeaturedList = () => {
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		try {
			const getThreeProducts = async () => {
				const res = await fetch('https://fakestoreapi.com/products?limit=3');
				if (!res.ok) {
					console.log(res);
					throw new Error('Something went wrong.');
				} else {
					const data = await res.json();
					setProductList(data);
				}
			};

			getThreeProducts();
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
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
};

export default FeaturedList;
