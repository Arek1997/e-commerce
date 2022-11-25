import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showAlert: false,
	status: null,
	title: '',
	message: '',
};

const alertSlice = createSlice({
	name: 'alert',
	initialState,
	reducers: {
		showAlert: (state, action) => {
			state.showAlert = !state.showAlert;
			state.status = action.payload?.status;
			state.title = action.payload?.title;
			state.message = action.payload?.message;
		},
	},
});

export const alertActions = alertSlice.actions;
export default alertSlice;
