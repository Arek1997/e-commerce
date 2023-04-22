import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { navigationActions } from '../../../store/navigation-slice';

import {
	StyledProfileAuthModal,
	StyledResponseMessage,
} from '../../../assets/style/profile/styled-profile-auth-modal';
import AuthForm from './authForm/AuthForm';

const ProfileAuthModal = () => {
	const dispatch = useDispatch();
	const [responseMessage, setResponseMessage] = useState({
		status: null,
		message: '',
	});
	const [logIn, setLogIn] = useState(true);

	const { pathname } = useLocation();
	const notHomePage = pathname.slice(1) !== 'home';

	const { isLoggedIn } = useSelector((state) => state.authentication);

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const toggleProfileModalHandler = () => {
		dispatch(navigationActions.toggleProfileAuthModal());
		dispatch(navigationActions.toggleOverlay());
	};

	const toggleIsLoginHandler = () => {
		setLogIn(!logIn);
		setResponseMessage({
			status: null,
			message: '',
		});
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({ email: '', password: '' });
		}
	}, [isSubmitSuccessful, reset]);

	useEffect(() => {
		if (logIn && isLoggedIn) {
			const timeout = setTimeout(() => {
				dispatch(navigationActions.toggleProfileAuthModal());
				dispatch(navigationActions.toggleOverlay());
			}, 1500);

			return () => clearTimeout(timeout);
		}
	}, [logIn, isLoggedIn]);

	return (
		<StyledProfileAuthModal
			notHomePage={notHomePage}
			data-testid='profile-modal'
		>
			<i
				className='fa-solid fa-xmark closeModal'
				onClick={toggleProfileModalHandler}
				data-testid='close-profile-modal'
			></i>
			<h2 className='text-center'>Welcome in AlleDrogo!</h2>
			<StyledResponseMessage
				status={responseMessage.status}
				className='response-message text-center'
				data-testid='profile-response-message'
			>
				{responseMessage.message}
			</StyledResponseMessage>
			<p className='text-center text-bold'>{logIn ? 'Log in' : 'Sign up'}</p>

			<AuthForm
				handleSubmit={handleSubmit}
				register={register}
				errors={errors}
				logIn={logIn}
				setResponseMessage={setResponseMessage}
			/>
			<p className='paragraph-bottom'>
				{logIn ? "Haven't profile yet?" : 'Have a profile?'}
				<button onClick={toggleIsLoginHandler}>
					{!logIn ? 'Log in' : 'Sign up'}
				</button>
			</p>
		</StyledProfileAuthModal>
	);
};

export default ProfileAuthModal;
