import { useState } from 'react';
import { changeToken } from '../../../../store/auth-slice';

import { StyledForm } from '../../../../assets/style/profile/styled-profile-details';

const ChangePassword = (props) => {
	const [isLoading, setIsLoading] = useState(false);

	const changePasswordHandler = async (data) => {
		setIsLoading(true);
		const { password: newPassword } = data;

		try {
			const response = await fetch(
				'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCtGvqymH11_3PzBQ1fJ9Ci5-F5w1HUSqA',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						idToken: props.token,
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

			props.setResponseMessage({
				status: 'success',
				message: 'New password has been created!',
			});

			props.dispatch(changeToken(data.idToken));
		} catch (err) {
			props.setResponseMessage({
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
				onSubmit={props.handleSubmit(changePasswordHandler)}
			>
				<label htmlFor='password'></label>
				<input
					type='password'
					id='password'
					placeholder='Your new password'
					{...props.register('password', {
						required: 'Password is required',
						pattern: {
							message:
								'Password have to contains at least 8 sign, at least one uppercase letter, at least one downcase letter, at least one number and at least one special sign.',
							value:
								/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/gm,
						},
					})}
				/>
				<span className='password-error'>{props.errors.password?.message}</span>
				<button>{isLoading ? 'Processing...' : 'Change'}</button>
			</StyledForm>
		</div>
	);
};

export default ChangePassword;
