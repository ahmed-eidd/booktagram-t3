import { Checkbox as CharkaCheckbox } from '@chakra-ui/checkbox';
import { Text } from '@chakra-ui/layout';
import { Field, FieldProps } from 'formik';
import React from 'react';

interface CheckboxProps {
  name: string;
  children?: React.ReactNode;
  checked?: boolean;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  children,
  checked,
  className,
}) => {
  return (
    <Field name={name}>
      {({ form }: FieldProps) => (
        <CharkaCheckbox
          defaultChecked={checked}
          iconColor='#21545F'
          colorScheme='white'
          style={{
            borderColor: '#21545F',
          }}
          id={name}
          name={name}
          onChange={(e) => {
            form.setFieldValue(name, e.target.checked);
          }}
          className={className}
        >
          <Text fontSize='sm' textAlign='left'>
            {children}
          </Text>
        </CharkaCheckbox>
      )}
    </Field>
  );
};

export default Checkbox;
