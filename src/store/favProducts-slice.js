import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	favProducts: [],
};

const favProductsSlice = createSlice({
	name: 'favProducts',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.favProducts.push(action.payload);
		},

		removeProduct: (state, action) => {
			const allProducts = state.favProducts;
			const productToRemove = allProducts.find(
				(product) => product.id === action.payload
			);

			const updatedProducts = allProducts.filter(
				(product) => product.id !== productToRemove.id
			);

			state.favProducts = updatedProducts;
		},
	},
});

export const favProductsActions = favProductsSlice.actions;
export default favProductsSlice;
