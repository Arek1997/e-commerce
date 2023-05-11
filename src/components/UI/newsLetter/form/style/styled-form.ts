import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
	form {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 1rem;
		margin: 2em 0;

		@media (min-width: 992px) {
			flex-wrap: nowrap;
		}

		label {
			display: none;
		}

		input,
		button {
			padding: 0.5em 1em;
			font-size: 1.6rem;
			border-radius: 6px;
		}

		input {
			border: 1px solid black;

			@media (min-width: 992px) {
				width: 100%;
			}
		}

		button {
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

	.error-message {
		font-weight: bold;
		font-size: 1.6rem;
		color: var(--dark-blue);

		&:empty {
			display: none;
		}
	}
`;
