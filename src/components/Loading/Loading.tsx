import loadingSpinner from '../../assets/loadingspinner.gif';

interface Props {
	styles?: Object;
}

const Loading = ({ styles }: Props) => {
	const style = {
		display: 'block',
		margin: '0 auto',
		...styles,
	};

	return <img style={style} src={loadingSpinner} alt='Loadingspinner' />;
};

export default Loading;
