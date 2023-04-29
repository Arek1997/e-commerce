import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { useForm } from 'react-hook-form';

import { toggleProfileDetails } from '../../../store/navigation-slice';

import ChangePassword from './changePassword/ChangePassword';
import { StyledDetails } from './style/styled-profile-details';
import { StyledResponseMessage } from './style/styled-profile-auth-modal';
import usePathName from '../../../hooks/usePathName';
import Loading from '../../loading/Loading';
import useResponseMessage from '../../../hooks/useResponseMessage';
import {
	AuthPassword,
	ProfileDetails as ProfileData,
} from '../../../interface';
import Overlay from '../overlay/Overlay';
import Animate from '../../animate/Animate';

export interface PasswordInput {
	password: AuthPassword;
}

const ProfileDetails = () => {
	const dispatch = useAppDispatch();
	const { token, isLoggedIn } = useAppSelector((state) => state.authentication);
	const [profileData, setProfileData] = useState<ProfileData | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const { responseMessage, setResponseMessage } = useResponseMessage();

	const homePage = usePathName('/');
	let content;

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm<PasswordInput>({
		mode: 'onTouched',
		defaultValues: {
			password: '',
		},
	});

	const getUserData = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(
				`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${
					import.meta.env.VITE_FIREBASE_KEY
				}`,
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

			const data: { users: [ProfileData] } = await response.json();

			setProfileData(...data.users);

			setResponseMessage({
				status: 'success',
				message: 'User data loaded successfully!',
			});
		} catch (err: any) {
			setResponseMessage({
				status: 'fail',
				message: err.message,
			});
		}

		setIsLoading(false);
	};

	useEffect(() => {
		if (!isLoggedIn) return;
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

	const toggleProfileDetailsHandler = () => dispatch(toggleProfileDetails());
	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({ password: '' });
		}
	}, [isSubmitSuccessful, reset]);

	if (isLoading) {
		content = <Loading styles={{ width: '100px' }} />;
	}

	if (profileData && Object.keys(profileData).length) {
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
		<Overlay onClose={toggleProfileDetailsHandler}>
			<Animate animateVariants='fade_in_from_bottom'>
				<StyledDetails
					isHomePage={homePage}
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

					{profileData && Object.keys(profileData).length && (
						<ChangePassword
							token={token}
							passwordSubmitHandler={handleSubmit}
							passwordRegister={register}
							passwordErrors={errors}
							setResponseMessage={setResponseMessage}
						/>
					)}
				</StyledDetails>
			</Animate>
		</Overlay>
	);
};

export default ProfileDetails;
