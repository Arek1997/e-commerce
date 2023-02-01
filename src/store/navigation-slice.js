import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isNavShown: false,
	isCartShown: false,
	isCartOrderShown: false,
	isOverlayShown: false,
	isProfileAuthModalShown: false,
	isProfileDetailsShown: false,
	ifProfileFavProductsShown: false,
};

const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		toggleNav: (state) => {
			state.isNavShown = !state.isNavShown;
		},

		toggleCart: (state) => {
			state.isCartShown = !state.isCartShown;
		},

		toggleCartOrder: (state) => {
			state.isCartOrderShown = !state.isCartOrderShown;
		},

		toggleOverlay: (state) => {
			state.isOverlayShown = !state.isOverlayShown;
		},

		toggleProfileAuthModal: (state) => {
			state.isProfileAuthModalShown = !state.isProfileAuthModalShown;
		},

		toggleProfileDetails: (state) => {
			state.isProfileDetailsShown = !state.isProfileDetailsShown;
		},

		toggleProfileFavProducts: (state) => {
			state.ifProfileFavProductsShown = !state.ifProfileFavProductsShown;
		},
	},
});

export const navigationActions = navigationSlice.actions;
export default navigationSlice;
