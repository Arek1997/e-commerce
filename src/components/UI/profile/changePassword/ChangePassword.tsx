import { useState } from 'react';
import { changeToken } from '../../../../store/auth-slice';
import { StyledForm } from '../style/styled-profile-details';
import {
	FieldErrorsImpl,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form';
import { PasswordInput } from '../ProfileDetails';
import { ResponseMessageProps } from '../../../../interface';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import Input from '../../input/Input';

interface Props {
	token: string;
	passwordSubmitHandler: UseFormHandleSubmit<PasswordInput>;
	passwordRegister: UseFormRegister<PasswordInput>;
	passwordErrors: Partial<FieldErrorsImpl<PasswordInput>>;
	setResponseMessage: React.Dispatch<
		React.SetStateAction<ResponseMessageProps>
	>;
}

const ChangePassword = ({
	token,
	passwordSubmitHandler,
	passwordRegister,
	passwordErrors,
	setResponseMessage,
}: Props) => {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useAppDispatch();

	const changePasswordHandler: SubmitHandler<PasswordInput> = async ({
		password: newPassword,
	}) => {
		setIsLoading(true);

		try {
			const response = await fetch(
				`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${
					import.meta.env.VITE_FIREBASE_KEY
				}`,
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						idToken: token,
						password: newPassword,
						returnSecureToken: true,
					}),
				}
			);

			if (!response.ok) {
				const errorResponse = await response.json();
				const errorMessage = errorResponse.error.message;
				throw new Error(errorMessage);
			}

			const data = await response.json();

			setResponseMessage({
				status: 'success',
				message: 'New password has been created!',
			});

			dispatch(changeToken(data.idToken));
		} catch (err: any) {
			setResponseMessage({
				status: 'fail',
				message: err.message,
			});
		}
		setIsLoading(false);
	};

	return (
		<div className='particularInfo particularInfo--password'>
			<h4>Change password:</h4>
			<StyledForm
				className='change__password'
				onSubmit={passwordSubmitHandler(changePasswordHandler)}
			>
				<Input
					register={passwordRegister}
					name='password'
					id='password'
					type='password'
					placeholder='Your new password'
					testid='change-password-input'
				/>
				<span className='password-error'>
					{passwordErrors.password?.message}
				</span>
				<button>{isLoading ? 'Processing...' : 'Change'}</button>
			</StyledForm>
		</div>
	);
};

export default ChangePassword;
