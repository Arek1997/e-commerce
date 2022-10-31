import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
	Nav,
	BurgerBtn,
	Logo,
	Cart,
	UlList,
} from '../../../style/navigation/styled-navigation';

import Container from '../container/Containter';

const Navigation = (props) => {
	const [showNav, setShowNav] = useState(false);

	const toggleMobNavHandler = () => setShowNav(!showNav);

	return (
		<Container>
			<Nav>
				<UlList className={showNav ? 'show' : ''}>
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

				<Logo>AlleDrogo</Logo>

				<Cart onClick={props.onCartShow}>
					<i className='fa-solid fa-cart-shopping'>
						<span>+10</span>
					</i>
				</Cart>
			</Nav>
		</Container>
	);
};

export default Navigation;
