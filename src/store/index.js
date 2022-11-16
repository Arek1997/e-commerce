import { configureStore } from '@reduxjs/toolkit';

import productsSlice from './products-slice';
import cartSlice from './cart-slice';
import navigationSlice from './navigation-slice';

const store = configureStore({
	reducer: {
		products: productsSlice.reducer,
		cart: cartSlice.reducer,
		navigation: navigationSlice.reducer,
	},
});

export default store;
