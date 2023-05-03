import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { cartActions } from '../../store/cart-slice';

import { favProductsActions } from '../../store/favProducts-slice';
import { showAlert } from '../../store/alert-slice';

import { Link } from 'react-router-dom';

import StyledProduct from './style/styled-products-item';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import imagePlaceholder from '../../assets/img/product/product-placeholder.webp';
import ProductsActionIcons from './Products-action-icons';
import { SelectedProduct } from '../../interface';

interface Props {
	id: string;
	title: string;
	price: number;
	image: string;
}

const ProductsItem = ({ id, title, price, image }: Props) => {
	const [isFavourite, setIsFavourite] = useState(false);
	const dispatch = useAppDispatch();
	const { favProductsArr } = useAppSelector((state) => state.favProducts);
	const { isLoggedIn } = useAppSelector((state) => state.authentication);

	const createSingleProduct = (): SelectedProduct => {
		return {
			id,
			title,
			price,
			image,
			amount: 1,
		};
	};

	const productIsInFavProdArr = () =>
		favProductsArr.some((item) => item.id === id);

	useEffect(() => {
		if (isLoggedIn) {
			productIsInFavProdArr() && setIsFavourite(true);
		}

		return () => setIsFavourite(false);
	}, [isLoggedIn]);

	const addProductHandler = () => {
		dispatch(cartActions.addProduct(createSingleProduct()));
	};

	const selectAsFavourite = () => {
		if (isLoggedIn) {
			!isFavourite
				? dispatch(favProductsActions.addProduct(createSingleProduct()))
				: dispatch(favProductsActions.removeProduct(id));

			setIsFavourite(!isFavourite);
		} else {
			dispatch(
				showAlert({
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
					alt={title}
					src={image}
					placeholderSrc={imagePlaceholder}
					width={'100%'}
				/>

				<ProductsActionIcons
					id={id}
					favourite={isFavourite}
					onAddProduct={addProductHandler}
					onFavourite={selectAsFavourite}
				/>
			</div>
			<div className='product__bottom'>
				<Link to={`../products/${id}`}>
					<h3 className='product__title'>{title}</h3>
				</Link>
				<span className='product__price'>${price.toFixed(2)}</span>
			</div>
		</StyledProduct>
	);
};

export default ProductsItem;
