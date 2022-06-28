/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import InputWithLabel from './InputWithLabel/InputWithLabel';

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'inputWithLabel':
      return <InputWithLabel {...rest} />;
    case 'textarea':
      break;
    case 'select':
      break;
    case 'radio':
      break;
    default:
      return null;
  }
}

export default FormikControl;
