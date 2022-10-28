import React from 'react';
import {
	Nav,
	BurgerBtn,
	Logo,
	Cart,
} from '../../../style/navigation/styled-navigation';

const Navigation = () => {
	return (
		<Nav>
			<BurgerBtn>
				<i className='fa-solid fa-bars'></i>
			</BurgerBtn>
			<Logo>AlleDrogo</Logo>
			<Cart>
				<i class='fa-solid fa-cart-shopping'>
					<span>+10</span>
				</i>
			</Cart>
		</Nav>
	);
};

export default Navigation;
