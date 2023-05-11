import { StyledFormWrapper } from './style/styled-form';

const Form = () => {
	return (
		<StyledFormWrapper>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<label htmlFor='newsletter'></label>
				<input type='text' id='newsletter' placeholder='Enter Email' />
				<button>Subscribe</button>
			</form>
			<p className='error-message'></p>
		</StyledFormWrapper>
	);
};

export default Form;
