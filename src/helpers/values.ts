export const API_URL = 'https://fakestoreapi.com/products';
export const MAX_PRODUCT_PRICE = 1000;
export const ITEMS_PER_PAGE = 8;

export const EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const PASSWORD_REGEXP =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/gm;

export const inputValidation = {
	email: {
		required: 'Email is required',
		pattern: {
			message: 'Email is not correct',
			value: EMAIL_REGEXP,
		},
	},

	password: {
		required: 'Password is required',
		pattern: {
			message:
				'Password have to contains at least 8 sign, at least one uppercase letter, at least one downcase letter, at least one number and at least one special sign.',
			value: PASSWORD_REGEXP,
		},
	},
};
