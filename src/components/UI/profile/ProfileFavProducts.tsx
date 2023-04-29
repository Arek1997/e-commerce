import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { Link } from 'react-router-dom';

import { toggleProfileFavProducts } from '../../../store/navigation-slice';
import { favProductsActions } from '../../../store/favProducts-slice';

import StyledFavProduct from './style/styled-profile-fav-products';

let content;
const ProfileFavProducts = () => {
	const dispatch = useAppDispatch();
	const { favProductsArr } = useAppSelector((state) => state.favProducts);

	const toggleProfileFavProductsHandler = () =>
		dispatch(toggleProfileFavProducts());

	if (favProductsArr.length === 0) {
		content = (
			<span className='fav-prod-not-found text-center'>
				You have not favourite products yet, maybe add some?
			</span>
		);
	} else {
		content = (
			<>
				{favProductsArr.map((item) => (
					<article className='fav-prod-item' key={item.id}>
						<img src={item.image} alt={item.title} className='fav-prod-img' />
						<div className='fav-prod-description'>
							<Link to={`../products/${item.id}`}>
								<h4 className='fav-prod-name'>{item.title}</h4>
							</Link>
							<span className='fav-prod-price'>${item.price.toFixed(2)}</span>
						</div>
						<button
							className='fav-prod-remove'
							onClick={() =>
								dispatch(favProductsActions.removeProduct(item.id))
							}
						>
							<i className='fa-solid fa-trash'></i>
						</button>
					</article>
				))}
			</>
		);
	}

	return (
		<StyledFavProduct>
			<i
				className='fa-solid fa-xmark close'
				onClick={toggleProfileFavProductsHandler}
			></i>
			<h3 className='text-center'>Favourite products</h3>
			<div className='fav-prod-list'>{content}</div>
		</StyledFavProduct>
	);
};

export default ProfileFavProducts;
