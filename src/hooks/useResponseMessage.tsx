import { useEffect, useState } from 'react';
import { ResponseMessageProps } from '../interface';

const useResponseMessage = () => {
	const [responseMessage, setResponseMessage] = useState<ResponseMessageProps>({
		status: null,
		message: '',
	});

	useEffect(() => {
		if (responseMessage.status === 'fail') return;

		const timeout = setTimeout(() => {
			setResponseMessage({
				status: null,
				message: '',
			});
		}, 3000);

		return () => clearTimeout(timeout);
	}, [responseMessage]);

	return { responseMessage, setResponseMessage };
};

export default useResponseMessage;
