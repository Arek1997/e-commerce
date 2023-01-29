import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { navigationActions } from '../../../store/navigation-slice';
import { authenticationActions } from '../../../store/auth-slice';

import {
	StyledDetails,
	StyledForm,
} from '../../../assets/style/profile/styled-profile-details';
import { StyledResponseMessage } from '../../../assets/style/profile/styled-profile-modal';
import Loading from '../../Loading/Loading';

const ProfileDetails = () => {
	const dispatch = useDispatch();
	const [profileData, setProfileData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [responseMessage, setResponseMessage] = useState({
		status: null,
		message: '',
	});

	const { pathname } = useLocation();
	const notHomePage = pathname.slice(1) !== 'home';
	const { token } = useSelector((state) => state.authentication);

	let content;

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			password: '',
		},
	});

	const getUserData = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(
				'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCtGvqymH11_3PzBQ1fJ9Ci5-F5w1HUSqA',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						idToken: token,
					}),
				}
			);

			if (!response.ok) {
				const errorResponse = await response.json();
				const errorMessage = errorResponse.error.message;
				throw new Error(errorMessage);
			}

			const data = await response.json();
			setProfileData(...data.users);

			setResponseMessage({
				status: 'success',
				message: 'User data loaded successfully!',
			});
		} catch (err) {
			setResponseMessage({
				status: 'fail',
				message: err.message,
			});
		}

		setIsLoading(false);
	};

	useEffect(() => {
		getUserData();
	}, []);

	useEffect(() => {
		if (responseMessage.status === 'fail') return;

		const timeout = setTimeout(() => {
			setResponseMessage({
				status: null,
				message: '',
			});
		}, 3000);

		return () => clearTimeout(timeout);
	}, [responseMessage]);

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

			dispatch(authenticationActions.changeToken(data.idToken));
		} catch (err) {
			setResponseMessage({
				status: 'fail',
				message: err.message,
			});
		}

		setIsLoading(false);
	};

	const toggleProfileDetailsHandler = () => {
		dispatch(navigationActions.toggleProfileDetails());
		dispatch(navigationActions.toggleOverlay());
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({ password: '' });
		}
	}, [isSubmitSuccessful, reset]);

	if (isLoading) {
		content = <Loading styles={{ width: '100px' }} />;
	}

	if (Object.keys(profileData).length > 0) {
		content = (
			<>
				<div className='particularInfo'>
					<h4>Your email:</h4>
					<span className='email'>{profileData.email}</span>
				</div>

				<div className='particularInfo'>
					<h4>Profil is active:</h4>
					<span className='disabled'>Yes</span>
				</div>

				<div className='particularInfo'>
					<h4>Last Login:</h4>
					<span className='lastLogIn'>
						{new Date(+profileData.lastLoginAt).toLocaleString()}
					</span>
				</div>

				<div className='particularInfo'>
					<h4>Profil created:</h4>
					<span className='profileCreated'>
						{new Date(+profileData.createdAt).toLocaleString()}
					</span>
				</div>
			</>
		);
	}

	return (
		<StyledDetails notHomePage={notHomePage} disabled={false}>
			<i
				className='fa-solid fa-xmark closeModal'
				onClick={toggleProfileDetailsHandler}
			></i>
			<h3 className='text-center'>Profile details</h3>
			<StyledResponseMessage
				status={responseMessage.status}
				className='response-message text-center'
			>
				{responseMessage.message}
			</StyledResponseMessage>

			{content}

			{Object.keys(profileData).length > 0 && (
				<div className='particularInfo particularInfo--password'>
					<h4>Change password:</h4>
					<StyledForm
						className='change__password'
						onSubmit={handleSubmit(changePasswordHandler)}
					>
						<label htmlFor='password'></label>
						<input
							type='password'
							id='password'
							placeholder='Your new password'
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
						<button>Change</button>
					</StyledForm>
				</div>
			)}
		</StyledDetails>
	);
};

export default ProfileDetails;
