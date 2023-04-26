import Container from '../container/Container';

import StyledHeader, { StyledHeading, StyledLink } from './style/header-style';

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<StyledHeading>
					<p>Rest, Relax, Unwind</p>
					<p>Embrace your choices - we do</p>
					<StyledLink to='../products' data-testid='header-button'>
						Show now
					</StyledLink>
				</StyledHeading>
			</Container>
		</StyledHeader>
	);
};

export default Header;
