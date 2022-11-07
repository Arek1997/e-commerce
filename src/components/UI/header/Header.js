import Container from '../container/Container';

import StyledHeader, {
	StyledHeading,
} from '../../../style/header/header-style';

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<StyledHeading>
					<p>Rest, Relax, Unwind</p>
					<p>Embrace your choices - we do</p>
					<button>Show now</button>
				</StyledHeading>
			</Container>
		</StyledHeader>
	);
};

export default Header;
