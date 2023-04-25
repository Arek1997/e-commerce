import { PropsWithChildren } from 'react';
import Wrapper from './style/styled-wrapper';

const Container = (props: PropsWithChildren) => {
	return <Wrapper>{props.children}</Wrapper>;
};

export default Container;
