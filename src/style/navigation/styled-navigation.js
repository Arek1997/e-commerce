import styled from 'styled-components';

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 3em 1.5em;
	color: #fff;
`;

export const BurgerBtn = styled.button`
	padding: 0.3em 1em;
	font-size: 2.2rem;
	border-radius: 1.5rem;
	color: #fff;
	background-color: var(--orange);
	cursor: pointer;
`;

export const Logo = styled.h1`
	font-size: 3rem;
`;

export const Cart = styled.button`
	position: relative;
	background-color: transparent;
	cursor: pointer;

	i {
		position: relative;
		color: #fff;
		font-size: 3rem;

		span {
			position: absolute;
			display: grid;
			top: -15px;
			left: 15px;
			width: 3rem;
			height: 3rem;
			background-color: var(--orange);
			font-size: 1.2rem;
			place-items: center;
			border-radius: 50%;
		}
	}
`;
