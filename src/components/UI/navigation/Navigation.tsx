import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { NavLink } from 'react-router-dom';

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
	ProfileBtn,
	UlList,
	IconsDiv,
} from './style/styled-navigation';

import Container from '../container/Container';
import Overlay from '../overlay/Overlay';
import useMediaQueries from '../../../hooks/useMediaQueries';
import usePathName from '../../../hooks/usePathName';

const Navigation = () => {
	const [showProfileOptions, setShowProfileOptions] = useState(false);
	const [isNavOpen, setIsNavOpen] = useState(false);
	const isMobile = useMediaQueries('max-width: 767px');
	const homePage = usePathName('home');
	const dispatch = useAppDispatch();

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
				{isNavOpen && isMobile && (
					<Overlay onClose={toggleMobNavHandler}>{}</Overlay>
				)}
				<UlList
					className={isNavOpen ? 'open' : ''}
					isHomePage={homePage}
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
								onClick={isMobile ? toggleMobNavHandler : undefined}
							>
								<i className='fa-solid fa-house'></i>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'activeLink' : '')}
								to='products'
								onClick={isMobile ? toggleMobNavHandler : undefined}
							>
								<i className='fa-solid fa-couch'></i>
								Products
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'activeLink' : '')}
								to='aboutus'
								onClick={isMobile ? toggleMobNavHandler : undefined}
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

				<Logo isHomePage={homePage}>AlleDrogo</Logo>

				<IconsDiv className='icons' isHomePage={homePage}>
					<Cart
						aria-label='Cart button'
						data-testid='shopping-cart'
						onClick={toggleCartHandler}
						isHomePage={homePage}
					>
						<i className='fa-solid fa-cart-shopping'>
							<span>{productsAmount}</span>
						</i>
					</Cart>

					<ProfileBtn
						className='profile-btn'
						aria-label='Profile button'
						isHomePage={homePage}
						onClick={toggleProfileOptions}
						data-testid='profile-icon'
					>
						<i className='fa-solid fa-user'></i>
					</ProfileBtn>

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
