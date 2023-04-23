import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { NavLink, useLocation } from 'react-router-dom';

import {
	toggleCart,
	toggleProfileAuthModal,
	toggleProfileDetails,
	toggleProfileFavProducts,
} from '../../../store/navigation-slice';
import { logOut } from '../../../store/auth-slice';

import {
	Nav,
	BurgerBtn,
	Logo,
	Cart,
	UlList,
	IconsDiv,
} from '../../../assets/style/navigation/styled-navigation';

import Container from '../container/Container';
import Overlay from '../overlay/Overlay';
import useMediaQueries from '../../../hooks/useMediaQueries';

const Navigation = () => {
	const [showProfileOptions, setShowProfileOptions] = useState(false);
	const [isNavOpen, setIsNavOpen] = useState(false);
	const matches = useMediaQueries('max-width: 767px');

	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const notHomePage = pathname.slice(1) !== 'home';

	const { productsList } = useAppSelector((state) => state.cart);
	const { isLoggedIn } = useAppSelector((state) => state.authentication);

	let productsAmount: string | number = productsList.reduce((prev, current) => {
		return prev + current.amount;
	}, 0);

	productsAmount > 9 && (productsAmount = '+9');

	const toggleMobNavHandler = () => setIsNavOpen((prevState) => !prevState);
	const toggleCartHandler = () => dispatch(toggleCart());
	const toggleProfileOptions = () => setShowProfileOptions(!showProfileOptions);

	const toggleProfileHandler = (
		callback:
			| typeof toggleProfileAuthModal
			| typeof toggleProfileDetails
			| typeof toggleProfileFavProducts
	) => {
		dispatch(callback());
		toggleProfileOptions();
	};

	const logOutHandler = () => dispatch(logOut());

	return (
		<Container>
			<Nav className='section'>
				{isNavOpen && matches && (
					<Overlay onClose={toggleMobNavHandler}>{}</Overlay>
				)}
				<UlList
					className={isNavOpen ? 'open' : ''}
					notHomePage={notHomePage}
					data-testid='navigation-wrapper'
				>
					<i
						className='fa-solid fa-xmark closeNav'
						onClick={toggleMobNavHandler}
						data-testid='close-navigation'
					></i>
					<ul>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'activeLink' : '')}
								to='home'
								onClick={matches ? toggleMobNavHandler : undefined}
							>
								<i className='fa-solid fa-house'></i>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'activeLink' : '')}
								to='products'
								onClick={matches ? toggleMobNavHandler : undefined}
							>
								<i className='fa-solid fa-couch'></i>
								Products
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'activeLink' : '')}
								to='aboutus'
								onClick={matches ? toggleMobNavHandler : undefined}
							>
								<i className='fa-solid fa-book-open'></i>
								About
							</NavLink>
						</li>
					</ul>
				</UlList>

				<BurgerBtn
					aria-label='Burger button'
					onClick={toggleMobNavHandler}
					data-testid='burger-button'
				>
					<i className='fa-solid fa-bars'></i>
				</BurgerBtn>

				<Logo notHomePage={notHomePage}>AlleDrogo</Logo>

				<IconsDiv className='icons' notHomePage={notHomePage}>
					<Cart
						aria-label='Cart button'
						data-testid='shopping-cart'
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
						data-testid='profile-icon'
					>
						<i className='fa-solid fa-user'></i>
					</Cart>

					{showProfileOptions && (
						<nav data-testid='profile-option'>
							<ul>
								{!isLoggedIn && (
									<li
										onClick={() => toggleProfileHandler(toggleProfileAuthModal)}
									>
										Log in
									</li>
								)}
								{isLoggedIn && (
									<li
										onClick={() => toggleProfileHandler(toggleProfileDetails)}
									>
										Account
									</li>
								)}
								{isLoggedIn && (
									<li
										onClick={() =>
											toggleProfileHandler(toggleProfileFavProducts)
										}
									>
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
