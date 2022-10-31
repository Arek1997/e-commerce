import Container from '../container/Containter';

import StyledHeader, {
	StyledHeading,
} from '../../../style/header/header-style';

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<StyledHeading>
					<h1>Rest, Relax, Unwind</h1>
					<p>Embrace your choices - we do</p>
					<button>Show now</button>
				</StyledHeading>
			</Container>
		</StyledHeader>
	);
};

export default Header;
