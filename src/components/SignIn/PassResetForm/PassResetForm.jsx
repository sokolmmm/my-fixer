import {
  ErrorMessage, Form, Formik,
} from 'formik';
import React from 'react';
import * as Yup from 'yup';
import GreenButton from '../../common/Buttons/GreenButton/GreenButton';
import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import TextError from '../../common/Forms/TextError/TextError';
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
      {() => (
        <Form className={styles.passResetForm}>
          <FormikControl
            control="input"
            type="password"
            name="password"
            placeholder="New password"
          />

          <div className={styles.errorPassword}>
            <ErrorMessage name="password" component={TextError} />
          </div>

          <FormikControl
            control="input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
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
