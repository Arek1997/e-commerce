import styled from 'styled-components';
import { Status } from '../../../interface';

export const StyledResponseMessage = styled.span<{ status: Status | null }>`
	:empty {
		display: none;
	}

	display: block;
	margin: 1.5em auto;
	color: ${({ status }) =>
		status === 'fail' ? 'var(--fail-color)' : 'var(--success-color)'};
`;
