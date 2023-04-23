import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Loading from '../../../Loading/Loading';
import { logIn } from '../../../../store/auth-slice';

import { StyledAuthForm } from '../../../../assets/style/profile/authForm/styled-authForm';

const AuthForm = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();

	const onSubmitHandler = async (data) => {
		setIsLoading(true);
		const dataToSend = data;
		let url;

		if (props.logIn) {
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

			if (!props.logIn) {
				props.setResponseMessage({
					status: 'success',
					message: 'Account successfully created!',
				});
			} else {
				props.setResponseMessage({
					status: 'success',
					message: 'Loged In successfully!',
				});

				dispatch(logIn(data.idToken));
			}
		} catch (err) {
			props.setResponseMessage({
				status: 'fail',
				message: err.message,
			});
		}
		setIsLoading(false);
	};

	return (
		<StyledAuthForm onSubmit={props.handleSubmit(onSubmitHandler)}>
			<label htmlFor='email'></label>
			<input
				type='email'
				id='email'
				placeholder='E-mail'
				{...props.register('email', {
					required: 'Email is required',
					pattern: {
						message: 'Email is not correct',
						value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
					},
				})}
				data-testid='email-imput'
			/>
			<span className='login-error'>{props.errors.email?.message}</span>

			<label htmlFor='password'></label>
			<input
				type='password'
				id='password'
				placeholder='Password'
				{...props.register('password', {
					required: 'Password is required',
					pattern: {
						message:
							'Password have to contains at least 8 sign, at least one uppercase letter, at least one downcase letter, at least one number and at least one special sign.',
						value:
							/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/gm,
					},
				})}
				data-testid='password-input'
			/>
			<span className='password-error'>{props.errors.password?.message}</span>
			{isLoading ? (
				<Loading styles={{ width: '100px' }} />
			) : (
				<button data-testid='submit-button'>
					{props.logIn ? 'Log in' : 'Register'}
				</button>
			)}
		</StyledAuthForm>
	);
};

export default AuthForm;
