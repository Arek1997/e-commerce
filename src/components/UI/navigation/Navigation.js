import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import {
	Nav,
	BurgerBtn,
	Logo,
	Cart,
	UlList,
} from '../../../style/navigation/styled-navigation';

import Container from '../container/Container';

const MOBILE_DEV_BORDER = 768;
let smallerThenMobileDevBorder = window.innerWidth < MOBILE_DEV_BORDER;
let initialLoad = true;

const Navigation = (props) => {
	const [showNav, setShowNav] = useState(false);
	const { pathname } = useLocation();
	const notHomePage = pathname.slice(1) !== 'home';

	const toggleMobNavHandler = () => {
		// props.onOverlayShow();
		setShowNav(!showNav);
		initialLoad = false;
	};

	useEffect(() => {
		!initialLoad && smallerThenMobileDevBorder && toggleMobNavHandler();
	}, [pathname]);
	return (
		<Container>
			<Nav className='section'>
				<UlList className={showNav ? 'show' : ''} darkFont={notHomePage}>
					<ul>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'activeLink' : '')}
								to='home'
							>
								<i className='fa-solid fa-house'></i>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'activeLink' : '')}
								to='products'
							>
								<i className='fa-solid fa-couch'></i>
								Products
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) => (isActive ? 'activeLink' : '')}
								to='aboutus'
							>
								<i className='fa-solid fa-couch'></i>
								About
							</NavLink>
						</li>
						<i
							className='fa-solid fa-xmark closeMobNav'
							onClick={toggleMobNavHandler}
						></i>
					</ul>
				</UlList>

				<BurgerBtn onClick={toggleMobNavHandler}>
					<i className='fa-solid fa-bars'></i>
				</BurgerBtn>

				<Logo darkFont={notHomePage}>AlleDrogo</Logo>

				<Cart onClick={props.onCartShow} darkFont={notHomePage}>
					<i className='fa-solid fa-cart-shopping'>
						<span>+10</span>
					</i>
				</Cart>
			</Nav>
		</Container>
	);
};

export default Navigation;
