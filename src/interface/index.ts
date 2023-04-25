export interface AlertProps {
	status: AlertStatus;
	title: string;
	message: string;
}

export type AlertStatus = 'success' | 'warning' | 'fail' | '';

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
