/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import InputFile from '../InputFile/InputFile';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import RadioButton from '../Radio/RadioButton';
import Select from '../Select/Select';

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'inputWithLabel':
      return <InputWithLabel {...rest} />;
    case 'inputFile':
      return <InputFile {...rest} />;
    case 'checkbox':
      return <Checkbox {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <RadioButton {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
