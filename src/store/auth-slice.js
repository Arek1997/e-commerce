import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	token: '',
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: 'authentication',
	initialState,
	reducers: {},
});

export const authenticationActions = authSlice.actions;
export default authSlice;
