import styled from 'styled-components';
import { Close, ModalBase, Heading } from '../components';

const StyledFavProduct = styled.section`
	${ModalBase}

	max-width: 50rem;
	padding: 2em;
	color: #000;
	background-color: #fff;

	.close {
		${Close}
		font-size: 2rem;
		top: 2rem;
		right: 1rem;

		color: #000;

		&:hover {
			color: var(--light-gray);
		}

		@media (min-width: 300px) {
			font-size: 3rem;
		}

		@media (min-width: 350px) {
			right: 2rem;
		}
	}

	.fav-prod-not-found {
		font-size: 1.6rem;
		font-weight: bold;
	}

	.fav-prod-img {
		width: 60px;
		height: 80px;
		object-fit: contain;
	}

	h3 {
		${Heading}
		margin-bottom:2em;

		&::before {
			width: 18ch;
		}
	}

	.fav-prod-list {
		max-height: 40rem;
		display: flex;
		flex-direction: column;
		row-gap: 3rem;
		overflow-y: auto;
	}

	.fav-prod-item {
		position: relative;
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: 2rem;
		align-items: center;
	}

	.fav-prod-description {
		flex-grow: 1;
		opacity: 0.9;
	}

	.fav-prod-name {
		font-size: 1.6rem;
		margin-bottom: 0.5em;
		letter-spacing: 1px;
	}

	.fav-prod-price {
		font-size: 1.4rem;
		font-weight: 600;
	}

	.fav-prod-remove {
		position: absolute;
		bottom: 0;
		right: 2rem;
		font-size: 2rem;

		&:hover {
			opacity: 0.8;
		}
	}
`;

export default StyledFavProduct;
