// import { Checkbox } from '@chakra-ui/checkbox';
import Checkbox from '../Form/Checkbox/Checkbox';
import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import FormGroup from '../Form/FormGroup/FormGroup';
import InputField from '../Form/InputField/InputField';
import Modal from '../Modal/Modal';
import * as yup from 'yup';
import { Formik } from 'formik';
// import { loginUser, signUpUser } from '../../store/auth/slice';
// import { useDispatch, useSelector } from 'react-redux';
import classes from './LoginModal.module.scss';
// import { useFirebase } from 'react-redux-firebase';
import { useToast } from '@chakra-ui/react';
// import { loginUserAction } from '../../store/auth/action';
// import { setAuthModalClose, setAuthModalOpen } from '../../store/auth/action';

const SIGN_IN = 'signin';
const SIGN_UP = 'signup';

const LoginModal = ({ tab, open, close }) => {
  // const LoginModal = () => {
  const [tabSwitch, setTabSwitch] = useState('');
  // const dispatch = useDispatch();
  const toast = useToast();
  // const firebase = useFirebase();
  // const loading = useSelector((state) => state.auth.loading);
  // const tab = useSelector((state) => state.auth.modal);
  // const close = () => {
  //   dispatch(setAuthModalClose())
  // }

  const createNewUser = ({ email, password, firstName, lastName }) => {
    // firebase
    //   .createUser({ email, password }, { email, firstName, lastName })
    //   .then(() => {
    //     toast({
    //       position: 'top-right',
    //       status: 'success',
    //       title: 'Sign up Success',
    //       isClosable: true,
    //     });
    //   })
    //   .catch((err) => {
    //     toast({
    //       position: 'top-right',
    //       status: 'error',
    //       title: err.message,
    //       isClosable: true,
    //     });
    // });
  };

  const loginWithGoogle = () => {
    // return firebase.login({ provider: 'google', type: 'popup' });
  };

  useEffect(() => {
    setTabSwitch(tab);
  }, [tab]);

  const onSignInSwitch = () => {
    // dispatch(setAuthModalOpen(SIGN_IN));
    console.log(tab);
  };

  const onSignUpSwitch = () => {
    // setTabSwitch(SIGN_UP);
    // dispatch(setAuthModalOpen(SIGN_UP))
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
        initialValues={signInSchema.cast()}
        onSubmit={(values) => {
          dispatch(loginUserAction(values));
          console.log('submit');
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
            <Checkbox name='rememberMe' className={classes.Checked}>
              Keep me signed in
            </Checkbox>
            <Button className={classes.Btn} type='submit'>
              Sign In
            </Button>
            <h5 className={classes.Divider}>Or Sign In With</h5>
            <div className={classes.Icons}>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-google' onClick={loginWithGoogle}></i>
            </div>
          </FormGroup>
        )}
      </Formik>
    </>
  );

  const signUp = (
    <>
      <Formik
        // validationSchema={signUpSchema}
        initialValues={signUpSchema.cast()}
        onSubmit={(values) => {
          // dispatch(signUpUser(values))
          createNewUser({
            email: values.email,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
          });
          console.log('new user ');
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
            <h5 className={classes.Divider}>Or Sign In With</h5>
            <div className={classes.Icons}>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-google' onClick={onSignInSwitch}></i>
            </div>
          </FormGroup>
        )}
      </Formik>
    </>
  );

  return (
    <Modal
      isOpen={tab}
      onClose={close}
      //  loading={loading}
    >
      <div className={classes.Container}>
        {tabSwitch === SIGN_IN && signIn}
        {tabSwitch === SIGN_UP && signUp}
      </div>
    </Modal>
  );
};

export default LoginModal;
