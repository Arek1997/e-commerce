import styled from 'styled-components';
import { Close } from '../components';

export const StyledProfileModal = styled.div`
	position: fixed;
	top: 30%;
	left: 50%;
	width: 100%;
	max-width: 40rem;
	transform: translateX(-50%);
	padding: 2em;
	color: ${(props) => (props.notHomePage ? '#fff' : '#000')};
	background-color: ${(props) =>
		props.notHomePage ? 'rgb(0 0 0 / 70%)' : 'rgb(255 255 255 / 70%)'};
	backdrop-filter: blur(5px);
	border-radius: 8px;
	z-index: 2;

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

	.response-message {
		display: inline-block;
		font-size: 1.1rem;
		margin-bottom: 1em;
	}

	p {
		font-size: 1.6rem;
		margin-bottom: 0.8em;
	}

	form {
		display: flex;
		flex-direction: column;

		input,
		button {
			margin-bottom: 1em;
			padding: 0.7em;
			font-size: 1.5rem;
			border: 2px solid transparent;
			border-radius: 8px;
			outline: none;
			&:focus {
				border: 2px solid var(--orange);
			}
		}

		button {
			color: #fff;
			background-color: var(--orange);
			transition: background-color 0.3s;

			&:hover {
				background-color: var(--orange-hover);
			}
		}

		.login-error,
		.password-error {
			margin-bottom: 1em;
			font-size: 1.4rem;
			color: #af2525;
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

export const StyledForm = styled.form``;
