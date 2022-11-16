import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isNavShown: false,
	isCartShown: false,
	isOverlayShown: false,
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

		toggleOverlay: (state) => {
			state.isOverlayShown = !state.isOverlayShown;
		},
	},
});

export const navigationActions = navigationSlice.actions;
export default navigationSlice;
