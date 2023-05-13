import styled from 'styled-components';
import { Status } from '../../../interface';

export const StyledResponseMessage = styled.span<{ status: Status | null }>`
	:empty {
		display: none;
	}

	display: block;
	margin: 1.5em auto;
	font-size: 1.2rem;
	font-weight: bold;
	color: ${({ status }) =>
		status === 'fail' ? 'var(--fail-color)' : 'var(--success-color)'};
`;
