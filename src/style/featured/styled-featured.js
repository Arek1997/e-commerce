import styled from 'styled-components';
import { Slash, Relative } from '../components';

export const StyledFeatured = styled.div`
	h2 {
		${Relative}
		margin-bottom: 2em;
		font-size: 3rem;
		color: var(--light-gray);

		${Slash}
	}

	.featured-btn {
		display: inline-block;
		padding: 1em 2em;
		color: #fff;
		background-color: var(--orange);
		text-transform: uppercase;
		border-radius: 6px;
		font-size: 1.4rem;
		font-weight: bold;
		transition: background-color 0.3s;

		&:hover {
			background-color: var(--orange-hover);
		}
	}
`;
