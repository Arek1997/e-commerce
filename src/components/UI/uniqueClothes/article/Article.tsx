import { motion } from 'framer-motion';
import { StyledArticle } from './style/styled-article';
import { initial, transition, whileInView } from '../UniqueClothes';

interface Props {
	icon: string;
	heading: string;
	paragraph: string;
	delay?: number;
}

const Article = ({ icon, heading, paragraph, delay }: Props) => {
	return (
		<StyledArticle
			as={motion.article}
			initial={initial}
			whileInView={whileInView}
			transition={{ ...transition, delay }}
			viewport={{ once: true }}
		>
			<span>
				<svg
					stroke='currentColor'
					fill='currentColor'
					strokeWidth='0'
					viewBox='0 0 512 512'
					height='1em'
					width='1em'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d={icon}></path>
				</svg>
			</span>

			<h3>{heading}</h3>
			<p>{paragraph}</p>
		</StyledArticle>
	);
};

export default Article;
