import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { navigationActions } from '../../../store/navigation-slice';
import { authenticationActions } from '../../../store/auth-slice';

import {
	StyledProfileModal,
	StyledResponseMessage,
} from '../../../assets/style/profile/styled-profile-modal';
import loadingSpinner from '../../../assets/loadingspinner.gif';

const ProfileModal = () => {
	const dispatch = useDispatch();
	const [responseMessage, setResponseMessage] = useState({
		status: null,
		message: '',
	});
	const [isLoading, setIsLoading] = useState(false);
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
		dispatch(navigationActions.toggleProfileModal());
		dispatch(navigationActions.toggleOverlay());
	};

	const toggleIsLoginHandler = () => {
		setLogIn(!logIn);
		setResponseMessage({
			status: null,
			message: '',
		});
	};

	const onSubmitHandler = async (data) => {
		setIsLoading(true);
		const dataToSend = data;
		let url;

		if (logIn) {
			url =
				'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCtGvqymH11_3PzBQ1fJ9Ci5-F5w1HUSqA';
		} else {
			url =
				'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCtGvqymH11_3PzBQ1fJ9Ci5-F5w1HUSqA';
		}

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: dataToSend.email,
					password: dataToSend.password,
					returnSecureToken: true,
				}),
			});

			if (!response.ok) {
				const errorResponse = await response.json();
				const errorMessage = errorResponse.error.message;
				throw new Error(errorMessage);
			}

			const data = await response.json();

			if (!logIn) {
				setResponseMessage({
					status: 'success',
					message: 'Account successfully created!',
				});
			} else {
				setResponseMessage({
					status: 'success',
					message: 'Loged In successfully!',
				});

				dispatch(authenticationActions.logIn(data.idToken));
			}

			console.log(data);
		} catch (err) {
			setResponseMessage({
				status: 'fail',
				message: err.message,
			});
		}
		setIsLoading(false);
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({ email: '', password: '' });
		}
	}, [isSubmitSuccessful, reset]);

	useEffect(() => {
		if (logIn && isLoggedIn) {
			const timeout = setTimeout(() => {
				dispatch(navigationActions.toggleProfileModal());
				dispatch(navigationActions.toggleOverlay());
			}, 1500);

			return () => clearTimeout(timeout);
		}
	}, [logIn, isLoggedIn]);

	return (
		<StyledProfileModal notHomePage={notHomePage}>
			<i
				className='fa-solid fa-xmark closeModal'
				onClick={toggleProfileModalHandler}
			></i>
			<h2 className='text-center'>Welcome in AlleDrogo!</h2>
			<StyledResponseMessage
				status={responseMessage.status}
				className='response-message text-center'
			>
				{responseMessage.message}
			</StyledResponseMessage>
			<p className='text-center text-bold'>{logIn ? 'Log in' : 'Sign up'}</p>
			<form onSubmit={handleSubmit(onSubmitHandler)}>
				<label htmlFor='email'></label>
				<input
					type='email'
					id='email'
					placeholder='E-mail'
					{...register('email', {
						required: 'Email is required',
						pattern: {
							message: 'Email is not correct',
							value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
						},
					})}
				/>
				<span className='login-error'>{errors.email?.message}</span>

				<label htmlFor='password'></label>
				<input
					type='password'
					id='password'
					placeholder='Password'
					{...register('password', {
						required: 'Password is required',
						pattern: {
							message:
								'Password have to contains at least 8 sign, at least one uppercase letter, at least one downcase letter, at least one number and at least one special sign.',
							value:
								/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/gm,
						},
					})}
				/>
				<span className='password-error'>{errors.password?.message}</span>
				{isLoading ? (
					<img
						style={{ display: 'block', width: '100px', margin: '0 auto' }}
						src={loadingSpinner}
						alt='Loadingspinner'
					/>
				) : (
					<button>{logIn ? 'Log in' : 'Register'}</button>
				)}
			</form>
			<p className='paragraph-bottom'>
				{logIn ? "Haven't profile yet?" : 'Have a profile?'}
				<button onClick={toggleIsLoginHandler}>
					{!logIn ? 'Log in' : 'Sign up'}
				</button>
			</p>
		</StyledProfileModal>
	);
};

export default ProfileModal;
