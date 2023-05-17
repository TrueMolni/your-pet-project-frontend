import { Field } from 'formik';
import css from './Input.module.css';

const InputForm = ({
	type = 'text',
	name,
	customStyle,
	placeholder,
	autofocus,
	autoComplete,
	as
	}) => {
	return (
		<Field
			className={`${css.input} ${customStyle}`}
			name={name}
			type={type}
			placeholder={placeholder}
			autoFocus={autofocus}
			autoComplete={autoComplete}
			as={as}
		/>
	);
};

const Input = ({
	type = 'text',
	name,
	id,
	label,
	customStyle,
	placeholder,
	value,
	onChange,
	onBlur,
}) => {
	return (
		<label>
			{label}
			<input
				className={`${css.input} ${customStyle}`}
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
			/>
		</label>
	);
};

export { Input, InputForm };
