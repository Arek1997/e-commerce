import { useState, useEffect } from 'react';

import ProductItem from './Products-item';
import { API_URL, ITEMS_PER_PAGE } from '../../helpers/values';
import useFilter from '../../hooks/useFilter';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';

import StyledProductsList from './style/styled-products-list';
import { FetchedProduct, HandlePaginationClick } from '../../interface';

let pageCount = 0;

const ProductsList = () => {
	const [offset, setOffset] = useState(0);
	// offset is needed to calculate from which index slice method have to reduce fetched array
	const [fetchedProducts, setFetchedProducts] = useState<FetchedProduct[]>([]);
	const [isloading, setIsloading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const [selectedPage, setSelectedPage] = useState(0);

	const arrtoRender = useFilter(fetchedProducts);

	const fetchData = async () => {
		setIsloading(true);
		setError(null);

		try {
			const response = await fetch(API_URL);

			if (!response.ok) {
				throw new Error('Something went wrong');
			}

			const data: FetchedProduct[] = await response.json();

			const productSlice = data.slice(offset, offset + ITEMS_PER_PAGE);
			setFetchedProducts(productSlice);
			pageCount = Math.ceil(data.length / ITEMS_PER_PAGE);
		} catch (err: any) {
			setError(err.message);
		}

		setIsloading(false);
	};

	useEffect(() => {
		fetchData();
	}, [offset]);

	let content = <p className='error-text'>Products not found</p>;

	if (isloading) {
		return (content = <Loading />);
	}

	if (error) {
		return (content = (
			<p className='error-text'>
				{error.message} Check if URL address "{API_URL}" is correct.
			</p>
		));
	}

	if (arrtoRender.length) {
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

			<Pagination
				pageCount={pageCount}
				handlePageClick={({ selected: selectedPage }) => {
					setSelectedPage(selectedPage);
					setOffset(selectedPage * ITEMS_PER_PAGE);
				}}
				selectedPage={selectedPage}
			/>
		</StyledProductsList>
	);
};

export default ProductsList;
