import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
	toggleProfileDetails,
	toggleOverlay,
} from '../../../store/navigation-slice';

import Loading from '../../Loading/Loading';
import ChangePassword from './changePassword/ChangePassword';

import { StyledDetails } from '../../../assets/style/profile/styled-profile-details';
import { StyledResponseMessage } from '../../../assets/style/profile/styled-profile-auth-modal';

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

	const toggleProfileDetailsHandler = () => {
		dispatch(toggleProfileDetails());
		dispatch(toggleOverlay());
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
		<StyledDetails
			notHomePage={notHomePage}
			disabled={false}
			data-testid='profile-details-wrapper'
		>
			<i
				className='fa-solid fa-xmark closeModal'
				onClick={toggleProfileDetailsHandler}
				data-testid='close-profile-details'
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
				<ChangePassword
					token={token}
					handleSubmit={handleSubmit}
					register={register}
					errors={errors}
					setResponseMessage={setResponseMessage}
					dispatch={dispatch}
				/>
			)}
		</StyledDetails>
	);
};

export default ProfileDetails;
