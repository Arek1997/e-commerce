import styled from 'styled-components';

interface Props {
	favourite: boolean;
}

const StyledProduct = styled.article<Props>`
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
	}
`;

export default StyledProduct;
