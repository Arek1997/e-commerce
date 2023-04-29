export interface AlertProps {
	status: AlertStatus;
	title: string;
	message: string;
}

export type Status = 'success' | 'warning' | 'fail';

export type AlertStatus = Status | '';

export interface FetchedProduct {
	id: string;
	title: string;
	description?: string;
	category?: string;
	price: number;
	image: string;
}

export interface SelectedProduct extends FetchedProduct {
	amount: number;
}

export type ProductAmountMode = 'increase' | 'decrease';

export type HandlePaginationClick = (e: { selected: number }) => void;

export interface isHomePageProp {
	isHomePage: boolean;
}

export interface AuthInputs {
	email: AuthEmail;
	password: AuthPassword;
}

export type AuthEmail = string;
export type AuthPassword = string;

export interface ResponseMessageProps {
	status: Status | null;
	message: string;
}

export interface ProfileDetails {
	createdAt: string;
	email: string;
	emailVerified: boolean;
	lastLoginAt: string;
	lastRefreshAt: string;
	localId: string;
	passwordHash: string;
	passwordUpdatedAt: number;
	validSince: string;
}
