import styled from 'styled-components';

export const StyledSection = styled.section`
	background-color: #eaded7;
	margin-bottom: 10em;

	@media (min-width: 1200px) {
		padding-top: 0;
		padding-bottom: 0;
		margin-bottom: 20em;

		& > div {
			transform: translateY(7em);
		}
	}

	h2,
	h3,
	p {
		opacity: var(--small-opacity);
	}

	p {
		font-size: 1.4rem;
		line-height: 1.8;

		@media (min-width: 768px) {
			font-size: 1.6rem;
		}
	}
`;

export const StyledTextWrapper = styled.div`
	h2 {
		font-size: 2.2rem;
		margin-bottom: 1em;
	}

	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: space-between;

		h2,
		p {
			width: 50%;
		}

		h2 {
			font-size: 3rem;
			margin-bottom: 0em;
		}
	}
`;

export const StyledCartWrapper = styled.div`
	display: grid;
	gap: 5em;
	margin-top: 5em;

	@media (min-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
	}
`;
