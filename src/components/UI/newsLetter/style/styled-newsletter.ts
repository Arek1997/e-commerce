import styled from 'styled-components';

export const StyledWrapper = styled.div`
	@media (min-width: 992px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		column-gap: 10rem;

		p,
		div {
			width: 50%;
		}
		div {
			max-width: 50rem;
		}
	}

	p {
		font-size: 1.4rem;
		line-height: 1.8;
		color: var(--light-blue);

		@media (min-width: 768px) {
			font-size: 1.6rem;
		}
	}
`;
export const StyledHeading = styled.h3`
	margin-bottom: 0.6em;
	font-size: 2.2rem;
	color: var(--dark-blue);

	@media (min-width: 768px) {
		font-size: 3rem;
	}
`;
