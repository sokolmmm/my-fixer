/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Field } from 'formik';
import React from 'react';
import styles from './InputWithLabel.module.scss';

function InputWithLabel(props) {
  const { label, name, ...rest } = props;
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{label}</label>
      <Field type="text" id={name} name={name} {...rest} />
    </div>
  );
}

export default InputWithLabel;
