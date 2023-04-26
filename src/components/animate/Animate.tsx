import { motion } from 'framer-motion';
import { animateOptions } from './animate-options';

interface Props {
	animateVariants: keyof typeof animateOptions;
	children: React.ReactNode;
}

const Animate = ({ animateVariants, children }: Props) => {
	return (
		<motion.div
			variants={animateOptions[animateVariants]}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			{children}
		</motion.div>
	);
};

export default Animate;
