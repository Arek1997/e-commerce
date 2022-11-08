import styled from 'styled-components';
import { Slash, Relative, SectionHero as Hero } from '../components';

export const SectionHero = styled.section`
	${Hero}
`;

export const SectionCenter = styled.section`
	padding: 2rem 0;
	text-align: center;

	article {
		max-width: 700px;
		margin: 0 auto;
	}

	h3 {
		${Relative}
		font-size: 2.5rem;
		opacity: 0.9;
		margin-bottom: 1em;

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
			font-size: 1.8rem;
		}
	}
`;
