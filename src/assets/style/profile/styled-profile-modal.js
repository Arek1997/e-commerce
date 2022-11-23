import styled from 'styled-components';
import { Close, ModalBase, InputAndButton } from '../components';

export const StyledProfileModal = styled.div`
	${ModalBase}

	max-width: 40rem;
	padding: 2em;
	color: ${(props) => (props.notHomePage ? '#fff' : '#000')};
	background-color: ${(props) =>
		props.notHomePage ? 'rgb(0 0 0 / 70%)' : 'rgb(255 255 255 / 70%)'};

	.closeModal {
		${Close}
		font-size: 2rem;
		top: 2rem;
		right: 1rem;

		@media (min-width: 300px) {
			font-size: 3rem;
		}

		@media (min-width: 350px) {
			right: 2rem;
		}
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 0.5em;
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

export const StyledResponseMessage = styled.span`
	display: block;
	margin: 1.5em auto;
	font-size: 1.2rem;
	font-weight: bold;
	color: ${(props) =>
		props.status === 'fail' ? 'var(--fail-color)' : 'var(--success-color)'};
`;
