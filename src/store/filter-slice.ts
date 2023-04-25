import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
		setFilterPrice: (state, action: PayloadAction<number>) => {
			state.filterPrice = action.payload;
		},

		setFilterCategory: (state, action: PayloadAction<string>) => {
			state.filterCategory = action.payload;
		},

		setFilterName: (state, action: PayloadAction<string>) => {
			state.filterName = action.payload;
		},
	},
});

export const { setFilterPrice, setFilterCategory, setFilterName } =
	filterSlice.actions;
export default filterSlice.reducer;
