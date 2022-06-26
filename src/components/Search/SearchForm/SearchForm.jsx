/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './SearchForm.module.scss';
import GreenButton from '../../common/Buttons/GreenButton/GreenButton';
import countriesList from '../../../js/countriesList';

const initialValues = {
  location: '',
  search: '',
  category: '',
  service: '',
  period: '',
};

const validationSchema = Yup.object({
  userName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

const category = ['ReactJS', 'NodeJS', 'Django'];
const service = ['one', 'two', 'three'];

function SearchForm() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => (
        <Form className={styles.searchForm}>
          <div className={styles.formControl}>
            <label htmlFor="location">Location</label>
            <div className={styles.selectWrapper}>
              <Field as="select" id="location" name="location">
                {countriesList.map((el) => (
                  <option value={el.Name} key={el.Code}>
                    {el.Name}
                  </option>
                ))}
              </Field>
            </div>
          </div>

          <div className={styles.formControl}>
            <label htmlFor="search">Search</label>
            <Field
              type="text"
              id="search"
              name="search"
              placeholder="Type your query..."
            />
          </div>

          <div className={styles.formControl}>
            <label htmlFor="category">Category</label>
            <div className={styles.selectWrapper}>
              <Field as="select" id="category" name="category">
                {category.map((el) => (
                  <option value={el} key={el}>
                    {el}
                  </option>
                ))}
              </Field>
            </div>
          </div>

          <div className={styles.formControl}>
            <label htmlFor="service">Service</label>
            <div className={styles.selectWrapper}>
              <Field as="select" id="service" name="service">
                {service.map((el) => (
                  <option value={el} key={el}>
                    {el}
                  </option>
                ))}
              </Field>
            </div>
          </div>

          <GreenButton textBody="Search" />
        </Form>
      )}
    </Formik>
  );
}

export default SearchForm;
