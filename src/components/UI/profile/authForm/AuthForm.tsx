import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../../store/auth-slice';

import { StyledAuthForm } from '../style/authForm/styled-authForm';
import { EMAIL_REGEXP, PASSWORD_REGEXP } from '../../../../helpers/values';
import Loading from '../../../loading/Loading';
import { getAuthUrl } from '../../../../helpers/functions';
import {
	FieldErrorsImpl,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form';
import { AuthInputs, ResponseMessageProps } from '../../../../interface';

interface Props {
	authSubmitHandler: UseFormHandleSubmit<AuthInputs>;
	authRegister: UseFormRegister<AuthInputs>;
	authErrors: Partial<FieldErrorsImpl<AuthInputs>>;
	isLogIn: boolean;
	setResponseMessage: React.Dispatch<
		React.SetStateAction<ResponseMessageProps>
	>;
}

const AuthForm = ({
	authSubmitHandler,
	authRegister,
	authErrors,
	isLogIn,
	setResponseMessage,
}: Props) => {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();

	const onSubmitHandler: SubmitHandler<AuthInputs> = async (data) => {
		setIsLoading(true);
		const dataToSend = data;

		try {
			const response = await fetch(getAuthUrl(isLogIn), {
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

			if (!isLogIn) {
				setResponseMessage({
					status: 'success',
					message: 'Account successfully created!',
				});
			} else {
				setResponseMessage({
					status: 'success',
					message: 'Loged In successfully!',
				});

				dispatch(logIn(data.idToken));
			}
		} catch (err: any) {
			setResponseMessage({
				status: 'fail',
				message: err.message,
			});
		}
		setIsLoading(false);
	};

	return (
		<StyledAuthForm onSubmit={authSubmitHandler(onSubmitHandler)}>
			<label htmlFor='email'></label>
			<input
				type='email'
				id='email'
				placeholder='E-mail'
				{...authRegister('email', {
					required: 'Email is required',
					pattern: {
						message: 'Email is not correct',
						value: EMAIL_REGEXP,
					},
				})}
				data-testid='email-imput'
			/>
			<span className='login-error'>{authErrors.email?.message}</span>

			<label htmlFor='password'></label>
			<input
				type='password'
				id='password'
				placeholder='Password'
				{...authRegister('password', {
					required: 'Password is required',
					pattern: {
						message:
							'Password have to contains at least 8 sign, at least one uppercase letter, at least one downcase letter, at least one number and at least one special sign.',
						value: PASSWORD_REGEXP,
					},
				})}
				data-testid='password-input'
			/>
			<span className='password-error'>{authErrors.password?.message}</span>
			{isLoading ? (
				<Loading styles={{ width: '100px' }} />
			) : (
				<button data-testid='submit-button'>
					{isLogIn ? 'Log in' : 'Register'}
				</button>
			)}
		</StyledAuthForm>
	);
};

export default AuthForm;
