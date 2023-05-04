import Container from '../../components/UI/container/Container';
import {
	SectionHero,
	StyledArticle,
	StyledImageWrapper,
	StyledTextWrapper,
} from './style/styled-aboutus';
import imgPath from '../../assets/img/aboutus/abous-us-photo.jpg';

const Aboutus = () => {
	return (
		<>
			<SectionHero>
				<Container>
					<h2>Aboutus</h2>
				</Container>
			</SectionHero>
			<Container>
				<StyledArticle className='section'>
					<StyledImageWrapper>
						<img src={imgPath} alt='Photo presents clothes shop' />
					</StyledImageWrapper>
					<StyledTextWrapper>
						<h3>Our story</h3>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
							accusantium sapiente tempora sed dolore esse deserunt eaque
							excepturi, delectus error accusamus vel eligendi, omnis beatae.
							Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
							dolore, obcaecati incidunt sequi blanditiis est exercitationem
							molestiae delectus saepe odio eligendi modi porro eaque in libero
							minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
							ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
							similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
							iste.
						</p>
					</StyledTextWrapper>
				</StyledArticle>
			</Container>
		</>
	);
};

export default Aboutus;
