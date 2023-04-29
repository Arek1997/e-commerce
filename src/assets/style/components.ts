export const Relative = `
    display: inline-block;
		position: relative;
`;

export const Slash = `
&::before {
  content: '/';
  position: absolute;
  left: -25px;
  color: var(--orange);
}
`;

export const Close = `
		position: absolute;
    font-size: 3rem;
    font-weight: bold;
    color: var(--light-gray);
    cursor: pointer;
		z-index: 1;
`;

export const SectionHero = `

background-color: var(--dirty-white);
	padding: 4rem 1.5rem;

	@media (min-width: 768px) {
		padding: 6rem 1.5rem;
	}

	h2 {
		font-size: 2.2rem;
		font-family: var(--cursive);
		color: var(--light-blue);

		@media (min-width: 576px) {
			padding: 0 1.5rem;
		}

		@media (min-width: 768px) {
			font-size: 3rem;
		}
	}

`;

export const ModalBase = `
	margin: auto;
	padding: 2em;
	backdrop-filter: blur(5px);
	border-radius: 8px;
	z-index: 2;

	@media (max-height: 530px) {
		height: 100vh;
		overflow-y: auto;
	}
`;

export const InputAndButton = `

		input,
		button {
			margin-bottom: 1em;
			padding: 0.7em;
			font-size: 1.5rem;
			border: 2px solid transparent;
			border-radius: 8px;
			outline: none;
			&:focus {
				border: 2px solid var(--orange);
			}
		}

		button {
			color: #fff;
			background-color: var(--orange);
			transition: background-color 0.3s;

			&:hover {
				background-color: var(--orange-hover);
			}
		}

`;

export const HoverEffect = `
&:hover::before {
	transform: scaleX(100%);
	transform-origin: left;
}

&::before {
	content: '';
	position: absolute;
	bottom: -3px;
	left: 0;
	width: 100%;
	border-bottom: 3px solid var(--orange);
	transform: scaleX(0);
	transform-origin: right;
	transition: transform 0.3s;
}
`;

export const Heading = `
	position: relative;
	font-size: 2rem;
	margin-bottom: 1em;

	&::before {
		content: '';
		position: absolute;
		bottom: -3px;
		left: 50%;
		transform: translateX(-50%);
		width: 15ch;
		height: 3px;
		background-color: var(--orange);
	}

`;
