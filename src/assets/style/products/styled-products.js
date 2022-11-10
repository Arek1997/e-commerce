import styled from 'styled-components';

const ProductContainer = styled.div`
	padding: 4rem 0;

	@media (min-width: 576px) {
		padding: 4rem 1.5rem;
	}

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 4fr;
	}
`;

export default ProductContainer;
