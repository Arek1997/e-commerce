import styled from 'styled-components';

const StyledOverlay = styled.div`
	position: fixed;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgb(0 0 0 / 40%);
	z-index: 2;
`;

export default StyledOverlay;
