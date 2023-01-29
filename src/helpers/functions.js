export const wait = (second) =>
	new Promise((resolve) => setTimeout(resolve, second * 1000));
