import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useFetch from 'react-fetch-hook';
import { cartActions } from '../store/cart-slice';

import Container from '../components/UI/container/Container';
import { API_URL } from '../components/API/API';

import { SectionHero } from '../assets/style/hero-section/styled-hero';
import { StyledProductDetails } from '../assets/style/product-details/styled-productDetails';
import loadingSpinner from '../assets/loadingspinner.gif';

const ProductDetails = () => {
	const { productId } = useParams();
	const { isLoading, error, data } = useFetch(`${API_URL}/${productId}`);
	const dispatch = useDispatch();

	let content = <p className='error-text'>Product not found</p>;

	if (isLoading) {
		content = (
			<img
				style={{ display: 'block', margin: '0 auto' }}
				src={loadingSpinner}
				alt='Loadingspinner'
			/>
		);
	}

	if (error) {
		content = (
			<p className='error-text'>
				{error.status} {error.message} Check if URL address "{API_URL}" is
				correct.
			</p>
		);
	}

	if (data) {
		const product = {
			id: data.id,
			title: data.title,
			image: data.image,
			price: data.price,
			description: data.description,
			amount: 1,
		};

		const addProductHandler = () => dispatch(cartActions.addProduct(product));

		content = (
			<article className='product'>
				<div className='product__img'>
					<img src={data.image} alt={data.title} />
				</div>
				<div className='product__details'>
					<h3 className='product__name'>{data.title}</h3>
					<span className='product__brand'>{data.brand}</span>
					<span className='product__price'>${data.price.toFixed(2)}</span>
					<p className='product__description'>{data.description}</p>
					<button
						className='product__button button'
						onClick={addProductHandler}
					>
						Add to cart
					</button>
				</div>
			</article>
		);
	}

	return (
		<>
			<SectionHero>
				<Container padding='section'>
					<h2>Products / {data?.title || 'not found'}</h2>
				</Container>
			</SectionHero>

			<StyledProductDetails className='section'>
				<Container padding='section'>{content}</Container>
			</StyledProductDetails>
		</>
	);
};

export default ProductDetails;
