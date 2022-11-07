import Wrapper from '../../../style/container/wrapper';

const Container = (props) => {
	return <Wrapper padding={props.padding}>{props.children}</Wrapper>;
};

export default Container;
