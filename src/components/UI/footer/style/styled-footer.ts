import styled from 'styled-components';

const StyledFooter = styled.footer`
	background-color: #ddd;

	.footer {
		&__container {
			display: flex;
			flex-direction: column-reverse;
			row-gap: 2rem;

			@media (min-width: 768px) {
				flex-direction: row;
				justify-content: space-around;
				row-gap: 0;
			}
		}

		&__paragraph {
			font-size: 1.4rem;
		}

		&__link {
			transition: color 0.3s;
			font-weight: bold;

			&:hover {
				color: var(--orange);
			}
		}
	}
`;

export default StyledFooter;
