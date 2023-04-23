import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import navigationSlice from './navigation-slice';
import filterSlice from './filter-slice';
import authSlice from './auth-slice';
import favProductsSlice from './favProducts-slice';
import alertSlice from './alert-slice';

const store = configureStore({
	reducer: {
		cart: cartSlice,
		navigation: navigationSlice,
		filter: filterSlice.reducer,
		authentication: authSlice,
		favProducts: favProductsSlice.reducer,
		alert: alertSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
