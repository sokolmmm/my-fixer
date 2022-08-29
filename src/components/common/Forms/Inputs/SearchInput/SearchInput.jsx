/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Field } from 'formik';
import styles from './SearchInput.module.scss';
import searchIcon from '../../../../../assets/images/searchIcon.svg';

function SearchInput(props) {
  const {
    name, placeholder, ...rest
  } = props;

  return (
    <div className={styles.formControl}>
      <img src={searchIcon} alt="search_icon" />
      <Field type="text" id={name} name={name} placeholder={placeholder} {...rest} />
    </div>
  );
}

export default SearchInput;
