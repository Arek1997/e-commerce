import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import navigationSlice from './navigation-slice';
import filterSlice from './filter-slice';
import authSlice from './auth-slice';

const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		navigation: navigationSlice.reducer,
		filter: filterSlice.reducer,
		authentication: authSlice.reducer,
	},
});

export default store;
