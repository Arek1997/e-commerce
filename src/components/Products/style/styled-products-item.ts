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
			color: var(--light-blue);
			margin-bottom: 0.5em;
		}

		&__price {
			font-size: 1.8rem;
			font-weight: bold;
			color: var(--medium-blue);
		}
	}
`;

export default StyledProduct;
