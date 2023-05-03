import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { useForm } from 'react-hook-form';

import { toggleProfileAuthModal } from '../../../store/navigation-slice';

import {
	StyledProfileAuthModal,
	StyledResponseMessage,
} from './style/styled-profile-auth-modal';
import AuthForm from './authForm/AuthForm';
import { AuthInputs } from '../../../interface';
import usePathName from '../../../hooks/usePathName';
import useResponseMessage from '../../../hooks/useResponseMessage';
import Overlay from '../overlay/Overlay';
import Animate from '../../animate/Animate';

const ProfileAuthModal = () => {
	const [isLogIn, setIsLogIn] = useState(true);
	const dispatch = useAppDispatch();
	const { isLoggedIn } = useAppSelector((state) => state.authentication);
	const { responseMessage, setResponseMessage } = useResponseMessage();
	const homePage = usePathName('/');

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm<AuthInputs>({
		mode: 'onTouched',
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const toggleProfileModalHandler = () => dispatch(toggleProfileAuthModal());
	const toggleIsLoginHandler = () => {
		setIsLogIn(!isLogIn);
		setResponseMessage({
			status: null,
			message: '',
		});
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({ email: '', password: '' });
		}
	}, [isSubmitSuccessful, reset]);

	useEffect(() => {
		if (isLogIn && isLoggedIn) {
			const timeout = setTimeout(() => {
				dispatch(toggleProfileAuthModal());
			}, 1500);

			return () => clearTimeout(timeout);
		}
	}, [isLogIn, isLoggedIn]);

	return (
		<Overlay onClose={toggleProfileModalHandler}>
			<Animate animateVariants='fade_in_from_bottom'>
				<StyledProfileAuthModal
					isHomePage={homePage}
					data-testid='profile-modal'
				>
					<i
						className='fa-solid fa-xmark closeModal'
						onClick={toggleProfileModalHandler}
						data-testid='close-profile-modal'
					></i>
					<h2 className='text-center'>Welcome in AlleDrogo!</h2>
					<StyledResponseMessage
						status={responseMessage.status}
						className='response-message text-center'
						data-testid='profile-response-message'
					>
						{responseMessage.message}
					</StyledResponseMessage>
					<p className='text-center text-bold'>
						{isLogIn ? 'Log in' : 'Sign up'}
					</p>

					<AuthForm
						authSubmitHandler={handleSubmit}
						authRegister={register}
						authErrors={errors}
						isLogIn={isLogIn}
						setResponseMessage={setResponseMessage}
					/>
					<p className='paragraph-bottom'>
						{isLogIn ? "Haven't profile yet?" : 'Have a profile?'}
						<button onClick={toggleIsLoginHandler}>
							{!isLogIn ? 'Log in' : 'Sign up'}
						</button>
					</p>
				</StyledProfileAuthModal>
			</Animate>
		</Overlay>
	);
};

export default ProfileAuthModal;
