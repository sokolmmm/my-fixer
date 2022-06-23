/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './AccountInfo.module.scss';
import GreenButton from '../../common/button/GreenButton/GreenButton';

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
          <div className={styles.firstColumn}>
            <div className={styles.formControl}>
              <label htmlFor="userName">USERNAME</label>
              <Field type="text" id="userName" name="userName" />
            </div>
          </div>
          <div className={styles.secondColumn}>
            <div className={styles.formControl}>
              <label htmlFor="email">E-MAIL</label>
              <Field type="email" id="email" name="email" />
            </div>
            <GreenButton textBody="Save" />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AccountInfo;
