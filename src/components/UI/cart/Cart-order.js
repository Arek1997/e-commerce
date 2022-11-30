import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
	StyledOrder,
	StyledForm,
} from '../../../assets/style/cart/styled-cart-order';

const CartOrder = () => {
	const { pathname } = useLocation();
	const notHomePage = pathname.slice(1) !== 'home';

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

	const onSubmitHandler = (data) => {
		console.log(data);
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

	return (
		<StyledOrder notHomePage={notHomePage}>
			<i className='fa-solid fa-xmark close'></i>
			<h3 className='text-center'>Your order</h3>

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
				<span className='error-name error-message'>{errors.name?.message}</span>

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
				<span className='error-city error-message'>{errors.city?.message}</span>

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
					<span className='order-price'>Order Price: $100</span>
				</div>
			</StyledForm>
		</StyledOrder>
	);
};

export default CartOrder;
