import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import ProductFilter from '../../assets/style/products/styled-products-filter';
import { filterActions } from '../../store/filter-slice';

const ProductsFilter = () => {
	const dispatch = useDispatch();
	const { filterName, filterCategory, filterPrice } = useSelector(
		(state) => state.filter
	);

	const filterByName = (e) => {
		dispatch(filterActions.setFilterName(e.target.value));
	};

	const filterByCategory = (e) => {
		dispatch(filterActions.setFilterCategory(e.target.value));
	};

	const filterbyPrice = (e) => {
		dispatch(filterActions.setFilterPrice(e.target.valueAsNumber));
	};

	// Debounce function to avoid rerenders for every value change, by onChange listener
	const debounceFilterbyPrice = debounce(filterbyPrice, 50);

	return (
		<ProductFilter className='filter'>
			<form className='filter__form--one'>
				<label htmlFor='search'></label>
				<input
					name='search'
					id='search'
					type='text'
					value={filterName}
					placeholder='Search...'
					onChange={filterByName}
				/>
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
							defaultChecked={filterCategory.includes(`all`)}
						/>
						<label htmlFor='options__all'>All</label>
					</li>
					<li>
						<input
							name='option'
							value="men's clothing"
							id='options__men'
							type='radio'
							defaultChecked={filterCategory.includes(`men's clothing`)}
						/>
						<label htmlFor='options__men'>Men's clothing</label>
					</li>
					<li>
						<input
							name='option'
							value="women's clothing"
							id='options__woman'
							type='radio'
							defaultChecked={filterCategory.includes(`women's clothing`)}
						/>
						<label htmlFor='options__woman'>Women's clothing</label>
					</li>
					<li>
						<input
							name='option'
							value='jewelery'
							id='options__jewelery'
							type='radio'
							defaultChecked={filterCategory.includes(`jewelery`)}
						/>
						<label htmlFor='options__jewelery'>Jewelery</label>
					</li>
					<li>
						<input
							name='option'
							value='electronics'
							id='options__electronics'
							type='radio'
							defaultChecked={filterCategory.includes(`electronics`)}
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
					id='input_price'
					type='range'
					min={0}
					max={1000}
					step={1}
					onChange={debounceFilterbyPrice}
				/>
				<span className='filter__price'>Value: ${filterPrice}</span>
			</form>
		</ProductFilter>
	);
};

export default ProductsFilter;
