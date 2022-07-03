/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Field } from 'formik';
import React from 'react';
import styles from './RadioButton.module.scss';

function RadioButton(props) {
  const {
    label, name, id, value, ...rest
  } = props;
  return (
    <label htmlFor={id} className={styles.formControl}>
      <Field
        type="radio"
        name={name}
        value={value}
        {...rest}
      />
      <span>{label}</span>
    </label>
  );
}

export default RadioButton;
