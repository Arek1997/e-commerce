import styled from 'styled-components';

const CartMenu = styled.aside`
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: auto 1fr auto;
	text-align: center;
	padding: 5em 2.5em 0;
	background-color: var(--dirty-white);
	transform: translateX(100%);
	opacity: 0;
	visibility: hidden;
	transition: transform 0.3s, opacity 0.3s, visibility 0.3s;
	z-index: 30;

	&.open {
		transform: translateX(0) !important;
		opacity: 1 !important;
		visibility: visible !important;
	}

	.closeCart {
		position: absolute;
		top: 2rem;
		left: 2rem;
		font-size: 3rem;
		font-weight: bold;
		color: var(--light-gray);
		cursor: pointer;
	}

	.cart-items {
		overflow-y: auto;
	}

	h3,
	p {
		font-family: cursive;
		font-size: 2rem;
		font-weight: 400;
		color: var(--light-gray);
	}

	@media (max-width: 768px) and (orientation: landscape) {
		h3 {
			padding-bottom: 0.5em;
		}

		p {
			padding-top: 0.5em;
		}
	}

	.checkout {
		display: block;
		width: 100%;
		margin: 2em 0;
		color: #fff;
		font-size: 1.6rem;
		padding: 0.5em 1em;
		background-color: var(--orange);
		border-radius: 6px;
		transition: background-color 0.3s;

		&:hover {
			background-color: var(--orange-hover);
		}
	}

	@media (min-width: 768px) {
		max-width: 500px;
	}
`;

export default CartMenu;
