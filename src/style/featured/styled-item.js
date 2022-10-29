import styled from 'styled-components';

export const StyledItem = styled.article`
	.product-body {
		position: relative;

		&:hover .product-icon-actions {
			opacity: 1;
			visibility: visible;
		}
	}

	.product-img {
		width: 100%;
		border-radius: 10px;

		@media (min-width: 768px) {
			height: 22rem;
			object-fit: cover;
		}
	}

	.product-bottom {
		padding-top: 2em;
	}

	.product-title {
		font-size: 1.6rem;
		color: var(--light-gray);
		margin-bottom: 0.5em;
		color: hsl(210, 22%, 49%);
	}

	.product-price {
		font-size: 1.8rem;
		font-weight: bold;
		color: hsl(209, 34%, 30%);
	}

	.product-icon-actions {
		position: absolute;
		display: flex;
		column-gap: 1rem;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.3s linear, visibility 0.3s linear;

		.product-details,
		.add-product {
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
	}
`;
