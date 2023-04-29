import styled from 'styled-components';
import { isHomePageProp as Props } from '../../../../interface';

import {
	ModalBase,
	InputAndButton,
	Close,
	Heading,
} from '../../../../assets/style/components';

export const StyledOrder = styled.section<Props>`
	${ModalBase}

	max-width: 45rem;
	padding: 2em;
	color: ${({ isHomePage }) => (isHomePage ? '#000' : '#fff')};
	background-color: ${({ isHomePage }) =>
		isHomePage ? 'rgb(255 255 255 / 70%)' : 'rgb(0 0 0 / 70%)'};

	.close {
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

		&::before {
			width: 13ch;
		}
	}
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;

	${InputAndButton}

	input {
		width: 100%;
	}

	input,
	.order-button {
		margin-bottom: 0;
	}

	.error-message {
		font-size: 1.4rem;
		color: var(--fail-color);
	}

	.order-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		column-gap: 2rem;
	}

	.order-button {
		flex-grow: 1;
	}

	.order-price {
		font-size: 1.4rem;
		font-weight: bold;
		font-family: var(--cursive);
		letter-spacing: 1px;

		@media (min-width: 320px) {
			font-size: 1.6rem;
		}
	}
`;
