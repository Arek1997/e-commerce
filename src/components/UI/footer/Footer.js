import Container from '../container/Container';
import StyledFooter from '../../../assets/style/footer/styled-footer';

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
				</div>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
