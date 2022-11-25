import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import navigationSlice from './navigation-slice';
import filterSlice from './filter-slice';
import authSlice from './auth-slice';
import favProductsSlice from './favProducts-slice';
import alertSlice from './alert-slice';

const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		navigation: navigationSlice.reducer,
		filter: filterSlice.reducer,
		authentication: authSlice.reducer,
		favProducts: favProductsSlice.reducer,
		alert: alertSlice.reducer,
	},
});

export default store;
