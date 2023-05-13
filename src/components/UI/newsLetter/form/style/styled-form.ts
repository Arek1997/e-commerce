import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
	form {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 1rem;
		margin: 2em 0;

		:has(.newsletter-error-messsage:not(:empty)) {
			align-items: flex-start;
		}

		@media (min-width: 992px) {
			margin-top: 0;
			flex-wrap: nowrap;
		}

		.input-wrapper {
			@media (min-width: 992px) {
				width: 100%;
			}

			.newsletter-error-messsage {
				margin-top: 1em;

				:empty {
					display: none;
				}
			}
		}

		label {
			display: none;
		}

		input,
		button {
			padding: 0.5em 1em;
			font-size: 1.6rem;
			border-radius: var(--radius);
		}

		input {
			border: 1px solid black;

			@media (min-width: 992px) {
				width: 100%;
			}
		}

		button {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 11rem;
			height: 3.4rem;
			background-color: #ab7a5f;
			transition: transform 0.3s ease, color 0.5s;

			&:hover {
				transform: scale(1.05);
				color: var(--dirty-white);
			}
			&:active {
				transform: scale(0.95);
			}
		}
	}
`;
