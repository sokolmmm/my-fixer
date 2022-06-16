/* eslint-disable no-unused-vars */
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import GreenButton from '../../../common/button/GreenButton/GreenButton';
import TextError from '../../../common/form/TextError/TextError';
import styles from './FormSignIn.module.scss';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

function FormSignIn() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => (
        <Form className={styles.signInForm}>
          <Field
            type="text"
            id="email"
            name="email"
            placeholder="email"
            className={styles.email}
          />
          <ErrorMessage name="email" component={TextError} />
          <Field
            type="text"
            id="password"
            name="password"
            placeholder="password"
            className={styles.password}
          />
          <ErrorMessage name="password" component={TextError} />
          <NavLink to="password-recovery">Forgot password?</NavLink>
          <GreenButton textBody="Sign in" />
        </Form>
      )}
    </Formik>
  );
}

export default FormSignIn;
