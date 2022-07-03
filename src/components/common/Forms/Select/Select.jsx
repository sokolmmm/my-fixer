/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Field } from 'formik';
import React from 'react';
import styles from './Select.module.scss';

function Select(props) {
  const {
    label, name, options, optionValue, optionKey, ...rest
  } = props;

  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.selectWrapper}>
        <Field as="select" id={name} name={name} {...rest}>
          {options.map((option) => (
            <option key={option[optionKey]} value={option[optionValue]}>
              {option[optionValue]}
            </option>
          ))}
        </Field>
      </div>
    </div>
  );
}

export default Select;
