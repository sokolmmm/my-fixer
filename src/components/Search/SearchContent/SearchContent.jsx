/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import { Form, Formik } from 'formik';
import React from 'react';
import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import styles from './SearchContent.module.scss';
import UserCard from './UserCard/UserCard';

const items = [
  {
    id: 1,
    name: 'Oleg Stahnuk',
    location: 'Vancouver, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 1200,
    rating: 'gold',
  },
  {
    id: 2,
    name: 'Andrej Prokopenko',
    location: 'Toronto, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 1100,
    rating: 'silver',
  },
  {
    id: 3,
    name: 'Ivan Koshutar',
    location: 'Toronto, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 1400,
    rating: 'silver',
  },
  {
    id: 4,
    name: 'Oleg Chaban',
    location: 'Toronto, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 1500,
    rating: 'gold',
  },
  {
    id: 5,
    name: 'Stas Pulipchuk',
    location: 'Toronto, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 900,
    rating: 'silver',
  },
  {
    id: 6,
    name: 'Bogdan Marchuk',
    location: 'Toronto, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 900,
    rating: 'gold',
  },
  {
    id: 7,
    name: 'Petro Orchuk',
    location: 'Toronto, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 700,
    rating: 'silver',
  },
  {
    id: 8,
    name: 'Orest Thompson',
    location: 'Toronto, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 1350,
    rating: 'gold',
  },
  {
    id: 9,
    name: 'Yura Chmut',
    location: 'Toronto, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 1350,
    rating: '',
  },
];
const initialValues = {
  sort: 'price',
};

function SearchContent() {
  const [sortValue, setSortValue] = React.useState('');

  const onChangeRadio = (value) => {
    setSortValue(value);
  };

  React.useEffect(() => {
    // axios.get('backend/${sortValue}')
  }, [sortValue]);

  return (
    <article className={styles.searchContent}>
      <Formik initialValues={initialValues}>
        {(formik) => (
          <Form className={styles.filterForm}>
            <FormikControl
              control="radio"
              label="by price"
              name="sort"
              value="price"
              onClick={() => onChangeRadio('price')}
            />
            <FormikControl
              control="radio"
              label="by rating"
              name="sort"
              value="rating"
              onClick={() => onChangeRadio('rating')}
            />
          </Form>
        )}
      </Formik>

      {items.map((item) => (
        <UserCard
          key={item.id}
          name={item.name}
          location={item.location}
          stack={item.stack}
          dailyRate={item.dailyRate}
          rating={item.rating}
        />
      ))}
    </article>
  );
}

export default SearchContent;
