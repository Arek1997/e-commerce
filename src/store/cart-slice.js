import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	productsList: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			const newProduct = action.payload;

			const productExist = state.productsList.some(
				(product) => product.id === newProduct.id
			);

			if (productExist) {
				const existingProduct = state.productsList.find(
					(product) => product.id === newProduct.id
				);

				existingProduct.amount += newProduct.amount;
			} else {
				state.productsList.push(newProduct);
			}
		},

		changeProductAmount: (state, action) => {
			const currentProduct = state.productsList.find(
				(product) => product.id === action.payload.id
			);

			action.payload.increase
				? currentProduct.amount++
				: currentProduct.amount--;
		},

		removeProduct: (state, action) => {
			const allProducts = state.productsList;
			const productToRemove = allProducts.find(
				(product) => product.id === action.payload.id
			);

			const updatedProducts = allProducts.filter(
				(product) => product.id !== productToRemove.id
			);

			state.productsList = updatedProducts;
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
