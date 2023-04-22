import styled from 'styled-components';
import { ModalBase, InputAndButton, Close, Heading } from '../components';

export const StyledDetails = styled.div`
	${ModalBase}

	max-width: 45rem;
	padding: 2em;
	color: ${(props) => (props.notHomePage ? '#fff' : '#000')};
	background-color: ${(props) =>
		props.notHomePage ? 'rgb(0 0 0 / 70%)' : 'rgb(255 255 255 / 70%)'};

	.closeModal {
		${Close}
		font-size: 2rem;
		top: 2rem;
		right: 1rem;

		color: ${(props) =>
			props.notHomePage ? 'var(--dirty-white)' : 'var(--light-gray)'};

		@media (min-width: 300px) {
			font-size: 3rem;
		}

		@media (min-width: 350px) {
			right: 2rem;
		}
	}

	h3 {
		${Heading}
	}

	.particularInfo {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		column-gap: 1rem;
		margin-bottom: 1em;

		&--password {
			margin-top: 3em;

			h4 {
				align-self: flex-start;
			}
		}

		h4 {
			font-size: 1.6rem;
		}

		span {
			font-size: 1.4rem;
		}

		span.disabled {
			font-weight: bold;

			color: ${(props) =>
				!props.disabled ? 'var(--success-color)' : 'var(--fail-color)'};
		}
	}
`;

export const StyledForm = styled.form`
	display: flex;
	flex-wrap: wrap;

	${InputAndButton}

	input,button {
		width: 100%;
	}

	input {
		margin-bottom: 0;
	}

	.password-error {
		flex-grow: 1;
		order: 1;
		color: var(--fail-color);
	}
`;
