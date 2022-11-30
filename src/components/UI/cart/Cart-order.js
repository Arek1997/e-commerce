import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import loadingSpinner from '../../../assets/loadingspinner.gif';

import { navigationActions } from '../../../store/navigation-slice';
import { cartActions } from '../../../store/cart-slice';
import { alertActions } from '../../../store/alert-slice';

import {
	StyledOrder,
	StyledForm,
} from '../../../assets/style/cart/styled-cart-order';

let content;
const CartOrder = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const { isCartOrderShown } = useSelector((state) => state.navigation);
	const { productsList } = useSelector((state) => state.cart);
	const { pathname } = useLocation();
	const notHomePage = pathname.slice(1) !== 'home';

	const totalPrice = productsList.reduce((prev, current) => {
		return prev + current.price * current.amount;
	}, 0);

	const toggleCartOrderHandler = () => {
		dispatch(navigationActions.toggleCartOrder());

		isCartOrderShown && dispatch(navigationActions.toggleOverlay());
	};

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm({
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

	const onSubmitHandler = async (data) => {
		setIsLoading(true);
		const userData = data;

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
		} catch (err) {
			console.log(err);
		}

		dispatch(
			alertActions.showAlert({
				status: 'success',
				title: 'Order sent',
				message: `Your order was successfully sent. Thank you for use our service.`,
			})
		);

		dispatch(cartActions.clearProductsList());
		dispatch(navigationActions.toggleCartOrder());
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
		content = (
			<img
				src={loadingSpinner}
				alt='Loading spinner'
				style={{ display: 'block', width: '100px', margin: '0 auto' }}
			/>
		);
	} else {
		content = (
			<>
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
					<span className='error-name error-message'>
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
					<span className='error-surname error-message'>
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
					<span className='error-city error-message'>
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
					<span className='error-street error-message'>
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
					<span className='error-flat-number error-message'>
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
								value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
							},
						})}
					/>
					<span className='error-email error-message'>
						{errors.email?.message}
					</span>

					<div className='order-bottom'>
						<button className='order-button'>Order</button>
						<span className='order-price'>
							Order Price: ${totalPrice.toFixed(2)}
						</span>
					</div>
				</StyledForm>
			</>
		);
	}

	return (
		<StyledOrder notHomePage={notHomePage}>
			<i
				className='fa-solid fa-xmark close'
				onClick={toggleCartOrderHandler}
			></i>
			<h3 className='text-center'>Data to order</h3>

			{content}
		</StyledOrder>
	);
};

export default CartOrder;
