import { useLocation } from 'react-router-dom';

const usePathName = (name: string) => {
	const { pathname } = useLocation();
	const matches = pathname.slice(1) === name;
	return matches;
};

export default usePathName;
