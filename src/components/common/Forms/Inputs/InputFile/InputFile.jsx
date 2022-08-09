/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Field } from 'formik';
import React from 'react';
import styles from './InputFile.module.scss';
import pencilImg from '../../../../../assets/images/pencil.svg';

function InputFile(props) {
  const {
    label, type, name, setFieldValue, ...rest
  } = props;
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>
        <img src={pencilImg} alt="pencil" />
        <span>{label}</span>
        <input
          type="file"
          id={name}
          name={name}
          onChange={(event) => {
            setFieldValue(name, event.currentTarget.files[0]);
          }}
          {...rest}
        />
      </label>
    </div>
  );
}

export default InputFile;
