import React from 'react';
import styles from './Search.module.scss';
import SearchContent from './SearchContent/SearchContent';
import SearchForm from './SearchForm/SearchForm';

function Search() {
  return (
    <section className={styles.searchWrapper}>
      <SearchForm />
      <SearchContent />
    </section>
  );
}

export default Search;
