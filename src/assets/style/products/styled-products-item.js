import styled from 'styled-components';

const StyledProduct = styled.article`
	max-width: 350px;
	justify-self: center;

	.product {
		&__body {
			position: relative;

			&:hover .product__icon-actions {
				opacity: 1;
				visibility: visible;
			}
		}

		&__img {
			width: 100%;
			height: 22rem;
			object-fit: contain;

			@media (min-width: 768px) {
				height: 25rem;
			}
		}

		&__bottom {
			padding-top: 2em;
		}

		&__title {
			font-size: 1.6rem;
			color: var(--light-gray);
			margin-bottom: 0.5em;
			color: hsl(210, 22%, 49%);
		}

		&__price {
			font-size: 1.8rem;
			font-weight: bold;
			color: hsl(209, 34%, 30%);
		}

		/* &__icon-actions {
			max-width: 10rem;
			position: absolute;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: 1rem;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			opacity: 0;
			visibility: hidden;
			transition: opacity 0.3s linear, visibility 0.3s linear;

			.product__details,
			.product__add,
			.product__favourite {
				display: grid;
				width: 40px;
				height: 40px;
				font-size: 1.8rem;
				color: #fff;
				background-color: var(--orange);
				place-items: center;
				border-radius: 50%;
				transition: background-color 0.3s;

				&:hover {
					background-color: var(--orange-hover);
				}
			}

			.product__favourite {
				color: ${(props) => (props.favourite ? 'var(--fail-color)' : '#fff')};
			}
		} */
	}
`;

export default StyledProduct;
