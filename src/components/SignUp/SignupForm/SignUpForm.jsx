/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from 'react';
import * as Yup from 'yup';

import { ErrorMessage, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import GreenButton from '../../common/Buttons/GreenButton/GreenButton';
import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import TextError from '../../common/Forms/TextError/TextError';
import styles from './SignUpForm.module.scss';

import { setIsCompleted, setUserData } from '../../../redux/slices/userSlice';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string().min(3).max(15).required('Required'),
  lastName: Yup.string().min(3).max(15).required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => state.user.error);

  const onSubmit = (values) => {
    dispatch(setUserData(values));
    dispatch(setIsCompleted());
    navigate('/sign-up/complete-account');
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => (
        <Form className={styles.signUpForm}>
          <div className={styles.nameGroup}>
            <FormikControl control="input" type="text" name="firstName" placeholder="First name" />

            <FormikControl control="input" type="text" name="lastName" placeholder="Last name" />
          </div>
          <div className={styles.errorNameGroup}>
            <div>
              <ErrorMessage name="firstName" component={TextError} />
            </div>

            <div>
              <ErrorMessage name="lastName" component={TextError} />
            </div>
          </div>

          <FormikControl control="input" type="email" name="email" placeholder="E-mail" />

          <div>
            <ErrorMessage name="email" component={TextError} />
          </div>

          <GreenButton textBody="Get started" />
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;
