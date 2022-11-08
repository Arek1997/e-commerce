import React from 'react';
import Container from '../components/UI/container/Container';
import {
	SectionHero,
	SectionCenter,
} from '../assets/style/aboutus/styled-aboutus';

const Aboutus = () => {
	return (
		<>
			<SectionHero>
				<Container>
					<h2>Aboutus</h2>
				</Container>
			</SectionHero>
			<SectionCenter>
				<Container>
					<article className='section'>
						<h3>Our History</h3>
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
					</article>
				</Container>
			</SectionCenter>
		</>
	);
};

export default Aboutus;
