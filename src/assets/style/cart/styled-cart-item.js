import styled from 'styled-components';

const StyledCartProduct = styled.article`
	display: grid;
	grid-template-columns: auto 1fr auto;
	gap: 1rem;
	align-items: center;
	margin: 4em 0;

	@media (min-width: 320px) {
		gap: 2rem;
	}

	@media (min-width: 360px) {
		gap: 3rem;
	}

	.product {
		&__img {
			height: 80px;
		}

		&__center {
			text-align: left;
			color: var(--dark-blue);
			opacity: 0.9;
		}

		&__title {
			margin-bottom: 0.5em;
			font-size: 1.4rem;
			letter-spacing: 1px;

			@media (min-width: 1400px) {
				font-size: 1.8rem;
			}
		}

		&__price {
			margin-bottom: 0.7em;
			display: block;
			font-size: 1.3rem;
			font-weight: 600;

			@media (min-width: 1400px) {
				font-size: 1.6rem;
			}
		}

		&__remove {
			letter-spacing: 0.5px;
			color: var(--light-blue);
			opacity: 1;

			&:hover {
				color: var(--dark-blue);
			}

			@media (min-width: 1400px) {
				font-size: 1.4rem;
			}
		}

		&__total-price {
			margin-left: 0.5em;
			font-size: 1.3rem;
			font-family: cursive;
			font-weight: 600;

			@media (min-width: 320px) {
				margin-left: 1em;
			}

			@media (min-width: 360px) {
				margin-left: 2em;
			}

			@media (min-width: 1400px) {
				font-size: 1.6rem;
			}
		}

		&__right {
			display: flex;
			flex-direction: column;
			align-self: stretch;
			justify-content: space-around;
		}

		&__increase,
		&__decrease {
			color: var(--orange);
		}

		&__amount {
			font-size: 1.6rem;
			font-weight: bold;

			@media (min-width: 1400px) {
				font-size: 2rem;
			}
		}
	}
`;

export default StyledCartProduct;
