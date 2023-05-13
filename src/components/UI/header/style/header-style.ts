import { Link } from 'react-router-dom';

import styled from 'styled-components';
import bgImage from '../../../../assets/img/home/background.jpeg';

const StyledHeader = styled.header`
	position: relative;
	height: 100vh;
	margin-top: -11rem;
	background-image: url(${bgImage});
	background-size: cover;
	background-position: center;
	overflow: hidden;

	@media (min-width: 768px) {
		margin-top: -12rem;
	}

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: rgb(0 0 0 /0.5);
	}
`;

export const StyledHeading = styled.div`
	position: absolute;
	top: 60%;
	left: 0;
	padding: 0 2em;
	transform: translate(0, -50%);
	color: #fff;

	@media (min-width: 992px) {
		top: 50%;
		left: 6%;
	}

	p:first-child {
		font-family: var(--cursive);
		font-size: 4.5rem;

		@media (min-width: 768px) {
			font-size: 6rem;
		}

		@media (min-width: 992px) {
			font-size: 8rem;
		}
	}

	p {
		font-size: 2.5rem;
		margin: 1em 0;

		@media (min-width: 768px) {
			font-size: 4rem;
			margin: 0.5em 0;
		}

		@media (min-width: 992px) {
			font-size: 4.5rem;
			margin: 0.3em 0;
		}
	}
`;

export const StyledLink = styled(Link)`
	display: inline-block;
	padding: 0.7em 1em;
	font-size: 1.4rem;
	text-transform: uppercase;
	background-color: transparent;
	color: #fff;
	border: 1px solid #fff;
	border-radius: var(--radius);
	transition: color 0.3s linear, background-color 0.3s linear;

	@media (min-width: 768px) {
		font-size: 1.8rem;
	}

	&:hover {
		background-color: #fff;
		color: var(--orange);
	}
`;

export default StyledHeader;
