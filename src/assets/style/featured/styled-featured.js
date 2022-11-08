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
		&:hover {
			background-color: var(--orange-hover);
		}
	}
`;
