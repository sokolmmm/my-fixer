/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Field } from 'formik';
import styles from './InputWithLabel.module.scss';

function InputWithLabel(props) {
  const {
    label, type, name, placeholder, ...rest
  } = props;

  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{label}</label>
      <Field type={type} id={name} name={name} placeholder={placeholder} {...rest} />
    </div>
  );
}

export default InputWithLabel;
