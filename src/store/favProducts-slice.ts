import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SelectedProduct } from '../interface';

interface FavProductsState {
	favProductsArr: SelectedProduct[];
}

const initialState: FavProductsState = {
	favProductsArr:
		JSON.parse(localStorage.getItem('favProducts') as string) || [],
};

const favProductsSlice = createSlice({
	name: 'favProducts',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<SelectedProduct>) => {
			state.favProductsArr.push(action.payload);
		},

		removeProduct: (state, action: PayloadAction<string>) => {
			const allProducts = state.favProductsArr;
			const productToRemove = allProducts.find(
				(product) => product.id === action.payload
			)!;

			const updatedProducts = allProducts.filter(
				(product) => product.id !== productToRemove.id
			);

			state.favProductsArr = updatedProducts;
		},
	},
});

export const favProductsActions = favProductsSlice.actions;
export default favProductsSlice.reducer;
