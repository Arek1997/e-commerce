import loadingSpinner from '../../assets/loadingspinner.gif';

const Loading = ({ styles }) => {
	const style = {
		display: 'block',
		margin: '0 auto',
		...styles,
	};

	return <img style={style} src={loadingSpinner} alt='Loadingspinner' />;
};

export default Loading;
