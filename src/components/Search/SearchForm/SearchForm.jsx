/* eslint-disable no-unused-vars */
import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './SearchForm.module.scss';
import GreenButton from '../../common/Buttons/GreenButton/GreenButton';
import searchCountries from '../../../helpers/constants/searchCountries';
import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import searchCategories from '../../../helpers/constants/searchCategories';

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

function SearchForm() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {(formik) => (
        <Form className={styles.searchForm}>
          <FormikControl
            control="select"
            label="Location"
            name="location"
            options={searchCountries}
            optionValue="name"
            optionKey="code"
          />

          <FormikControl
            control="inputWithLabel"
            type="text"
            label="Search"
            name="search"
            placeholder="Type your query..."
          />

          <FormikControl
            control="select"
            label="Category"
            name="category"
            options={searchCategories}
            optionValue="value"
            optionKey="id"
          />

          <GreenButton textBody="Search" />
        </Form>
      )}
    </Formik>
  );
}

export default SearchForm;
