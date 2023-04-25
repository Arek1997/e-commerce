import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SelectedProduct, ProductAmountMode } from '../interface/index';

interface CartState {
	productsList: SelectedProduct[];
}

const initialState: CartState = {
	productsList: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<SelectedProduct>) => {
			const newProduct = action.payload;

			const productExist = state.productsList.some(
				(product) => product.id === newProduct.id
			);

			if (productExist) {
				const existingProduct = state.productsList.find(
					(product) => product.id === newProduct.id
				)!;

				existingProduct.amount += newProduct.amount;
			} else {
				state.productsList.push(newProduct);
			}
		},

		changeProductAmount: (
			state,
			action: PayloadAction<{ id: string; mode: ProductAmountMode }>
		) => {
			const { id: payloadID, mode } = action.payload;

			const currentProduct = state.productsList.find(
				(product) => product.id === payloadID
			)!;

			mode === 'increase' ? currentProduct.amount++ : currentProduct.amount--;
		},

		removeProduct: (state, action: PayloadAction<string>) => {
			const payloadID = action.payload;

			const allProducts = state.productsList;
			const productToRemove = allProducts.find(
				(product) => product.id === payloadID
			)!;

			const updatedProducts = allProducts.filter(
				(product) => product.id !== productToRemove.id
			);

			state.productsList = updatedProducts;
		},

		clearProductsList: (state) => {
			state.productsList = initialState.productsList;
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
