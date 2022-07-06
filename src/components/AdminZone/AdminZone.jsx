import { Form, Formik } from 'formik';
import React from 'react';
import FormikControl from '../common/Forms/FormikControl/FormikControl';
import styles from './AdminZone.module.scss';

const initialValues = {
  search: '',
};

function AdminZone() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Formik initialValues={initialValues}>
          {() => (
            <Form className={styles.searchForm}>
              <FormikControl
                control="input"
                type="text"
                name="search"
                placeholder="Type here to search..."
              />
            </Form>
          )}
        </Formik>
        <div className={styles.table}>
          <ul className={styles.header}>
            <li>First Name</li>
            <li>Last Name</li>
            <li>Country</li>
            <li>Status</li>
            <li>Level</li>
            <li>E-mail</li>
          </ul>
          <div className={styles.items}>
            <ul className={styles.item}>
              <li>Richard </li>
              <li>Tiffany</li>
              <li>Australia</li>
              <li>Expected</li>
              <li>Gold</li>
              <li>rfrome@gmail.com</li>
            </ul>

            <ul className={styles.item}>
              <li>Richard </li>
              <li>Tiffany</li>
              <li>Australia</li>
              <li>Expected</li>
              <li>Gold</li>
              <li>rfrome@gmail.com</li>
            </ul>

            <ul className={styles.item}>
              <li>Richard </li>
              <li>Tiffany</li>
              <li>Australia</li>
              <li>Expected</li>
              <li>Gold</li>
              <li>rfrome@gmail.com</li>
            </ul>

            <ul className={styles.item}>
              <li>Richard </li>
              <li>Tiffany</li>
              <li>Australia</li>
              <li>Expected</li>
              <li>Gold</li>
              <li>rfrome@gmail.com</li>
            </ul>

            <ul className={styles.item}>
              <li>Richard </li>
              <li>Tiffany</li>
              <li>Australia</li>
              <li>Expected</li>
              <li>Gold</li>
              <li>rfrome@gmail.com</li>
            </ul>

            <ul className={styles.item}>
              <li>Richard </li>
              <li>Tiffany</li>
              <li>Australia</li>
              <li>Expected</li>
              <li>Gold</li>
              <li>rfrome@gmail.com</li>
            </ul>

            <ul className={styles.item}>
              <li>Richard </li>
              <li>Tiffany</li>
              <li>Australia</li>
              <li>Expected</li>
              <li>Gold</li>
              <li>rfrome@gmail.com</li>
            </ul>

            <ul className={styles.item}>
              <li>Richard </li>
              <li>Tiffany</li>
              <li>Australia</li>
              <li>Expected</li>
              <li>Gold</li>
              <li>rfrome@gmail.com</li>
            </ul>

            <ul className={styles.item}>
              <li>Richard </li>
              <li>Tiffany</li>
              <li>Australia</li>
              <li>Expected</li>
              <li>Gold</li>
              <li>rfrome@gmail.com</li>
            </ul>

            <ul className={styles.item}>
              <li>Richard </li>
              <li>Tiffany</li>
              <li>Australia</li>
              <li>Expected</li>
              <li>Gold</li>
              <li>rfrome@gmail.com</li>
            </ul>

            <ul className={styles.item}>
              <li>Richard </li>
              <li>Tiffany</li>
              <li>Australia</li>
              <li>Expected</li>
              <li>Gold</li>
              <li>rfrome@gmail.com</li>
            </ul>

            <ul className={styles.item}>
              <li>Richard </li>
              <li>Tiffany</li>
              <li>Australia</li>
              <li>Expected</li>
              <li>Gold</li>
              <li>rfrome@gmail.com</li>
            </ul>

            <ul className={styles.item}>
              <li>Richard </li>
              <li>Tiffany</li>
              <li>Australia</li>
              <li>Expected</li>
              <li>Gold</li>
              <li>rfrome@gmail.com</li>
            </ul>

            <ul className={styles.item}>
              <li>Richard </li>
              <li>Tiffany</li>
              <li>Australia</li>
              <li>Expected</li>
              <li>Gold</li>
              <li>rfrome@gmail.com</li>
            </ul>
          </div>

        </div>
      </div>

    </section>
  );
}

export default AdminZone;
