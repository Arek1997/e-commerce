import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import { navigationActions } from '../../store/navigation-slice';
import { favProductsActions } from '../../store/favProducts-slice';
import { alertActions } from '../../store/alert-slice';

import { Link } from 'react-router-dom';

import StyledProduct from '../../assets/style/products/styled-products-item';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ProductsPlaceholder from './Products-placeholder';

const ProductsItem = (props) => {
	const [isFavourite, setIsFavourite] = useState(false);
	const dispatch = useDispatch();
	const { favProductsArr } = useSelector((state) => state.favProducts);
	const { isLoggedIn } = useSelector((state) => state.authentication);

	const product = {
		id: props.id,
		title: props.title,
		price: props.price,
		image: props.image,
		amount: 1,
	};

	const productIsInFavProdArr = () =>
		favProductsArr.some((item) => item.id === props.id);

	useEffect(() => {
		if (isLoggedIn) {
			productIsInFavProdArr() && setIsFavourite(true);
		}
	}, [isLoggedIn]);

	const addProductHandler = () => dispatch(cartActions.addProduct(product));

	const selectAsFavourite = () => {
		if (isLoggedIn) {
			!isFavourite
				? dispatch(favProductsActions.addProduct(product))
				: dispatch(favProductsActions.removeProduct(product.id));

			setIsFavourite(!isFavourite);
		} else {
			dispatch(navigationActions.toggleOverlay());
			dispatch(
				alertActions.showAlert({
					status: 'warning',
					title: 'Warning',
					message: `If you wanna select product as favourite you have to be logged
			firstfully`,
				})
			);
		}
	};

	useEffect(() => {
		if (isFavourite && !productIsInFavProdArr()) {
			setIsFavourite(false);
		}

		localStorage.setItem('favProducts', JSON.stringify(favProductsArr));
	}, [favProductsArr]);

	return (
		<StyledProduct className='product' favourite={isFavourite}>
			<div className='product__body'>
				<LazyLoadImage
					className='product__img'
					alt={props.title}
					src={props.image}
					placeholder={<ProductsPlaceholder />}
				/>

				<div className='product__icon-actions'>
					<Link
						to={`../products/${props.id}`}
						aria-label='Show product details'
						className='product__details'
					>
						<i className='fa-solid fa-magnifying-glass'></i>
					</Link>
					<button
						aria-label='add product button'
						className='product__add'
						onClick={addProductHandler}
					>
						<i className='fa-solid fa-cart-shopping'></i>
					</button>

					<button
						aria-label='add to favourite button'
						className='product__favourite'
						onClick={selectAsFavourite}
					>
						<i className='fa-solid fa-heart'></i>
					</button>
				</div>
			</div>
			<div className='product__bottom'>
				<Link to={`../products/${props.id}`}>
					<h3 className='product__title'>{props.title}</h3>
				</Link>
				<span className='product__price'>${props.price.toFixed(2)}</span>
			</div>
		</StyledProduct>
	);
};

export default ProductsItem;
