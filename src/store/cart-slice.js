import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	productsList: [],
	productsAmount: 0,
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			const newProduct = action.payload;

			state.productsList.push(newProduct);

			if (state.productsAmount < 9) {
				state.productsAmount += 1;
			} else {
				state.productsAmount = '+9';
			}
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
