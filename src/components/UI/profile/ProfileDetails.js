import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { navigationActions } from '../../../store/navigation-slice';

import {
	StyledDetails,
	StyledForm,
} from '../../../assets/style/profile/styled-profile-details';
import loadingSpinner from '../../../assets/loadingspinner.gif';

const ProfileDetails = () => {
	const dispatch = useDispatch();
	const [profileData, setProfileData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const { pathname } = useLocation();
	const { token } = useSelector((state) => state.authentication);
	const notHomePage = pathname.slice(1) !== 'home';

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

			const data = await response.json();
			setProfileData(...data.users);
			console.log(...data.users);
		} catch (err) {
			console.log(err);
		}

		setIsLoading(true);
	};

	useEffect(() => {
		getUserData();
	}, []);

	const changePassword = (data) => console.log(data);

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
		content = (
			<img
				style={{ display: 'block', width: '100px', margin: '0 auto' }}
				src={loadingSpinner}
				alt='Loadingspinner'
			/>
		);
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

			{content}

			<div className='particularInfo particularInfo--password'>
				<h4>Change password:</h4>
				<StyledForm
					className='change__password'
					onSubmit={handleSubmit(changePassword)}
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
		</StyledDetails>
	);
};

export default ProfileDetails;
