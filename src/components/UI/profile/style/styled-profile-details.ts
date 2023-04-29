import styled from 'styled-components';
import {
	ModalBase,
	InputAndButton,
	Close,
	Heading,
} from '../../../../assets/style/components';

import { isHomePageProp as Props } from '../../../../interface';

export const StyledDetails = styled.div<Props & { disabled: boolean }>`
	max-width: 45rem;
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

			color: ${({ disabled }) =>
				!disabled ? 'var(--success-color)' : 'var(--fail-color)'};
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
