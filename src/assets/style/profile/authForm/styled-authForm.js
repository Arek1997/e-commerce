import styled from 'styled-components';
import { InputAndButton } from '../../components';

export const StyledAuthForm = styled.form`
	display: flex;
	flex-direction: column;

	${InputAndButton}

	.login-error,
		.password-error {
		margin-bottom: 1em;
		font-size: 1.4rem;
		color: var(--fail-color);
	}
`;
