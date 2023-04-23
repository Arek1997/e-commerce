import { useState, useEffect } from 'react';

const useMediaQueries = (queries: string) => {
	const getMatches = (queries: string) => matchMedia(`(${queries})`).matches;
	const [matches, setMatches] = useState(getMatches(queries));

	const handleChange = () => setMatches(getMatches(queries));

	useEffect(() => {
		window.addEventListener('resize', handleChange);

		return () => window.removeEventListener('resize', handleChange);
	}, [queries]);

	return matches;
};

export default useMediaQueries;
