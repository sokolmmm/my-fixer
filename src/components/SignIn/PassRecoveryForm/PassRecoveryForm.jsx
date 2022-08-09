import {
  ErrorMessage, Form, Formik,
} from 'formik';
import React from 'react';
import * as Yup from 'yup';
import GreenButton from '../../common/Buttons/GreenButton/GreenButton';
import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import TextError from '../../common/Forms/TextError/TextError';
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
      {() => (
        <Form className={styles.passRecoveryForm}>
          <FormikControl
            control="input"
            type="email"
            name="email"
            placeholder="E-mail"
          />

          <div>
            <ErrorMessage name="email" component={TextError} />
          </div>

          <GreenButton textBody="Send" />
        </Form>
      )}
    </Formik>
  );
}

export default PassRecoveryForm;
