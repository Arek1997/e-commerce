export interface AlertProps {
	status: AlertStatus;
	title: string;
	message: string;
}

export type AlertStatus = 'success' | 'warning' | 'fail' | '';
