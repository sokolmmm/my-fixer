import React from 'react';
import styles from './Search.module.scss';
import SearchContent from '../../components/Search/SearchContent/SearchContent';
import SearchForm from '../../components/Search/SearchForm/SearchForm';

function Search() {
  return (
    <section className={styles.searchWrapper}>
      <SearchForm />
      <SearchContent />
    </section>
  );
}

export default Search;
