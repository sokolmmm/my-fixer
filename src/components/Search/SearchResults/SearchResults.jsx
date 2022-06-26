/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './SearchResults.module.scss';
import ResultsCard from './ResultsCard/ResultsCard';

const items = [
  {
    id: 1,
    name: 'Oleg Stahnuk',
    location: 'Vancouver, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 1200,
    rating: 2,
  },
  {
    id: 2,
    name: 'Andrej Prokopenko',
    location: 'Toronto, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 1100,
    rating: 2,
  },
  {
    id: 3,
    name: 'Ivan Koshutar',
    location: 'Toronto, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 1400,
    rating: 1,
  },
  {
    id: 4,
    name: 'Oleg Chaban',
    location: 'Toronto, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 1500,
    rating: 2,
  },
  {
    id: 5,
    name: 'Stas Pulipchuk',
    location: 'Toronto, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 900,
    rating: 1,
  },
  {
    id: 6,
    name: 'Bogdan Marchuk',
    location: 'Toronto, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 900,
    rating: 0,
  },
  {
    id: 7,
    name: 'Petro Orchuk',
    location: 'Toronto, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 700,
    rating: 1,
  },
  {
    id: 8,
    name: 'Orest Thompson',
    location: 'Toronto, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 1350,
    rating: 2,
  },
  {
    id: 9,
    name: 'Yura Chmut',
    location: 'Toronto, Canada',
    stack: 'Stack: Python, Django',
    dailyRate: 1350,
    rating: 0,
  },
];

function SearchResults() {
  const [radioValue, setRadioValue] = React.useState('price');

  const onChangeRadio = (event) => {
    setRadioValue(event.target.value);
  };

  const sortByPrice = [...items].sort((a, b) => (a.dailyRate < b.dailyRate ? 1 : -1));
  const sortByRating = [...items].sort((a, b) => (a.rating < b.rating ? 1 : -1));

  return (
    <article className={styles.searchResults}>
      <div className={styles.filter}>
        <label htmlFor="byPrice">
          <input
            type="radio"
            id="byPrice"
            name="sort"
            value="price"
            onChange={onChangeRadio}
            checked={radioValue === 'price'}
          />
          <span>by price</span>
        </label>

        <label htmlFor="byRating">
          <input
            type="radio"
            id="byRating"
            name="sort"
            value="rating"
            checked={radioValue === 'rating'}
            onChange={onChangeRadio}
          />
          <span>by rating</span>
        </label>
      </div>
      {(radioValue === 'price' ? sortByPrice : sortByRating).map((el) => (
        <ResultsCard
          key={el.id}
          name={el.name}
          location={el.location}
          stack={el.stack}
          dailyRate={el.dailyRate}
          rating={el.rating}
        />
      ))}
    </article>
  );
}

export default SearchResults;
