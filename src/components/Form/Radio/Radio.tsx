import React from 'react';
import classes from './Radio.module.scss';
import { Radio as ChakraRadio } from '@chakra-ui/react';

interface RadioProps {
  children?: React.ReactNode;
  value: string | number;
}

const Radio: React.FC<RadioProps> = ({ children, value }) => {
  return (
    <ChakraRadio size='lg' className={classes.Radio} value={value}>
      {children}
    </ChakraRadio>
  );
};

export default Radio;
