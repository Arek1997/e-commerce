import { ResponseMessageProps } from '../../interface';
import { StyledResponseMessage } from './style/styled-response-message';

interface Props extends ResponseMessageProps {
	extraClass?: string;
	extraStyle?: React.CSSProperties;
}

const ResponseMessage = ({
	status,
	message,
	extraClass,
	extraStyle,
}: Props) => {
	return (
		<StyledResponseMessage
			status={status}
			style={extraStyle}
			className={`error-message-basic-style response-message ${
				extraClass ? extraClass : ''
			}`}
			data-testid='response-message'
		>
			{message}
		</StyledResponseMessage>
	);
};

export default ResponseMessage;
