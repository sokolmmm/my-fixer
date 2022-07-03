/* eslint-disable no-unused-vars */
import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import avatar from '../../../assets/images/avatar.png';
import searchCountries from '../../../helpers/constants/searchCountries';
import styles from './PersonalInfo.module.scss';
import GreenButton from '../../common/Buttons/GreenButton/GreenButton';
import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import searchTitle from '../../../helpers/constants/searchTitle';

const initialValues = {
  photo: '',
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

function PersonalInfo() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => (
        <Form className={styles.personalInformation}>
          <div className={styles.firstColumn}>
            <img className={styles.avatar} src={avatar} alt="avatar" />

            <FormikControl
              control="inputFile"
              label="Change photo"
              name="photo"
            />
          </div>
          <div className={styles.secondColumn}>
            <FormikControl
              control="inputWithLabel"
              type="text"
              label="First name"
              name="firstName"
            />

            <FormikControl
              control="inputWithLabel"
              type="text"
              label="Last name"
              name="lastName"
            />

            <FormikControl
              control="select"
              label="Title"
              name="title"
              options={searchTitle}
              optionValue="value"
              optionKey="id"
            />
          </div>
          <div className={styles.thirdColumn}>
            <FormikControl
              control="select"
              label="Country"
              name="country"
              options={searchCountries}
              optionValue="name"
              optionKey="code"
            />

            <FormikControl
              control="inputWithLabel"
              type="tel"
              label="Mobile Phone"
              name="mobilePhone"
            />

            <FormikControl
              control="inputWithLabel"
              type="text"
              label="Company"
              name="company"
            />

            <GreenButton textBody="Save" />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default PersonalInfo;
