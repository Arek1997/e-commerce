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
`;

export const SectionHero = `

background-color: var(--dirty-white);
	padding: 4rem 1.5rem;

	@media (min-width: 768px) {
		padding: 6rem 1.5rem;
	}

	h2 {
		font-size: 2.2rem;
		font-family: cursive;
		color: var(--light-blue);

		@media (min-width: 576px) {
			padding: 0 1.5rem;
		}

		@media (min-width: 768px) {
			font-size: 3rem;
		}
	}

`;
