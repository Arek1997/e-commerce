import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import loadingSpinner from '../../assets/loadingspinner.gif';
import StyledProductsList from '../../assets/style/products/styled-products-list';

import ProductItem from './Products-item';
import { API_URL } from '../API/API';
import useFilter from '../../hooks/useFilter';

const itemsPerPage = 8;
let pageCount = 0;

const ProductsList = () => {
	const [offset, setOffset] = useState(0);
	// offset is needed to calculate from which index slice method have to reduce fetched array
	const [products, setProducts] = useState([]);
	const [isloading, setIsloading] = useState(false);
	const [error, setError] = useState(null);
	const [selectedPage, setSelectedPage] = useState(0);

	const arrtoRender = useFilter(products);

	console.log('arr to render', arrtoRender);

	const fetchData = async () => {
		setIsloading(true);
		setError(null);

		try {
			const response = await fetch(API_URL);

			if (!response.ok) {
				throw new Error('Something went wrong');
			}

			const data = await response.json();

			const productSlice = data.slice(offset, offset + itemsPerPage);
			setProducts(productSlice);
			pageCount = Math.ceil(data.length / itemsPerPage);
		} catch (err) {
			setError(err.message);
		}

		setIsloading(false);
	};

	useEffect(() => {
		fetchData();
	}, [offset]);

	const handlePageClick = (e) => {
		const selectedPage = e.selected;
		setSelectedPage(selectedPage);
		setOffset(selectedPage * itemsPerPage);
	};

	let content = <p className='error-text'>Products not found</p>;

	if (isloading) {
		return (content = (
			<img
				style={{ display: 'block', margin: '0 auto' }}
				src={loadingSpinner}
				alt='Loadingspinner'
			/>
		));
	}

	if (error) {
		return (content = (
			<p className='error-text'>
				{error.message} Check if URL address "{API_URL}" is correct.
			</p>
		));
	}

	if (arrtoRender.length > 0) {
		content = (
			<>
				{arrtoRender.map((item) => {
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
			<ReactPaginate
				previousLabel={'prev'}
				nextLabel={'next'}
				pageCount={pageCount}
				onPageChange={handlePageClick}
				containerClassName={'pagination'}
				activeClassName={'active'}
				forcePage={selectedPage}
			/>
		</StyledProductsList>
	);
};

export default ProductsList;
