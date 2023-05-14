export const wait = (second: number) =>
	new Promise((resolve) => setTimeout(resolve, second * 1000));

export const getAuthUrl = (isLogin: boolean) => {
	return isLogin
		? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
				import.meta.env.VITE_FIREBASE_KEY
		  }`
		: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
				import.meta.env.VITE_FIREBASE_KEY
		  }`;
};

export const checkIfEmailAlreadyExists = async (email: string) => {
	try {
		const response = await fetch(
			`https://alledrogo-e-commerce-default-rtdb.europe-west1.firebasedatabase.app/newsletter-list.json?orderBy="email"&equalTo="${email}"`
		);

		if (!response.ok) {
			throw new Error('Something went wrong, try later.');
		}

		const data = Object.values(await response.json());
		return data.length ? true : false;
	} catch (err: any) {
		const errorMessage = err.message;
		console.log(errorMessage);
		throw new Error(errorMessage);
	}
};
