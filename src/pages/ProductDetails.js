import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../components/UI/container/Container';
import { SectionHero } from '../assets/style/products/styled-products';
import { StyledProductDetails } from '../assets/style/product-details/styled-productDetails';

const ProductDetails = (props) => {
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const { productId } = useParams();

	const findProduct = useCallback(async () => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(
				`https://fakestoreapi.com/products/${productId}`
			);

			if (!response.ok) {
				throw new Error(
					`${response.status} error. Check if URL(${response.url}) is correct.`
				);
			}

			const data = await response.json();
			setProduct(data);
		} catch (err) {
			console.log(err);
			setError(err.message);
		}

		setIsLoading(false);
	}, [productId]);

	useEffect(() => {
		findProduct();
	}, [findProduct]);

	let content = <p>Product not found</p>;

	if (Object.keys(product).length > 0) {
		content = (
			<article className='product'>
				<div className='product__img'>
					<img src={product.image} alt={product.title} />
				</div>
				<div className='product__details'>
					<h3 className='product__name'>{product.title}</h3>
					<span className='product__brand'>{product.brand}</span>
					<span className='product__price'>${product.price}</span>
					<p className='product__description'>{product.description}</p>
					<button className='product__button button'>Add to cart</button>
				</div>
			</article>
		);
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>LOADING...</p>;
	}

	return (
		<>
			<SectionHero>
				<Container padding='section'>
					<h2>Products / {product.title || 'not found'}</h2>
				</Container>
			</SectionHero>

			<StyledProductDetails className='section'>
				<Container padding='section'>{content}</Container>
			</StyledProductDetails>
		</>
	);
};

export default ProductDetails;
