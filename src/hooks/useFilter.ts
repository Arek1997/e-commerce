import { useState, useEffect } from 'react';
import { useAppSelector } from './reduxHooks';
import { FetchedProduct } from '../interface';

const useFilter = (arrayToFilter: FetchedProduct[]) => {
	const [filteredArr, setFilteredArr] = useState<FetchedProduct[]>([]);

	const { filterName, filterCategory, filterPrice } = useAppSelector(
		(state) => state.filter
	);

	const checkFilterCategory = (item: FetchedProduct) => {
		if (filterCategory === 'all') {
			return item.category !== filterCategory;
		} else {
			return item.category === filterCategory;
		}
	};

	useEffect(() => {
		if (!arrayToFilter.length) return;

		const newArr = arrayToFilter
			.filter((item) => item.title.toLowerCase().includes(filterName))
			.filter(checkFilterCategory)
			.filter((item) => item.price <= filterPrice);

		setFilteredArr(newArr);
	}, [arrayToFilter, filterName, filterPrice, filterCategory]);

	return filteredArr;
};

export default useFilter;
