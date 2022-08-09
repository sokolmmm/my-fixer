/* eslint-disable no-unused-vars */
import React from 'react';
import * as Yup from 'yup';

import { Navigate, NavLink } from 'react-router-dom';
import { ErrorMessage, Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import GreenButton from '../../common/Buttons/GreenButton/GreenButton';
import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import TextError from '../../common/Forms/TextError/TextError';
import styles from './SignInForm.module.scss';

import { signIn } from '../../../redux/slices/userSlice';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(3).required('Required'),
});

function SignInForm() {
  const dispatch = useDispatch();

  const {
    isAuth, status, error, userData,
  } = useSelector((state) => state.user);

  if (isAuth) {
    return <Navigate to={`/profile/${userData.id}/personal-info`} />;
  }

  const onSubmit = (values, actions) => {
    dispatch(signIn(values));
    actions.setSubmitting(false);
    actions.resetForm({ values: initialValues });
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => (
        <Form className={styles.signInForm}>
          <FormikControl control="input" type="email" name="email" placeholder="E-mail" />

          <div>
            <ErrorMessage name="email" component={TextError} />
          </div>

          <FormikControl control="input" type="password" name="password" placeholder="Password" />

          <div className={styles.serverError}>
            {!formik.touched || !formik.touched.password ? (
              <p>{error}</p>
            ) : (
              <ErrorMessage
                className={styles.errorPassword}
                name="password"
                component={TextError}
              />
            )}
          </div>

          <NavLink to="password-recovery">Forgot password?</NavLink>

          <GreenButton textBody="Sign in" disabled={!formik.isValid || formik.isSubmitting} />
        </Form>
      )}
    </Formik>
  );
}

export default SignInForm;
