import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { useForm, SubmitHandler } from 'react-hook-form';

import { toggleCartOrder } from '../../../store/navigation-slice';
import { cartActions } from '../../../store/cart-slice';
import { showAlert } from '../../../store/alert-slice';

import { StyledOrder, StyledForm } from './style/styled-cart-order';
import Loading from '../../loading/Loading';
import { wait } from '../../../helpers/functions';
import usePathName from '../../../hooks/usePathName';
import Overlay from '../overlay/Overlay';
import { EMAIL_REGEXP } from '../../../helpers/values';
import { AnimatePresence } from 'framer-motion';
import Animate from '../../animate/Animate';

interface Inputs {
	name: string;
	surname: string;
	city: string;
	street: string;
	flatNumber: string;
	email: string;
}

let content;
const CartOrder = () => {
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const { productsList } = useAppSelector((state) => state.cart);
	const homePage = usePathName('/');

	const totalPrice = productsList.reduce((prev, current) => {
		return prev + current.price * current.amount;
	}, 0);

	const toggleCartOrderHandler = () => {
		if (!isLoading) {
			dispatch(toggleCartOrder());
		}
	};

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm<Inputs>({
		mode: 'onTouched',
		defaultValues: {
			name: '',
			surname: '',
			city: '',
			street: '',
			flatNumber: '',
			email: '',
		},
	});

	const onSubmitHandler: SubmitHandler<Inputs> = async (userData) => {
		setIsLoading(true);

		try {
			const response = await fetch(
				'https://alledrogo-e-commerce-default-rtdb.europe-west1.firebasedatabase.app/list-of-orders.json',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						userData,
						productsList,
					}),
				}
			);

			if (!response.ok) {
				throw new Error('Fail to send order.');
			}

			await wait(2);

			dispatch(
				showAlert({
					status: 'success',
					title: 'Order sent',
					message: `Your order was successfully sent. Thank you for use our service!`,
				})
			);
			dispatch(cartActions.clearProductsList());
		} catch (err) {
			dispatch(
				showAlert({
					status: 'fail',
					title: 'Failed to send order',
					message: `Some issue occurred, please try later.`,
				})
			);
		}

		toggleCartOrderHandler();
		setIsLoading(false);
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				name: '',
				surname: '',
				city: '',
				street: '',
				flatNumber: '',
				email: '',
			});
		}
	}, [isSubmitSuccessful, reset]);

	if (isLoading) {
		content = <Loading styles={{ width: '100px' }} />;
	} else {
		content = (
			<StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
				<label htmlFor='name' />
				<input
					type='text'
					id='name'
					placeholder='Name'
					{...register('name', {
						required: 'Name is required',
					})}
				/>
				<span className='error-message-basic-style error-name'>
					{errors.name?.message}
				</span>

				<label htmlFor='surname' />
				<input
					type='text'
					id='surname'
					placeholder='Surname'
					{...register('surname', {
						required: 'Surname is required',
					})}
				/>
				<span className='error-message-basic-style error-surname'>
					{errors.surname?.message}
				</span>

				<label htmlFor='city' />
				<input
					type='text'
					id='city'
					placeholder='City'
					{...register('city', {
						required: 'City is required',
					})}
				/>
				<span className='error-message-basic-style error-city'>
					{errors.city?.message}
				</span>

				<label htmlFor='street' />
				<input
					type='text'
					id='street'
					placeholder='Street'
					{...register('street', {
						required: 'Street is required',
					})}
				/>
				<span className='error-message-basic-style error-street'>
					{errors.street?.message}
				</span>

				<label htmlFor='flat-number' />
				<input
					type='text'
					id='flat-number'
					placeholder='Flat number'
					{...register('flatNumber', {
						required: 'Flat number is required',
					})}
				/>
				<span className='error-message-basic-style error-flat-number'>
					{errors.flatNumber?.message}
				</span>

				<label htmlFor='email' />
				<input
					type='email'
					id='email'
					placeholder='Email'
					{...register('email', {
						required: 'Email is required',
						pattern: {
							message: 'Email is not correct',
							value: EMAIL_REGEXP,
						},
					})}
				/>
				<span className='error-message-basic-style error-email'>
					{errors.email?.message}
				</span>

				<div className='order-bottom'>
					<button className='order-button'>Order</button>
					<span className='order-price'>
						Order Price: ${totalPrice.toFixed(2)}
					</span>
				</div>
			</StyledForm>
		);
	}

	return (
		<Overlay onClose={toggleCartOrderHandler}>
			<Animate animateVariants='fade_in_from_bottom'>
				<StyledOrder isHomePage={homePage}>
					<i
						className='fa-solid fa-xmark close'
						onClick={toggleCartOrderHandler}
					></i>
					<h3 className='text-center'>
						{isLoading ? 'Processing...' : 'Data to order'}
					</h3>

					{content}
				</StyledOrder>
			</Animate>
		</Overlay>
	);
};

const CartOrderWrapper = () => {
	const { isCartOrderShown } = useAppSelector((state) => state.navigation);

	return <AnimatePresence>{isCartOrderShown && <CartOrder />}</AnimatePresence>;
};

export default CartOrderWrapper;
