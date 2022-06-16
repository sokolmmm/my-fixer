/* eslint-disable no-unused-vars */
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import GreenButton from '../../../common/button/GreenButton/GreenButton';
import TextError from '../../../common/form/TextError/TextError';
import styles from './SignUpForm.module.scss';

const initialValues = {
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  userName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

function SignUpForm() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => (
        <Form className={styles.signUpForm}>
          <div className={styles.nameGroup}>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              className={styles.firstName}
            />

            <Field
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              className={styles.lastName}
            />
          </div>
          <div className={styles.errornameGroup}>
            <div className={styles.errorFirstName}>
              <ErrorMessage name="firstName" component={TextError} />
            </div>

            <div className={styles.errorLastName}>
              <ErrorMessage name="lastName" component={TextError} />
            </div>
          </div>

          <Field
            type="text"
            id="userName"
            name="userName"
            placeholder="Username "
            className={styles.userName}
          />

          <div className={styles.errorUserName}>
            <ErrorMessage name="userName" component={TextError} />
          </div>

          <Field
            type="email"
            id="email"
            name="email"
            placeholder="E-mail "
            className={styles.email}
          />

          <div className={styles.errorEmail}>
            <ErrorMessage name="email" component={TextError} />
          </div>

          <GreenButton textBody="Get started" />
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;