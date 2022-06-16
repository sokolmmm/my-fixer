/* eslint-disable no-unused-vars */
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import React from 'react';
import * as Yup from 'yup';
import GreenButton from '../../../common/button/GreenButton/GreenButton';
import TextError from '../../../common/form/TextError/TextError';
import styles from './PassRecoveryForm.module.scss';

const initialValues = {
  email: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

function PassRecoveryForm() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => (
        <Form className={styles.passRecoveryForm}>
          <Field
            type="text"
            id="email"
            name="email"
            placeholder="E-mail"
            className={styles.email}
          />

          <ErrorMessage name="email" component={TextError} />

          <GreenButton textBody="Send" />
        </Form>
      )}
    </Formik>
  );
}

export default PassRecoveryForm;
