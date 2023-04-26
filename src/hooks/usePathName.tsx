import { useLocation } from 'react-router-dom';

const usePathName = (name: string) => {
	const { pathname } = useLocation();
	const matches = pathname === name;
	return matches;
};

export default usePathName;
