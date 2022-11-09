import React, { useState } from 'react';

const ProductsFilter = () => {
	const [price, setPrice] = useState('50');

	const changePriceHandler = (e) => {
		setPrice(e.target.value);
	};
	return (
		<div className='products__filter'>
			<form className='products__form--one'>
				<label htmlFor='search'></label>
				<input name='search' type='text' placeholder='Search...' />
			</form>
			<h3 className='products__categories'>Categories</h3>
			<ul className='products__options'>
				<fieldset>
					<ul>
						<li>
							<input
								name='option'
								value='options__all'
								id='options__all'
								type='radio'
								defaultChecked
							/>
							<label htmlFor='options__all'>All</label>
						</li>
						<li>
							<input
								name='option'
								value='options__mew'
								id='options__mew'
								type='radio'
							/>
							<label htmlFor='options__men'>Men's clothing</label>
						</li>
						<li>
							<input
								name='option'
								value='options__woman'
								id='options__woman'
								type='radio'
							/>
							<label htmlFor='options__woman'>Women's clothing</label>
						</li>
						<li>
							<input
								name='option'
								value='options__jewelery'
								id='options__jewelery'
								type='radio'
							/>
							<label htmlFor='options__jewelery'>Jewelery</label>
						</li>
						<li>
							<input
								name='option'
								value='options__electronics'
								id='options__electronics'
								type='radio'
							/>
							<label htmlFor='options__electronics'>Electronics</label>
						</li>
					</ul>
				</fieldset>
			</ul>
			<form className='products__form--two'>
				<label htmlFor='input_price'></label>
				<input
					name='input_price'
					type='range'
					min={0}
					max={100}
					step={1}
					onChange={changePriceHandler}
				/>
				<span className='filtered__price'>Value: ${price}</span>
			</form>
		</div>
	);
};

export default ProductsFilter;
