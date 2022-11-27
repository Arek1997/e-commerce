import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	favProductsArr: JSON.parse(localStorage.getItem('favProducts')) || [],
};

const favProductsSlice = createSlice({
	name: 'favProducts',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.favProductsArr.push(action.payload);
		},

		removeProduct: (state, action) => {
			const allProducts = state.favProductsArr;
			const productToRemove = allProducts.find(
				(product) => product.id === action.payload
			);

			const updatedProducts = allProducts.filter(
				(product) => product.id !== productToRemove.id
			);

			state.favProductsArr = updatedProducts;
		},
	},
});

export const favProductsActions = favProductsSlice.actions;
export default favProductsSlice;
