import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import { inputValidation } from '../../../helpers/values';
interface Props<T> {
	register: UseFormRegister<FieldValues & T>;
	name: Path<T>;
	id: string;
	type: keyof typeof inputValidation;
	placeholder?: string;
	testid?: string;
}

const Input = <T,>({
	register,
	name,
	id,
	type,
	placeholder = '',
	testid = '',
}: Props<T>) => {
	return (
		<>
			<label htmlFor={id}></label>
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				{...register(name, inputValidation[type])}
				data-testid={testid}
			/>
		</>
	);
};

export default Input;
