import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
	return (
		<ReactPaginate
			previousLabel={'prev'}
			nextLabel={'next'}
			pageCount={props.pageCount}
			onPageChange={props.handlePageClick}
			containerClassName={'pagination'}
			activeClassName={'active'}
			forcePage={props.selectedPage}
		/>
	);
};

export default Pagination;
