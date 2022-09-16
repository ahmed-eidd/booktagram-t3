import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import {
  // FormControl,
  // FormLabel,
  // FormErrorMessage,
  Input,
  InputProps,
} from '@chakra-ui/react';
import FormControl from '../FormControl/FormControl';
import classes from './InputField.module.scss';

interface InputFieldProps {
  labelStyle?: React.CSSProperties;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  style?: React.CSSProperties;
  errorMessage?: string;
  inputStyle?: React.CSSProperties;
}

const InputField: React.FC<
  InputFieldProps & InputProps & FieldHookConfig<string>
> = ({
  labelStyle,
  label,
  placeholder,
  type = 'text',
  className,
  inputStyle,
  style,
  errorMessage,
  ...props
}) => {
  const [field, { error, touched }] = useField(props);

  return (
    <FormControl
      className={className}
      error={error || errorMessage}
      touched={touched}
      label={label}
      labelStyle={labelStyle}
      field={field}
      style={style}
    >
      <Input
        {...field}
        id={field.name}
        type={type}
        placeholder={placeholder}
        style={{
          borderColor: error && '#E53E3E !important',
          ...inputStyle,
        }}
        className={[
          error ? [classes.Input, classes.InputError].join(' ') : classes.Input,
          className,
        ].join(' ')}
      />
    </FormControl>
  );
};

export default InputField;
