/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Field } from 'formik';
import React from 'react';
import styles from './InputFile.module.scss';
import pencilImg from '../../../../assets/images/pencil.svg';

function InputFile(props) {
  const {
    label, type, name, ...rest
  } = props;
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>
        <img src={pencilImg} alt="pencil" />
        <span>{label}</span>
        <Field type="file" id={name} name={name} {...rest} />
      </label>
    </div>
  );
}

export default InputFile;
