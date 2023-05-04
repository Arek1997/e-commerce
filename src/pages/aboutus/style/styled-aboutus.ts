import styled from 'styled-components';
import {
	Slash,
	Relative,
	SectionHero as Hero,
} from '../../../assets/style/components';

export const SectionHero = styled.section`
	${Hero}
`;

export const StyledArticle = styled.article`
	display: flex;
	flex-direction: column;
	gap: 5rem;
	margin: 0 auto;

	@media (min-width: 768px) {
		padding-top: 6rem;
		padding-bottom: 6rem;
	}

	@media (min-width: 992px) {
		flex-direction: row;
		gap: 6rem;
		padding-top: 9rem;
		padding-bottom: 9rem;
	}
`;

export const StyledImageWrapper = styled.div`
	position: relative;

	@media (min-width: 992px) {
		min-width: 50%;
	}

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: hsl(0deg 2.37% 18.68% / 70%);
	}

	img {
		width: 100%;
		border-radius: 6px;

		@media (min-width: 992px) {
			height: 100%;
			object-fit: cover;
		}
	}
`;

export const StyledTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	h3 {
		${Relative}
		font-size: 2.5rem;
		opacity: 0.9;
		margin-bottom: 1em;
		color: var(--dark-blue);

		${Slash}

		@media (min-width: 768px) {
			font-size: 3.5rem;
		}
	}

	p {
		font-size: 1.5rem;
		text-align: left;
		color: var(--light-blue);
		line-height: 2;

		@media (min-width: 768px) {
			font-size: 1.7rem;
		}
	}
`;
