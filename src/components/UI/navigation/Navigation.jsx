import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { navigationActions } from '../../../store/navigation-slice';
import { authenticationActions } from '../../../store/auth-slice';

import {
	Nav,
	BurgerBtn,
	Logo,
	Cart,
	UlList,
	IconsDiv,
} from '../../../assets/style/navigation/styled-navigation';

import Container from '../container/Container';

let vieportWidth = window.innerWidth;

const Navigation = () => {
	const [showProfileOptions, setShowProfileOptions] = useState(false);
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const notHomePage = pathname.slice(1) !== 'home';

	const { isNavShown } = useSelector((state) => state.navigation);

	const { productsList } = useSelector((state) => state.cart);

	const { isLoggedIn } = useSelector((state) => state.authentication);

	let productsAmount = productsList.reduce((prev, current) => {
		return prev + current.amount;
	}, 0);

	productsAmount > 9 && (productsAmount = '+9');

	const toggleMobNavHandler = () => {
		dispatch(navigationActions.toggleNav());
		dispatch(navigationActions.toggleOverlay());
	};

	const toggleCartHandler = () => {
		dispatch(navigationActions.toggleCart());
		dispatch(navigationActions.toggleOverlay());
	};

	const toggleProfileOptions = () => setShowProfileOptions(!showProfileOptions);

	const toggleProfileModalHandler = () => {
		dispatch(navigationActions.toggleProfileAuthModal());
		dispatch(navigationActions.toggleOverlay());
		toggleProfileOptions();
	};

	const logOutHandler = () => dispatch(authenticationActions.logOut());

	const toggleProfileDetailsHandler = () => {
		dispatch(navigationActions.toggleProfileDetails());
		dispatch(navigationActions.toggleOverlay());
		toggleProfileOptions();
	};

	const toggleProfileFavProductsHandler = () => {
		dispatch(navigationActions.toggleProfileFavProducts());
		dispatch(navigationActions.toggleOverlay());
		toggleProfileOptions();
	};

	return (
		<Container>
			<Nav className='section'>
				<UlList className={isNavShown ? 'open' : ''} notHomePage={notHomePage}>
					<i
						className='fa-solid fa-xmark closeNav'
						onClick={toggleMobNavHandler}
					></i>
					<ul>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'activeLink' : '')}
								to='home'
								onClick={vieportWidth <= 768 && toggleMobNavHandler}
							>
								<i className='fa-solid fa-house'></i>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'activeLink' : '')}
								to='products'
								onClick={vieportWidth <= 768 && toggleMobNavHandler}
							>
								<i className='fa-solid fa-couch'></i>
								Products
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'activeLink' : '')}
								to='aboutus'
								onClick={vieportWidth <= 768 && toggleMobNavHandler}
							>
								<i className='fa-solid fa-book-open'></i>
								About
							</NavLink>
						</li>
					</ul>
				</UlList>

				<BurgerBtn aria-label='Burger button' onClick={toggleMobNavHandler}>
					<i className='fa-solid fa-bars'></i>
				</BurgerBtn>

				<Logo notHomePage={notHomePage}>AlleDrogo</Logo>

				<IconsDiv className='icons' notHomePage={notHomePage}>
					<Cart
						aria-label='Cart button'
						onClick={toggleCartHandler}
						notHomePage={notHomePage}
					>
						<i className='fa-solid fa-cart-shopping'>
							<span>{productsAmount}</span>
						</i>
					</Cart>

					<Cart
						className='profile-icon'
						aria-label='Profile button'
						notHomePage={notHomePage}
						onClick={toggleProfileOptions}
					>
						<i className='fa-solid fa-user'></i>
					</Cart>

					{showProfileOptions && (
						<nav>
							<ul>
								{!isLoggedIn && (
									<li onClick={toggleProfileModalHandler}>Log in</li>
								)}
								{isLoggedIn && (
									<li onClick={toggleProfileDetailsHandler}>Account</li>
								)}
								{isLoggedIn && (
									<li onClick={toggleProfileFavProductsHandler}>
										Favourite products
									</li>
								)}
								{isLoggedIn && <li onClick={logOutHandler}>Log out</li>}
							</ul>
						</nav>
					)}
				</IconsDiv>
			</Nav>
		</Container>
	);
};

export default Navigation;
