import React from 'react';
import { Textarea, TextareaProps } from '@chakra-ui/react';
import { FieldHookConfig, useField } from 'formik';
import classes from './TextArea.module.scss';
import FormControl from '../FormControl/FormControl';

interface TextAreaProps {
  label?: string;
  labelStyle?: React.CSSProperties;
  textAreaStyle?: React.CSSProperties;
  className?: string;
  placeholder?: string;
  style?: React.CSSProperties;
}

const TextArea: React.FC<
  TextareaProps & TextAreaProps & FieldHookConfig<string>
> = ({
  label,
  labelStyle,
  textAreaStyle,
  className,
  placeholder,
  style,
  ...props
}) => {
  const [field, { error, touched }] = useField(props);

  return (
    <FormControl
      style={style}
      className={className}
      error={error}
      touched={touched}
      label={label}
      labelStyle={labelStyle}
      field={field}
    >
      <Textarea
        style={textAreaStyle}
        {...field}
        id={field.name}
        resize='none'
        placeholder={placeholder}
        className={[classes.TextArea, className].join(' ')}
      />
    </FormControl>
  );
};

export default TextArea;
