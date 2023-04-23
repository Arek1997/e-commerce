import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
	token: '',
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: 'authentication',
	initialState,
	reducers: {
		logIn: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
			state.isLoggedIn = true;
		},

		logOut: (state) => {
			state.token = '';
			state.isLoggedIn = false;
		},

		changeToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
	},
});

export const authenticationActions = authSlice.actions;
export default authSlice.reducer;
