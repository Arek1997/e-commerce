import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useResponseMessage from '../../../../hooks/useResponseMessage';
import ResponseMessage from '../../../responseMessage/ResponseMessage';

import { StyledFormWrapper } from './style/styled-form';
import { EMAIL_REGEXP } from '../../../../helpers/values';
import Loading from '../../../loading/Loading';
import { wait, checkIfEmailAlreadyExists } from '../../../../helpers/functions';

interface Input {
	email: string;
}

const Form = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { responseMessage, setResponseMessage } = useResponseMessage();

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm<Input>({
		defaultValues: {
			email: '',
		},
	});

	const newsLetterSubmitHandler: SubmitHandler<Input> = async ({ email }) => {
		setIsLoading(true);
		try {
			const emailExist = await checkIfEmailAlreadyExists(email);

			if (emailExist) {
				return setResponseMessage({
					status: 'fail',
					message: 'This email is already in use.',
				});
			}

			const response = await fetch(
				`https://alledrogo-e-commerce-default-rtdb.europe-west1.firebasedatabase.app/newsletter-list.json`,
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ email }),
				}
			);

			if (!response.ok) {
				const errorResponse = await response.json();
				const errorMessage = errorResponse.statusText;
				throw new Error(errorMessage);
			}

			await wait(1);

			setResponseMessage({
				status: 'success',
				message: 'Thank you for sign up to newsletter.',
			});
		} catch (err: any) {
			setResponseMessage({
				status: 'fail',
				message: err.message,
			});
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({ email: '' });
		}
	}, [isSubmitSuccessful, reset]);

	return (
		<StyledFormWrapper className='newsletter-form-wrapper'>
			<form onSubmit={handleSubmit(newsLetterSubmitHandler)}>
				<div className='input-wrapper'>
					<label htmlFor='newsletter' />
					<input
						type='email'
						id='newsletter'
						placeholder='Enter Email'
						{...register('email', {
							required: 'Email is required',
							pattern: {
								message: 'Email is not correct',
								value: EMAIL_REGEXP,
							},
						})}
					/>
					<p className='error-message-basic-style newsletter-error-messsage'>
						{errors.email?.message}
					</p>
				</div>

				<button>
					{isLoading ? <Loading styles={{ width: '50px' }} /> : 'Subscribe'}
				</button>
			</form>
			<ResponseMessage
				extraStyle={{ fontSize: '1.6rem' }}
				status={responseMessage.status}
				message={responseMessage.message}
			/>
		</StyledFormWrapper>
	);
};

export default Form;
