import Wrapper from '../container/style/styled-wrapper';
import Form from './form/Form';
import { StyledHeading, StyledWrapper } from './style/styled-newsletter';

const NewsLetter = () => {
	return (
		<section className='mt-5 mb-5 section'>
			<Wrapper>
				<StyledHeading>Join our newsletter and get 20% off</StyledHeading>
				<StyledWrapper>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
						sint unde quaerat ratione soluta veniam provident adipisci cumque
						eveniet tempore?
					</p>
					<Form />
				</StyledWrapper>
			</Wrapper>
		</section>
	);
};

export default NewsLetter;
