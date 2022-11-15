import styled from 'styled-components';

const StyledFooter = styled.footer`
	background-color: #ddd;

	.footer {
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
