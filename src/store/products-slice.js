import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	productsArr: [],
	filteredArr: [],
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		saveFetchedProducts: (state, action) => {
			state.productsArr.push(...action.payload);
			state.filteredArr = [...state.productsArr];
		},

		updateFilteredArr: (state, action) => {
			state.filteredArr = action.payload;
		},
	},
});

export const productsActions = productsSlice.actions;

export default productsSlice;
