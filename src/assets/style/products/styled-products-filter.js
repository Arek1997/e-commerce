import styled from 'styled-components';

const ProductFilter = styled.div`
	margin-bottom: 10em;

	@media (min-width: 768px) {
		position: sticky;
		top: 5rem;
		align-self: start;
	}

	input {
		accent-color: var(--orange);
	}

	.products__form--one {
		margin-bottom: 3em;

		input {
			padding: 0.8em;
			border: none;
			font-size: 1.4rem;
			background-color: var(--dirty-white);
			outline-color: var(--orange);
		}
	}

	.products__categories,
	.products__options ul li,
	.filtered__price {
		color: var(--dark-blue);
		opacity: 0.9;
	}

	.products__categories {
		font-size: 1.4rem;
		letter-spacing: 1px;
		margin-bottom: 1em;
	}

	.products__options {
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

				input,
				label {
					cursor: pointer;
				}
			}
		}
	}

	.products__form--two {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;

		input {
			margin-bottom: 1em;
		}

		.filtered__price {
			font-size: 1.4rem;
		}
	}
`;

export default ProductFilter;
