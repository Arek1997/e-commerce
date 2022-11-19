import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import navigationSlice from './navigation-slice';

const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		navigation: navigationSlice.reducer,
	},
});

export default store;
