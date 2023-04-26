import styled from 'styled-components';

export const StyledList = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 5rem;
	margin-bottom: 4em;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 1200px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;
