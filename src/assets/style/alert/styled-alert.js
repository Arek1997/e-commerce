import styled from 'styled-components';

import { Close, HoverEffect } from '../components';

const StyledAlert = styled.div`
	max-width: 35rem;
	position: fixed;
	top: 20%;
	left: 50%;
	transform: translateX(-50%);
	backdrop-filter: blur(5px);
	border-radius: 8px;
	overflow: hidden;
	z-index: 2;

	.alert {
		&__close {
			${Close}
			top: 1rem;
			right: 2rem;

			@media (min-width: 768px) {
				top: 2rem;
			}
		}

		&__head {
			padding: 1em;
			background-color: var(--warning);
			font-size: 1.6rem;

			@media (min-width: 768px) {
				font-size: 2rem;
			}
		}

		&__body {
			padding: 1em;
			font-size: 1.4rem;
			background-color: var(--dirty-white);
			opacity: 0.8;

			@media (min-width: 768px) {
				font-size: 1.8rem;
			}
		}

		&__button {
			position: relative;
			display: block;
			margin: 1em 0 0 auto;
			font-size: 1.4rem;
			font-weight: bold;
			text-transform: uppercase;

			${HoverEffect}
		}
	}
`;

export default StyledAlert;
