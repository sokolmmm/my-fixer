/* eslint-disable no-unused-vars */
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import GreenButton from '../../../common/Buttons/GreenButton/GreenButton';
import TextError from '../../../common/Forms/TextError/TextError';
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
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            className={styles.email}
          />

          <div>
            <ErrorMessage name="email" component={TextError} />
          </div>

          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className={styles.password}
          />

          <div>
            <ErrorMessage className={styles.errorPassword} name="password" component={TextError} />
          </div>

          <NavLink to="password-recovery">Forgot password?</NavLink>

          <GreenButton textBody="Sign in" />
        </Form>
      )}
    </Formik>
  );
}

export default FormSignIn;
