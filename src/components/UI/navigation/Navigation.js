import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { navigationActions } from '../../../store/navigation-slice';

import {
	Nav,
	BurgerBtn,
	Logo,
	Cart,
	UlList,
} from '../../../assets/style/navigation/styled-navigation';

import Container from '../container/Container';

const Navigation = (props) => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const notHomePage = pathname.slice(1) !== 'home';

	const { isNavShown } = useSelector((state) => state.navigation);

	const { productsList } = useSelector((state) => state.cart);

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

	console.log('render navigation');

	return (
		<Container>
			<Nav className='section'>
				<UlList className={isNavShown ? 'open' : ''} darkFont={notHomePage}>
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

				<Cart onClick={toggleCartHandler} darkFont={notHomePage}>
					<i className='fa-solid fa-cart-shopping'>
						<span>{productsAmount}</span>
					</i>
				</Cart>
			</Nav>
		</Container>
	);
};

export default Navigation;
