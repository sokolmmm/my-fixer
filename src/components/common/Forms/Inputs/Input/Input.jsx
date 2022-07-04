/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Field } from 'formik';
import styles from './Input.module.scss';

function Input(props) {
  const {
    type, name, placeholder, ...rest
  } = props;

  return (
    <div className={styles.formControl}>
      <Field type={type} id={name} name={name} placeholder={placeholder} {...rest} />
    </div>
  );
}

export default Input;
