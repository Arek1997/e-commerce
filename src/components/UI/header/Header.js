import React from 'react';
import Navigation from '../navigation/Navigation';
import Container from '../container/Containter';
import StyledHeader from '../../../style/header/header-style';

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Navigation />
			</Container>
		</StyledHeader>
	);
};

export default Header;
