// import { Checkbox } from '@chakra-ui/checkbox';
import Checkbox from '../Form/Checkbox/Checkbox';
import React, { useState } from 'react';
import Button from '../Button/Button';
import FormGroup from '../Form/FormGroup/FormGroup';
import InputField from '../Form/InputField/InputField';
import Modal from '../Modal/Modal';
import * as yup from 'yup';
import { Formik } from 'formik';
import classes from './LoginModal.module.scss';
import { signIn as nextAuthSignIn } from 'next-auth/react';
import { trpc } from '@/utils/trpc';

const SIGN_IN = 'signin';
const SIGN_UP = 'signup';

interface LoginModalProps {
  tab?: typeof SIGN_IN | typeof SIGN_UP;
  open: boolean;
  close?: () => void | undefined;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, close }) => {
  const [tabSwitch, setTabSwitch] = useState<typeof SIGN_IN | typeof SIGN_UP>(
    SIGN_IN
  );
  const createUserMutation = trpc.useMutation(['auth.signup']);

  // TODO: Create login functions
  const createNewUser = ({
    email,
    password,
    firstName,
    lastName,
  }: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    createUserMutation.mutate({
      email: email,
      password: password,
      name: firstName + lastName,
      role: 'admin',
      country: 'egypt',
    });
  };

  // const loginWithGoogle = () => {

  // };

  // useEffect(() => {
  //   setTabSwitch(tab);
  // }, [tab]);

  const onSignInSwitch = () => {
    setTabSwitch(SIGN_IN);
  };

  const onSignUpSwitch = () => {
    setTabSwitch(SIGN_UP);
  };

  const signInSchema = yup.object({
    email: yup.string().email().default(''),
    password: yup.string().min(6).default(''),
    rememberMe: yup.boolean().default(false),
  });
  const signUpSchema = yup.object({
    firstName: yup.string().default('').required(),
    lastName: yup.string().default('').required(),
    email: yup.string().email().default(''),
    password: yup.string().min(6).default(''),
    terms: yup.bool().default(true).oneOf([true], 'Field must be checked'),
  });
  const signIn = (
    <>
      <Formik
        validationSchema={signInSchema}
        initialValues={signInSchema.cast({})}
        onSubmit={async (values) => {
          // body.append('email', values.email);
          // body.append('password', values.password);
          await nextAuthSignIn('credentials', {
            email: values.email,
            password: values.password,
            callbackUrl: '/dashboard',
          });
        }}
      >
        {() => (
          <FormGroup className={classes.Form}>
            <h4>Sign In</h4>
            <h5>
              New user?
              <div className={classes.ModalBtn} onClick={onSignUpSwitch}>
                Create an accout
              </div>
            </h5>

            <InputField
              placeholder='Username or email'
              type='email'
              name='email'
            />
            <InputField
              placeholder='Password'
              type='password'
              name='password'
            />
            {/* <Checkbox name='rememberMe' className={classes.Checked}>
              Keep me signed in
            </Checkbox> */}
            <Button className={classes.Btn} type='submit'>
              Sign In
            </Button>
            {/* <h5 className={classes.Divider}>Or Sign In With</h5>
            <div className={classes.Icons}>
              <i className='fab fa-facebook-f'></i>
               <i className='fab fa-google' onClick={loginWithGoogle}></i> 
            </div> */}
          </FormGroup>
        )}
      </Formik>
    </>
  );

  const signUp = (
    <>
      <Formik
        // validationSchema={signUpSchema}
        initialValues={signUpSchema.cast({})}
        onSubmit={(values) => {
          // dispatch(signUpUser(values))
          createNewUser(values);
        }}
      >
        {() => (
          <FormGroup>
            <h4>Create An Accout</h4>
            <h5>
              Already an user?
              <div className={classes.ModalBtn} onClick={onSignInSwitch}>
                Sign In
              </div>{' '}
            </h5>
            <div className={classes.TwoInput}>
              <InputField
                placeholder='First Name'
                type='text'
                name='firstName'
              />
              <InputField placeholder='Last Name' type='text' name='lastName' />
            </div>
            <InputField placeholder='Email' type='email' name='email' />
            <InputField
              placeholder='Password'
              type='password'
              name='password'
            />
            <Checkbox name='terms' checked className={classes.Checked}>
              I accept the Terms and conditions
            </Checkbox>
            <Button type='submit' className={classes.Btn}>
              Sign Up
            </Button>
            {/* <h5 className={classes.Divider}>Or Sign In With</h5>
            <div className={classes.Icons}>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-google' onClick={onSignInSwitch}></i>
            </div> */}
          </FormGroup>
        )}
      </Formik>
    </>
  );

  return (
    <Modal isOpen={open} onClose={() => console.log('closed')}>
      <div className={classes.Container}>
        {tabSwitch === SIGN_IN && signIn}
        {tabSwitch === SIGN_UP && signUp}
      </div>
    </Modal>
  );
};

export default LoginModal;
