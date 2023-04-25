import ReactPaginate from 'react-paginate';
import { HandlePaginationClick } from '../../interface';

interface Props {
	pageCount: number;
	selectedPage: number;
	handlePageClick: HandlePaginationClick;
}

const Pagination = ({ pageCount, selectedPage, handlePageClick }: Props) => {
	return (
		<ReactPaginate
			previousLabel={'prev'}
			nextLabel={'next'}
			pageCount={pageCount}
			onPageChange={handlePageClick}
			containerClassName={'pagination'}
			activeClassName={'active'}
			forcePage={selectedPage}
		/>
	);
};

export default Pagination;
