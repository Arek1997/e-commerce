import React, { useState } from 'react';

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
							<a className='home' href='#'>
								<i className='fa-solid fa-house'></i>
								Home
							</a>
						</li>
						<li>
							<a className='products' href='#'>
								<i className='fa-solid fa-couch'></i>
								Products
							</a>
						</li>
						<li>
							<a className='about' href='#'>
								<i className='fa-solid fa-couch'></i>
								About
							</a>
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
