/* eslint-disable no-unused-vars */
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import React from 'react';
import * as Yup from 'yup';
import GreenButton from '../../../common/button/GreenButton/GreenButton';
import TextError from '../../../common/Forms/TextError/TextError';
import styles from './PassResetForm.module.scss';

const initialValues = {
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Паролі не співпадають')
    .required('Required'),
});

function PassResetForm() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => (
        <Form className={styles.passResetForm}>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="New password"
            className={styles.password}
          />

          <div className={styles.errorPassword}>
            <ErrorMessage name="password" component={TextError} />
          </div>

          <Field
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            className={styles.confirmPassword}
          />

          <div className={styles.errorConfirmPassword}>
            <ErrorMessage name="confirmPassword" component={TextError} />
          </div>

          <GreenButton textBody="Reset" />
        </Form>
      )}
    </Formik>
  );
}

export default PassResetForm;
