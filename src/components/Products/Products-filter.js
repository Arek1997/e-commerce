import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

import ProductFilter from '../../assets/style/products/styled-products-filter';

let defaultPrice = 1000;
let defaultCategory = 'all';

const ProductsFilter = () => {
	useEffect(() => {
		defaultPrice = window.localStorage.getItem('price') || defaultPrice;
		defaultCategory =
			window.localStorage.getItem('category') || defaultCategory;
	});

	const [price, setPrice] = useState(defaultPrice);
	const [category, setCategory] = useState(defaultCategory);

	const filterByCategory = (e) => {
		setCategory(e.target.value);
		window.localStorage.setItem('category', e.target.value);
	};

	const filterbyPrice = (e) => {
		const choosedPrice = e.target.value;
		window.localStorage.setItem('price', choosedPrice);
		setPrice(choosedPrice);
	};

	// Debounce function to avoid rerenders for every value change, by onChange listener
	const debounceChangePriceHandler = debounce(filterbyPrice, 100);

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
							defaultChecked={defaultCategory.includes(`all`)}
						/>
						<label htmlFor='options__all'>All</label>
					</li>
					<li>
						<input
							name='option'
							value="men's clothing"
							id='options__men'
							type='radio'
							defaultChecked={defaultCategory.includes(`men's clothing`)}
						/>
						<label htmlFor='options__men'>Men's clothing</label>
					</li>
					<li>
						<input
							name='option'
							value="women's clothing"
							id='options__woman'
							type='radio'
							defaultChecked={defaultCategory.includes(`women's clothing`)}
						/>
						<label htmlFor='options__woman'>Women's clothing</label>
					</li>
					<li>
						<input
							name='option'
							value='jewelery'
							id='options__jewelery'
							type='radio'
							defaultChecked={defaultCategory.includes(`jewelery`)}
						/>
						<label htmlFor='options__jewelery'>Jewelery</label>
					</li>
					<li>
						<input
							name='option'
							value='electronics'
							id='options__electronics'
							type='radio'
							defaultChecked={defaultCategory.includes(`electronics`)}
						/>
						<label htmlFor='options__electronics'>Electronics</label>
					</li>
				</ul>
			</fieldset>

			<h3 className='filter__categories'>Max price</h3>

			<form className='filter__form--two'>
				<label htmlFor='input_price'></label>
				<input
					name='input_price'
					type='range'
					min={0}
					max={1000}
					step={1}
					onChange={debounceChangePriceHandler}
				/>
				<span className='filter__price'>Value: ${price}</span>
			</form>
		</ProductFilter>
	);
};

export default ProductsFilter;
