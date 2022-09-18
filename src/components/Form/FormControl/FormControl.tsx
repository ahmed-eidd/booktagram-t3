import React from 'react';
import {
  FormControl as CFormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FieldConfig } from 'formik';

interface FormControlProps {
  className?: string;
  error?: string;
  touched?: boolean;
  style?: React.CSSProperties;
  label?: string;
  labelStyle?: React.CSSProperties;
  children?: React.ReactNode;
  field?: FieldConfig<string>;
}

const FormControl: React.FC<FormControlProps> = ({
  className,
  error,
  touched,
  style,
  label,
  labelStyle,
  children,
  field,
}) => {
  return (
    <CFormControl
      style={{
        position: 'relative',
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
        ...style,
      }}
      my={7}
      // isInvalid={error && touched}
      className={className}
    >
      {label && (
        <FormLabel style={labelStyle} htmlFor={field?.name}>
          {label}
        </FormLabel>
      )}
      {children}
      {error && touched && (
        <FormErrorMessage
          style={{ position: 'absolute', bottom: '-25px', left: '10px' }}
        >
          {error}
        </FormErrorMessage>
      )}
    </CFormControl>
  );
};

export default FormControl;
