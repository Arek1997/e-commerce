import Container from '../container/Container';
import StyledFooter from './style/styled-footer';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<StyledFooter className='footer'>
			<Container>
				<div className='footer__container section text-center'>
					<p className='footer__paragraph'>
						<span className='footer__year'>©{currentYear} </span>
						Developed by{' '}
						<a
							className='footer__link'
							href='https://www.linkedin.com/in/arkadiusz-szewczyk-b93b33240/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Arek Szewczyk
						</a>
					</p>

					<p className='footer__paragraph'>
						Design taken from{' '}
						<a
							className='footer__link'
							href='https://vanilla-js-store.netlify.app/index.html'
							target='_blank'
							rel='noopener noreferrer'
						>
							Project 1
						</a>
						<a
							className='footer__link mx-1'
							href='https://react-course-comfy-sloth-store.netlify.app/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Project 2
						</a>
					</p>
				</div>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
