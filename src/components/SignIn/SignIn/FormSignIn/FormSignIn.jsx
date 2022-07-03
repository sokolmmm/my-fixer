import {
  ErrorMessage, Form, Formik,
} from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import GreenButton from '../../../common/Buttons/GreenButton/GreenButton';
import FormikControl from '../../../common/Forms/FormikControl/FormikControl';
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
      {() => (
        <Form className={styles.signInForm}>
          <FormikControl
            control="input"
            type="email"
            name="email"
            placeholder="E-mail"
          />

          <div>
            <ErrorMessage name="email" component={TextError} />
          </div>

          <FormikControl
            control="input"
            type="password"
            name="password"
            placeholder="Password"
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
