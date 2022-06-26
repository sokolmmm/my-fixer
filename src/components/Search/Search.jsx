import React from 'react';
import styles from './Search.module.scss';
import SearchForm from './SearchForm/SearchForm';
import SearchResults from './SearchResults/SearchResults';

function Search() {
  return (
    <section className={styles.searchWrapper}>
      <SearchForm />
      <SearchResults />
    </section>
  );
}

export default Search;
