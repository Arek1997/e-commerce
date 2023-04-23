import styled from 'styled-components';
import { AlertStatus } from '../../../../interface/index';
import { Close, HoverEffect } from '../../../../assets/style/components';

interface Props {
	alertStatus: AlertStatus;
}

const StyledAlert = styled.div<Props>`
	min-width: 25rem;
	max-width: 35rem;
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
			background-color: ${({ alertStatus }) => {
				if (alertStatus === 'success') return 'var(--success-color)';
				if (alertStatus === 'warning') return 'var(--warning)';
				if (alertStatus === 'fail') return 'var(--fail-color)';
			}};
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
