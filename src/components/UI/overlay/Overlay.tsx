import { useEffect, useRef } from 'react';
import StyledOverlay from './style/styled-overlay';

interface Props {
	children: React.ReactNode;
	onClose: () => void;
}

const Overlay = ({ children, onClose }: Props) => {
	const overlayRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.body.classList.add('scroll-disabled');

		return () => document.body.classList.remove('scroll-disabled');
	}, []);

	return (
		<StyledOverlay
			ref={overlayRef}
			data-testid='overlay'
			onClick={(e) => {
				if (
					e.target === overlayRef.current ||
					(e.target as HTMLDivElement).dataset.name === 'animate-wrapper'
				)
					onClose();
			}}
		>
			{children}
		</StyledOverlay>
	);
};

export default Overlay;
