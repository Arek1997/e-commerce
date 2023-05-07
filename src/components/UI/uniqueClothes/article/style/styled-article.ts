import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledArticle = styled(motion.article)`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	align-items: center;
	justify-content: center;
	padding: 3em;
	background-color: #c5a491;
	border-radius: 6px;

	span {
		width: 6rem;
		height: 6rem;
		display: grid;
		place-items: center;
		border-radius: 50%;
		color: #453227;
		background-color: #eaded7;

		svg {
			font-size: 3rem;
		}
	}

	h3 {
		font-size: 2rem;

		@media (min-width: 768px) {
			font-size: 2.5rem;
		}
	}

	p {
		text-align: center;
	}
`;
