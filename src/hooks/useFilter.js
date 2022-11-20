import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useFilter = (arrayToFilter) => {
	const [filteredArr, setFilteredArr] = useState([]);

	const { filterName, filterCategory, filterPrice } = useSelector(
		(state) => state.filter
	);

	const checkFilterCategory = (item) => {
		if (filterCategory === 'all') {
			return item.category !== filterCategory;
		} else {
			return item.category === filterCategory;
		}
	};

	useEffect(() => {
		if (arrayToFilter.length === 0) return;

		const newArr = arrayToFilter
			.filter((item) => item.title.toLowerCase().includes(filterName))
			.filter(checkFilterCategory)
			.filter((item) => item.price <= filterPrice);

		setFilteredArr(newArr);
	}, [arrayToFilter, filterName, filterPrice, filterCategory]);

	return filteredArr;
};

export default useFilter;
