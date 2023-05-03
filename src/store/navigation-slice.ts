import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isCartShown: false,
	isCartOrderShown: false,
	isProfileAuthModalShown: false,
	isProfileDetailsShown: false,
	isProfileFavProductsShown: false,
};

const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		toggleCart: (state) => {
			state.isCartShown = !state.isCartShown;
		},

		toggleCartOrder: (state) => {
			state.isCartOrderShown = !state.isCartOrderShown;
		},

		toggleProfileAuthModal: (state) => {
			state.isProfileAuthModalShown = !state.isProfileAuthModalShown;
		},

		toggleProfileDetails: (state) => {
			state.isProfileDetailsShown = !state.isProfileDetailsShown;
		},

		toggleProfileFavProducts: (state) => {
			state.isProfileFavProductsShown = !state.isProfileFavProductsShown;
		},
	},
});

export const {
	toggleCart,
	toggleCartOrder,

	toggleProfileAuthModal,
	toggleProfileDetails,
	toggleProfileFavProducts,
} = navigationSlice.actions;
export default navigationSlice.reducer;
