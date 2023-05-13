import styled from 'styled-components';

export const StyledWrapper = styled.div`
	@media (min-width: 992px) {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		column-gap: 10rem;

		.newsletter-paragraph,
		.newsletter-form-wrapper {
			width: 50%;
		}
		.newsletter-form-wrapper {
			max-width: 50rem;
		}
	}

	.newsletter-paragraph {
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

	@media (min-width: 992px) {
		margin-bottom: 1em;
	}
`;
