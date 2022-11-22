import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { useLocation } from 'react-router-dom';
import { navigationActions } from '../../../store/navigation-slice';

import { StyledProfileModal } from '../../../assets/style/profile/styled-profile-modal';

const ProfileModal = () => {
	const dispatch = useDispatch();
	const [logIn, setLogIn] = useState(true);
	const { pathname } = useLocation();
	const notHomePage = pathname.slice(1) !== 'home';

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

	const onSubmitHandler = (data) => console.log(data);

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({ email: '', password: '' });
		}
	}, [isSubmitSuccessful, reset]);

	return (
		<StyledProfileModal notHomePage={notHomePage}>
			<i
				className='fa-solid fa-xmark closeModal'
				onClick={toggleProfileModalHandler}
			></i>
			<h2 className='text-center'>Welcome in AlleDrogo!</h2>
			<span className='response-message'></span>
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
				<button>{logIn ? 'Log in' : 'Register'}</button>
			</form>
			<p className='paragraph-bottom'>
				{logIn ? "Haven't profile yet?" : 'Have a profile?'}
				<button onClick={() => setLogIn(!logIn)}>
					{!logIn ? 'Log in' : 'Sign up'}
				</button>
			</p>
		</StyledProfileModal>
	);
};

export default ProfileModal;
