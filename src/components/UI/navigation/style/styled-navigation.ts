import styled from 'styled-components';
import { Close, HoverEffect } from '../../../../assets/style/components';

import { isHomePageProp as Props } from '../../../../interface';

export const Nav = styled.nav`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #fff;

	.closeNav {
		${Close}
		top: 2rem;
		right: 2rem;

		@media (min-width: 768px) {
			display: none;
		}
	}

	.icons {
		position: relative;
		display: flex;
		column-gap: 2rem;

		@media (min-width: 400px) {
			column-gap: 5rem;
		}
	}
`;

export const UlList = styled.div<Props>`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	padding: 2em 4em;
	color: #000;
	background-color: var(--dirty-white);
	border-radius: var(--radius);
	transform: translateY(50%);
	opacity: 0;
	visibility: hidden;
	transition: transform 0.3s, opacity 0.3s, visibility 0.3s;
	z-index: 2;

	&.open {
		transform: translateY(0) !important;
		opacity: 1 !important;
		visibility: visible !important;
	}

	@media (min-width: 768px) {
		position: static;
		width: auto;
		padding: 0;
		background-color: transparent;
		transform: translateY(0);
		opacity: 1;
		visibility: visible;
		z-index: 1;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		row-gap: 2em;

		@media (min-width: 768px) {
			flex-direction: row;
			row-gap: 0;
			column-gap: 3rem;
		}

		@media (min-width: 992px) {
			column-gap: 6rem;
		}

		li a {
			display: flex;
			column-gap: 2rem;
			font-size: 1.8rem;
			color: var(--light-gray);

			@media (min-width: 768px) {
				font-size: 2.2rem;
				color: ${({ isHomePage }) =>
					isHomePage ? '#fff' : 'var(--dark-gray)'};
				transition: color 0.3s;

				&:hover {
					color: var(--orange);
				}
			}
		}

		i {
			width: 22px;
			@media (min-width: 768px) {
				display: none;
			}
		}
	}

	i.closeMobNav {
		position: absolute;
		top: 1rem;
		right: 2rem;
		font-size: 3rem;
		color: var(--light-gray);
		cursor: pointer;

		@media (min-width: 768px) {
			display: none;
		}
	}
`;

export const BurgerBtn = styled.button`
	padding: 0.2em 0.8em;
	font-size: 2rem;
	border-radius: 20px;
	color: #fff;
	background-color: var(--orange);
	cursor: pointer;
	transition: background-color 0.3s;
	z-index: 1;

	&:hover {
		background-color: var(--orange-hover);
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

export const Logo = styled.h1<Props>`
	font-size: 3rem;
	font-family: var(--cursive);
	color: ${({ isHomePage }) => (isHomePage ? '#fff' : 'var(--dark-gray)')};
	z-index: 1;

	@media (min-width: 768px) {
		font-size: 4rem;
	}

	@media (min-width: 992px) {
		position: absolute;
		left: 50%;

		transform: translateX(-50%);
	}
`;

export const Cart = styled.button<Props>`
	position: relative;
	background-color: transparent;
	cursor: pointer;
	z-index: 1;

	i {
		position: relative;
		color: ${({ isHomePage }) => (isHomePage ? '#fff' : 'var(--dark-gray)')};
		font-size: 2.5rem;
		transition: color 0.3s;

		span {
			position: absolute;
			display: grid;
			top: -15px;
			left: 15px;
			width: 3rem;
			height: 3rem;
			color: #fff;
			background-color: var(--orange);
			font-size: 1.2rem;
			place-items: center;
			border-radius: 50%;
		}
	}
`;

export const ProfileBtn = Cart;

export const IconsDiv = styled.div<Props>`
	.icons {
		position: relative;
		display: flex;
		column-gap: 2rem;

		@media (min-width: 400px) {
			column-gap: 5rem;
		}
	}

	.profile-btn:hover i {
		color: var(--orange);
	}

	nav {
		position: absolute;
		top: 100%;
		right: 0;
		min-width: 200px;
		padding: 2em;
		color: ${({ isHomePage }) => (isHomePage ? '#000' : '#fff')};
		background-color: ${({ isHomePage }) =>
			isHomePage ? 'rgb(255 255 255 / 70%) ' : 'rgb(0 0 0 / 70%)'};
		backdrop-filter: blur(5px);
		border-radius: var(--radius);
		z-index: 1;
		margin-top: 3em;

		ul {
			display: flex;
			row-gap: 2rem;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;

			li {
				position: relative;
				font-size: 1.6rem;
				cursor: pointer;

				${HoverEffect}
			}
		}
	}
`;
