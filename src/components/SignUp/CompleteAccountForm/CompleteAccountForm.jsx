/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import GreenButton from '../../common/Buttons/GreenButton/GreenButton';
import TextError from '../../common/Forms/TextError/TextError';
import styles from './CompleteAccountForm.module.scss';
import reCaptcha from '../../../assets/images/re_captcha.png';
import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import { signUp } from '../../../redux/slices/userSlice';

const passwordRegex = {
  red: /(?=.*[0-9)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g,
  yellow: /(?=.*[0-9)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g,
  green: /(?=.*[0-9)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g,
};

const initialValues = {
  password: '',
  confirmPassword: '',
  termsService: '',
  privacyPolicy: '',
};

const validationSchema = Yup.object({
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string().required('Required'),
  // termsService: Yup.string().required('Required'),
  // privacyPolicy: Yup.required('Required'),
});

function CompleteAccountForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error, isCompleted } = useSelector((state) => state.user);

  if (status === 'resolved') {
    return <Navigate to="/sign-up/complete-account-successful" />;
  }

  if (!isCompleted) {
    // return <Navigate to="/sign-up" />;
  }

  const onSubmit = (values, actions) => {
    dispatch(signUp(values.password));
  };
  const regexp = /^[A-Z]/g;
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => (
        <Form className={styles.completeAccountForm}>
          <FormikControl
            control="input"
            type="password"
            name="password"
            placeholder="Create a password"
          />

          <div className={styles.errorPassword}>
            <span className={passwordRegex.red.test(formik.values.password) ? styles.red : null}> </span>
            <span className={passwordRegex.yellow.test(formik.values.password) ? styles.red : null}> </span>
            <span className={passwordRegex.green.test(formik.values.password) ? styles.red : null}> </span>
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
            <NavLink to="s">Terms of Service</NavLink>
          </div>

          <div className={styles.checkboxGroup}>
            <FormikControl
              control="checkbox"
              name="privacyPolicy"
              label="I agree to the myFixer.com"
            />
            <NavLink to="s">Privacy Policy</NavLink>
          </div>

          <figure>
            <img src={reCaptcha} alt="reCaptcha" />
          </figure>

          <GreenButton textBody="Get started" />
        </Form>
      )}
    </Formik>
  );
}

export default CompleteAccountForm;
