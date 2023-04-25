import styled from 'styled-components';

const StyledProductsList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 7rem;
`;

export default StyledProductsList;
