import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
	max-width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: ${(props) => (props.padding ? 'var(--section)' : '')};

	@media (min-width: 576px) {
		max-width: 540px;
	}

	@media (min-width: 768px) {
		max-width: 720px;
	}

	@media (min-width: 992px) {
		max-width: 960px;
	}

	@media (min-width: 1200px) {
		max-width: 1140px;
	}

	@media (min-width: 1400px) {
		max-width: 1320px;
	}
`;

export default Wrapper;
