import { useState } from 'react';
import { ResponseMessageProps } from '../interface';

const useResponseMessage = () => {
	const [responseMessage, setResponseMessage] = useState<ResponseMessageProps>({
		status: null,
		message: '',
	});

	return { responseMessage, setResponseMessage };
};

export default useResponseMessage;
