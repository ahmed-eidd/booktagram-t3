import React from 'react';
import classes from './RadioGroup.module.scss';
import { RadioGroup as ChakraRadioGroup } from '@chakra-ui/react';

interface RadioGroupProps {
  value: string | number;
  children?: React.ReactNode;
  title: string;
  onChange: () => void;
}

const RadioGroup:React.FC<RadioGroupProps> = ({ value, children, title, onChange, ...props }) => {
  return (
    <ChakraRadioGroup
      className={classes.RadioGroup}
      value={value}
      onChange={onChange}
    >
      {title && <h3 className={classes.RadioGroup__Title}>{title}</h3>}
      {children}
    </ChakraRadioGroup>
  );
};

export default RadioGroup;
