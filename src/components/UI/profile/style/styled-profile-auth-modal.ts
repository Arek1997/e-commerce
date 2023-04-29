import styled from 'styled-components';
import {
	Close,
	ModalBase,
	InputAndButton,
	Heading,
} from '../../../../assets/style/components';

import { isHomePageProp as Props, Status } from '../../../../interface';

export const StyledProfileAuthModal = styled.div<Props>`
	max-width: 40rem;
	color: ${({ isHomePage }) => (isHomePage ? '#000' : '#fff')};
	background-color: ${({ isHomePage }) =>
		isHomePage ? 'rgb(255 255 255 / 70%)' : 'rgb(0 0 0 / 70%)'};
	${ModalBase}

	.closeModal {
		${Close}
		font-size: 2rem;
		top: 2rem;
		right: 1rem;

		color: ${({ isHomePage }) =>
			isHomePage ? 'var(--light-gray)' : 'var(--dirty-white)'};

		@media (min-width: 300px) {
			font-size: 3rem;
		}

		@media (min-width: 350px) {
			right: 2rem;
		}
	}

	h2 {
		${Heading}

		&::before {
			width: 22ch;
		}
	}

	p {
		font-size: 1.6rem;
		margin-bottom: 0.8em;
	}

	form {
		display: flex;
		flex-direction: column;

		${InputAndButton}

		.login-error,
		.password-error {
			margin-bottom: 1em;
			font-size: 1.4rem;
			color: var(--fail-color);
		}
	}

	.paragraph-bottom {
		display: flex;
		justify-content: space-around;
		margin-bottom: 0;
		margin-top: 1em;

		button {
			color: inherit;
			font-size: 1.4rem;
			background-color: transparent;
			border-bottom: 3px solid var(--orange);
		}
	}
`;

export const StyledResponseMessage = styled.span<{ status: Status | null }>`
	display: block;
	margin: 1.5em auto;
	font-size: 1.2rem;
	font-weight: bold;
	color: ${({ status }) =>
		status === 'fail' ? 'var(--fail-color)' : 'var(--success-color)'};
`;
