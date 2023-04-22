import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertProps } from '../interface';

interface AlertState extends AlertProps {
	isOpen: boolean;
}

const initialState: AlertState = {
	isOpen: false,
	status: '',
	title: '',
	message: '',
};

const alertSlice = createSlice({
	name: 'alert',
	initialState,
	reducers: {
		showAlert: (state, action: PayloadAction<AlertProps | undefined>) => {
			state.isOpen = !state.isOpen;

			if (!action.payload) return;

			const { status, title, message } = action.payload;

			state.status = status;
			state.title = title;
			state.message = message;
		},
	},
});

export const { showAlert } = alertSlice.actions;
export default alertSlice.reducer;
