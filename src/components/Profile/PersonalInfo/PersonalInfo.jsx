/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import avatar from '../../../assets/images/avatar.png';
import countriesList from '../../../js/countriesList';
import pencilImg from '../../../assets/images/pencil.svg';
import styles from './PersonalInfo.module.scss';
import GreenButton from '../../common/Buttons/GreenButton/GreenButton';

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
          <div className={styles.photoBlock}>
            <img src={avatar} alt="avatar" />
            <div className={styles.photoBlockControl}>
              <label htmlFor="photo">
                <img src={pencilImg} alt="pencil" />
                <span>Change photo</span>
                <Field type="file" id="photo" name="photo" />
              </label>
            </div>
          </div>
          <div className={styles.secondColumn}>
            <div className={styles.formControl}>
              <label htmlFor="firstName">First name</label>
              <Field type="text" id="firstName" name="firstName" />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="lastName">Last name</label>
              <Field type="text" id="lastName" name="lastName" />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="title">Title</label>
              <div className={styles.selectWrapper}>
                <Field as="select" id="title" name="title">
                  <option value="mr">Mr</option>
                  <option value="mrs">Mrs</option>
                </Field>
              </div>
            </div>
          </div>
          <div className={styles.thirdColumn}>
            <div className={styles.formControl}>
              <label htmlFor="country">Country</label>
              <div className={styles.selectWrapper}>
                <Field as="select" id="country" name="country">
                  {countriesList.map((el) => (
                    <option value={el.Name} key={el.Code}>
                      {el.Name}
                    </option>
                  ))}
                </Field>
              </div>
            </div>
            <div className={styles.formControl}>
              <label htmlFor="mobilePhone">MobilePhone</label>
              <Field
                type="tel"
                id="mobilePhone"
                name="mobilePhone"
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="company">Company</label>
              <Field
                type="text"
                id="company"
                name="company"
              />
            </div>
            <GreenButton textBody="Save" />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default PersonalInfo;
