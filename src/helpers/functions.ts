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
