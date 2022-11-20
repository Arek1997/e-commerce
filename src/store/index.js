import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import navigationSlice from './navigation-slice';
import filterSlice from './filter-slice';

const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		navigation: navigationSlice.reducer,
		filter: filterSlice.reducer,
	},
});

export default store;
