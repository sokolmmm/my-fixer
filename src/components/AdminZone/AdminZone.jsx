/* eslint-disable react/jsx-props-no-spreading */
import { Form, Formik } from 'formik';
import React from 'react';
import FormikControl from '../common/Forms/FormikControl/FormikControl';
import styles from './AdminZone.module.scss';
import TableHeader from './TableHeader/TableHeader';
import UserItem from './UserItem/UserItem';

const users = [
  {
    id: 1,
    firstName: 'Misha',
    lastName: 'Sokol',
    location: 'Ukraine',
    status: 'Expected',
    rating: 'gold',
    email: 'sokol.m.m@gmail.com',
  },
  {
    id: 2,
    firstName: 'Misha',
    lastName: 'Sokol',
    location: 'Ukraine',
    status: 'Expected',
    rating: 'gold',
    email: 'sokol.m.m@gmail.com',
  },
  {
    id: 3,
    firstName: 'Misha',
    lastName: 'Sokol',
    location: 'Ukraine',
    status: 'Expected',
    rating: 'gold',
    email: 'sokol.m.m@gmail.com',
  },
  {
    id: 4,
    firstName: 'Misha',
    lastName: 'Sokol',
    location: 'Ukraine',
    status: 'Expected',
    rating: 'gold',
    email: 'sokol.m.m@gmail.com',
  },
  {
    id: 5,
    firstName: 'Misha',
    lastName: 'Sokol',
    location: 'Ukraine',
    status: 'Expected',
    rating: 'gold',
    email: 'sokol.m.m@gmail.com',
  },
  {
    id: 6,
    firstName: 'Misha',
    lastName: 'Sokol',
    location: 'Ukraine',
    status: 'Expected',
    rating: 'gold',
    email: 'sokol.m.m@gmail.com',
  },
  {
    id: 7,
    firstName: 'Misha',
    lastName: 'Sokol',
    location: 'Ukraine',
    status: 'Expected',
    rating: 'gold',
    email: 'sokol.m.m@gmail.com',
  },
  {
    id: 8,
    firstName: 'Misha',
    lastName: 'Sokol',
    location: 'Ukraine',
    status: 'Expected',
    rating: 'gold',
    email: 'sokol.m.m@gmail.com',
  },
  {
    id: 9,
    firstName: 'Misha',
    lastName: 'Sokol',
    location: 'Ukraine',
    status: 'Expected',
    rating: 'gold',
    email: 'sokol.m.m@gmail.com',
  },
  {
    id: 10,
    firstName: 'Misha',
    lastName: 'Sokol',
    location: 'Ukraine',
    status: 'Expected',
    rating: 'gold',
    email: 'sokol.m.m@gmail.com',
  },
];

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
                control="searchInput"
                name="search"
                placeholder="Type here to search..."
              />
            </Form>
          )}
        </Formik>
        <div className={styles.table}>
          <TableHeader />
          <div className={styles.items}>
            {users.map((el) => (
              <UserItem
                key={el.id}
                firstName={el.firstName}
                lastName={el.lastName}
                location={el.location}
                status={el.status}
                rating={el.rating}
                email={el.email}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminZone;
