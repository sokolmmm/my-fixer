/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './AccountInfo.module.scss';
import GreenButton from '../../common/Buttons/GreenButton/GreenButton';
import FormikControl from '../../common/Forms/FormikControl/FormikControl';

const initialValues = {
  userName: '',
  email: '',
};

const validationSchema = Yup.object({
  userName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

function AccountInfo() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => (
        <Form className={styles.accountInfo}>
          <FormikControl
            control="inputWithLabel"
            type="text"
            label="Username"
            name="userName"
          />

          <FormikControl
            control="inputWithLabel"
            type="email"
            label="E-mail"
            name="email"
          />

          <GreenButton textBody="Save" />
        </Form>
      )}
    </Formik>
  );
}

export default AccountInfo;
