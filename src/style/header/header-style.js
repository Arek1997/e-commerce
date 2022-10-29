import styled from 'styled-components';
import bgImage from '../../img/home/background.jpeg';

const StyledHeader = styled.header`
	position: relative;
	height: 100vh;
	background-image: url(${bgImage});
	background-size: cover;
	background-position: center;
	z-index: 5;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: rgb(0 0 0 /0.5);
		z-index: -1;
	}
`;

export const StyledHeading = styled.div`
	position: absolute;
	top: 50%;
	left: 0;
	padding: 0 2em;
	transform: translate(0, -50%);
	color: #fff;

	h1 {
		font-family: cursive;
		font-size: 4.5rem;
	}

	p {
		font-size: 2.5rem;
		margin: 1em 0;
	}

	button {
		padding: 0.7em 1em;
		font-size: 1.4rem;
		text-transform: uppercase;
		background-color: transparent;
		color: #fff;
		border: 1px solid #fff;
		border-radius: 5px;
		transition: color 0.3s linear, background-color 0.3s linear;

		&:hover {
			background-color: #fff;
			color: var(--orange);
		}
	}
`;

export const CartMenu = styled.aside`
	position: absolute;
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
	z-index: 10;

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

export default StyledHeader;
