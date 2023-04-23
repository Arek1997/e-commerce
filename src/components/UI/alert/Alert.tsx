import { motion, AnimatePresence } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';

import { closeAlert } from '../../../store/alert-slice';

import StyledAlert from './style/styled-alert';
import Overlay from '../overlay/Overlay';

const Alert = () => {
	const dispatch = useAppDispatch();
	const { isOpen, status, title, message } = useAppSelector(
		(state) => state.alert
	);

	const closeAlertHandler = () => dispatch(closeAlert());

	return (
		<AnimatePresence>
			{isOpen && (
				<Overlay onClose={closeAlertHandler}>
					<motion.div
						initial={{ opacity: 0, y: 30, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 30, scale: 0.9 }}
					>
						<StyledAlert className='alert' alertStatus={status}>
							<i
								className='fa-solid fa-xmark alert__close'
								onClick={closeAlertHandler}
							></i>
							<div className='alert__head'>
								<h4 className='alert__title'>{title}</h4>
							</div>
							<div className='alert__body'>
								<p className='alert__text'>{message}</p>
								<button className='alert__button' onClick={closeAlertHandler}>
									Close
								</button>
							</div>
						</StyledAlert>
					</motion.div>
				</Overlay>
			)}
		</AnimatePresence>
	);
};

export default Alert;
