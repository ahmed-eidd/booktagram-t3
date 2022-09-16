import React from 'react';
import { Form } from 'formik';
import classes from './FormGroup.module.scss';

interface FormGroupProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  formClassName?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({
  children,
  title,
  className,
  formClassName,
}) => {
  return (
    <>
      {title ? (
        <div className={[classes.container, className].join(' ')}>
          <h1 className={classes.title}>{title}</h1>

          <Form style={{ width: '100%' }} className={formClassName} noValidate>
            {children}
          </Form>
        </div>
      ) : (
        <Form style={{ width: '100%' }} className={formClassName} noValidate>
          {children}
        </Form>
      )}
    </>
  );
};

export default FormGroup;
