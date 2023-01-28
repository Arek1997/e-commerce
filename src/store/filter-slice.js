import { createSlice } from '@reduxjs/toolkit';
import { MAX_PRODUCT_PRICE } from '../helpers/values';

const initialState = {
	filterPrice: MAX_PRODUCT_PRICE,
	filterCategory: 'all',
	filterName: '',
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilterPrice: (state, action) => {
			state.filterPrice = action.payload;
		},

		setFilterCategory: (state, action) => {
			state.filterCategory = action.payload;
		},

		setFilterName: (state, action) => {
			state.filterName = action.payload;
		},
	},
});

export const filterActions = filterSlice.actions;
export default filterSlice;
