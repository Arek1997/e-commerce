import { useDispatch, useSelector } from 'react-redux';

import { alertActions } from '../../../store/alert-slice';
import { navigationActions } from '../../../store/navigation-slice';

import StyledAlert from '../../../assets/style/alert/styled-alert';

const Alert = () => {
	const dispatch = useDispatch();
	const { status, title, message } = useSelector((state) => state.alert);

	const closeAlertHandler = () => {
		dispatch(alertActions.showAlert());
		dispatch(navigationActions.toggleOverlay());
	};

	return (
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
	);
};

export default Alert;
