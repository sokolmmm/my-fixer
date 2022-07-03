/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import GreenButton from '../../../common/Buttons/GreenButton/GreenButton';
import TextError from '../../../common/Forms/TextError/TextError';
import styles from './CompleteAccountForm.module.scss';
import recaptcha from '../../../../assets/images/recaptcha.png';
import FormikControl from '../../../common/Forms/FormikControl/FormikControl';

const initialValues = {
  password: '',
  confirmPassword: '',
  termsService: '',
  privacyPolicy: '',
};

const validationSchema = Yup.object({
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string().required('Required'),
  // termsService: Yup.string().required('Required'x),
  // privacyPolicy: Yup.required('Required'),
});

function CompleteAccountForm() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => (
        <Form className={styles.completeAccountForm}>
          <FormikControl
            control="input"
            type="password"
            name="password"
            placeholder="Create a password"
          />

          <div className={styles.errorPassword}>
            <span> </span>
            <span> </span>
            <span> </span>
          </div>

          <FormikControl
            control="input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
          />

          <div>
            <ErrorMessage name="confirmPassword" component={TextError} />
          </div>
          <div className={styles.checkboxGroup}>
            <FormikControl
              control="checkbox"
              name="termsService"
              label="I agree to the myFixer.com"
            />
            <a href="s">Terms of Service</a>
          </div>

          <div className={styles.checkboxGroup}>
            <FormikControl
              control="checkbox"
              name="privacyPolicy"
              label="I agree to the myFixer.com"
            />
            <a href="s">Privacy Policy</a>
          </div>

          <figure>
            <img src={recaptcha} alt="recaptcha" />
          </figure>

          <GreenButton textBody="Get started" />
        </Form>
      )}
    </Formik>
  );
}

export default CompleteAccountForm;
