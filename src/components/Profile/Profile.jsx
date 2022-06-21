/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import React from 'react';
import * as Yup from 'yup';
import TextError from '../common/Forms/TextError/TextError';
import styles from './Profile.module.scss';
import avatar from '../../assets/images/avatar.png';
import countriesList from '../../js/countriesList';

const initialValues = {
  firstName: '',
  lastName: '',
  title: '',
  country: '',
  mobilePhone: '',
  company: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

function Profile() {
  return (
    <section className={styles.profileWrapper}>
      <div className={styles.toggleTab}>
        <button type="button" className={styles.activeTab}>
          PERSONAL INFORMATION
        </button>
        <button type="button">ACCOUNT INFORMATION</button>
      </div>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {(formik) => (
          <Form className={styles.personalInformation}>
            <div>
              <img src={avatar} alt="avatar" />
              <Field type="file" id="file" name="file" />
            </div>
            <div>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
              />
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
              />

              <Field as="select" id="title" name="title">
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
              </Field>
            </div>
            <div>
              <Field as="select" id="country" name="country">
                {countriesList.map((el) => <option value={el.Name} key={el.Code}>{el.Name}</option>)}
              </Field>
              <Field
                type="text"
                id="mobilePhone"
                name="mobilePhone"
                placeholder="mobilePhone"
              />
              <Field
                type="text"
                id="company"
                name="company"
                placeholder="company"
              />
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default Profile;
