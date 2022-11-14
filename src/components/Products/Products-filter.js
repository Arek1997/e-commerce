import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductFilter from '../../assets/style/products/styled-products-filter';

import { productsActions } from '../../store/products-slice';

const ProductsFilter = () => {
	const dispatch = useDispatch();
	const { productsArr } = useSelector((state) => state.products);

	const pricesArr = productsArr.map((product) => product.price);
	const maxPrice = Math.max(...pricesArr);

	const [price, setPrice] = useState(maxPrice);

	useEffect(() => {
		setPrice(maxPrice);
	}, [maxPrice]);

	const changePriceHandler = (e) => {
		setPrice(e.target.value);
	};

	const filterByCategory = (e) => {
		let newFilteredArr = [];

		if (e.target.value === 'all') {
			newFilteredArr = productsArr;
		} else {
			newFilteredArr = productsArr.filter(
				(product) => product.category === e.target.value
			);
		}
		dispatch(productsActions.updateFilteredArr(newFilteredArr));
	};

	return (
		<ProductFilter className='filter'>
			<form className='filter__form--one'>
				<label htmlFor='search'></label>
				<input name='search' type='text' placeholder='Search...' />
			</form>
			<h3 className='filter__categories'>Categories</h3>

			<fieldset className='filter__options' onChange={filterByCategory}>
				<ul>
					<li>
						<input
							name='option'
							value='all'
							id='options__all'
							type='radio'
							defaultChecked
						/>
						<label htmlFor='options__all'>All</label>
					</li>
					<li>
						<input
							name='option'
							value="men's clothing"
							id='options__men'
							type='radio'
						/>
						<label htmlFor='options__men'>Men's clothing</label>
					</li>
					<li>
						<input
							name='option'
							value="women's clothing"
							id='options__woman'
							type='radio'
						/>
						<label htmlFor='options__woman'>Women's clothing</label>
					</li>
					<li>
						<input
							name='option'
							value='jewelery'
							id='options__jewelery'
							type='radio'
						/>
						<label htmlFor='options__jewelery'>Jewelery</label>
					</li>
					<li>
						<input
							name='option'
							value='electronics'
							id='options__electronics'
							type='radio'
						/>
						<label htmlFor='options__electronics'>Electronics</label>
					</li>
				</ul>
			</fieldset>

			<h3 className='filter__categories'>Price</h3>

			<form className='filter__form--two'>
				<label htmlFor='input_price'></label>
				<input
					name='input_price'
					type='range'
					min={0}
					max={maxPrice}
					step={1}
					onChange={changePriceHandler}
				/>
				<span className='filter__price'>Value: ${price}</span>
			</form>
		</ProductFilter>
	);
};

export default ProductsFilter;
