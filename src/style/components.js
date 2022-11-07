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

export const SectionHero = `

background-color: var(--dirty-white);
	padding: 2rem 0;

	@media (min-width: 768px) {
		padding: 4rem 0;
	}

	h2 {
		font-size: 2.2rem;
		font-family: cursive;
		color: var(--light-blue);

		@media (min-width: 768px) {
			font-size: 3rem;
		}
	}

`;
