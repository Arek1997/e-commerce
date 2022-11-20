import styled from 'styled-components';

const ProductFilter = styled.div`
	margin-bottom: 10em;
	accent-color: var(--orange);

	@media (min-width: 768px) {
		position: sticky;
		top: 5rem;
		align-self: start;
	}

	.filter {
		&__form--one {
			margin-bottom: 3em;

			input {
				padding: 0.8em;
				border: none;
				font-size: 1.4rem;
				background-color: var(--dirty-white);
				outline-color: var(--orange);

				@media (min-width: 1400px) {
					font-size: 1.6rem;
				}
			}
		}

		&__categories,
		&__options ul li,
		&__price {
			color: var(--dark-blue);
			opacity: 0.9;
		}

		&__categories {
			font-size: 1.4rem;
			letter-spacing: 1px;
			margin-bottom: 1em;

			@media (min-width: 1400px) {
				font-size: 1.6rem;
			}
		}

		&__options {
			border: none;
			margin-bottom: 2em;

			ul {
				display: flex;
				flex-direction: column;
				row-gap: 1.5rem;

				li {
					display: flex;
					align-items: center;
					column-gap: 1rem;
					padding-left: 1em;
					text-transform: uppercase;
					font-weight: bold;
					letter-spacing: 1px;
					font-size: 1.1rem;

					@media (min-width: 1400px) {
						font-size: 1.3rem;
					}

					input,
					label {
						cursor: pointer;
					}
				}
			}
		}

		&__form--two {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;

			input {
				margin-bottom: 1em;
			}

			.filter__price {
				font-size: 1.4rem;

				@media (min-width: 1400px) {
					font-size: 1.6rem;
				}
			}
		}
	}
`;

export default ProductFilter;
