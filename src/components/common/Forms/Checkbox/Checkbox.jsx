/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Field } from 'formik';
import styles from './Checkbox.module.scss';

function Checkbox(props) {
  const { name, label, ...rest } = props;
  return (
    <label htmlFor={name} className={styles.formControl}>
      <Field type="checkbox" id={name} name={name} {...rest} />
      <span>
        {label}
        {' '}
      </span>
    </label>
  );
}

export default Checkbox;
