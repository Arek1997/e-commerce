import { motion } from 'framer-motion';
import { animateOptions } from './animateOptions';

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
			style={{ width: '100%' }}
			data-name='animate-wrapper'
		>
			{children}
		</motion.div>
	);
};

export default Animate;
