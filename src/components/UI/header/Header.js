import Container from '../container/Container';

import StyledHeader, {
	StyledHeading,
	StyledLink,
} from '../../../assets/style/header/header-style';

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<StyledHeading>
					<p>Rest, Relax, Unwind</p>
					<p>Embrace your choices - we do</p>
					<StyledLink to='../products'>Show now</StyledLink>
				</StyledHeading>
			</Container>
		</StyledHeader>
	);
};

export default Header;
