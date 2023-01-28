import loadingSpinner from '../../assets/loadingspinner.gif';

const Loading = () => {
	return (
		<img
			style={{ display: 'block', margin: '0 auto' }}
			src={loadingSpinner}
			alt='Loadingspinner'
		/>
	);
};

export default Loading;
