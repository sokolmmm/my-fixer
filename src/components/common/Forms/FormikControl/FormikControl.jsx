/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

import Input from '../Inputs/Input/Input';
import InputFile from '../Inputs/InputFile/InputFile';
import InputForPassword from '../Inputs/InputForPassword/InputForPassword';
import InputWithLabel from '../Inputs/InputWithLabel/InputWithLabel';
import SearchInput from '../Inputs/SearchInput/SearchInput';
import DependentInput from '../Inputs/DependentInput/DependentInput';

import SelectWithLabel from '../Selects/SelectWithLabel/SelectWithLabel';
import DependentSelect from '../Selects/DependentSelect/DependentSelect';

import Checkbox from '../Checkbox/Checkbox';
import RadioButton from '../Radio/RadioButton';

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'inputWithLabel':
      return <InputWithLabel {...rest} />;
    case 'inputFile':
      return <InputFile {...rest} />;
    case 'searchInput':
      return <SearchInput {...rest} />;
    case 'inputForPassword':
      return <InputForPassword {...rest} />;
    case 'checkbox':
      return <Checkbox {...rest} />;
    case 'dependentSelect':
      return <DependentSelect {...rest} />;
    case 'selectWithLabel':
      return <SelectWithLabel {...rest} />;
    case 'radio':
      return <RadioButton {...rest} />;
    case 'dependentInput':
      return <DependentInput {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
