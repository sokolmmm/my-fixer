/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

import { Field } from 'formik';

import styles from './InputForPassword.module.scss';
import showPassword from '../../../../../assets/images/show_password.svg';
import hidePassword from '../../../../../assets/images/hide_password.svg';

function InputForPassword(props) {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  const {
    name, placeholder, condition, ...rest
  } = props;

  return (
    <div className={styles.formControl}>
      <Field
        id={name}
        name={name}
        placeholder={placeholder}
        type={isVisible ? 'text' : 'password'}
        {...rest}
      />
      {condition ? (
        <button
          type="button"
          onClick={toggleIsVisible}
        >
          <img
            src={isVisible ? hidePassword : showPassword}
            alt="show/hide password"
          />
        </button>
      ) : null}
    </div>
  );
}

export default InputForPassword;
