/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

import Base64 from '../../../../../helpers/base64';
import styles from './InputFile.module.scss';
import pencilImg from '../../../../../assets/images/pencil.svg';

function InputFile(props) {
  const {
    label, type, name, setFieldValue, setBase64Photo, ...rest
  } = props;

  const funk = async (event) => {
    setFieldValue(name, event.currentTarget.files[0]);
    const base64 = await Base64.readFile(event.currentTarget.files[0]);
    setBase64Photo(base64);
  };

  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>
        <img src={pencilImg} alt="pencil" />
        <span>{label}</span>
        <input
          id={name}
          name={name}
          type="file"
          accept="image/*"
          onChange={(event) => funk(event)}
          {...rest}
        />
      </label>
    </div>
  );
}

export default InputFile;
