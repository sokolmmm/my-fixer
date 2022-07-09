/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import DependetInput from '../Inputs/DependentInput/DependentInput';
import Input from '../Inputs/Input/Input';
import InputFile from '../Inputs/InputFile/InputFile';
import InputWithLabel from '../Inputs/InputWithLabel/InputWithLabel';
import SearchInput from '../Inputs/SearchInput/SearchInput';
import RadioButton from '../Radio/RadioButton';
import DependetSelect from '../Selects/DependentSelect/DependentSelect';
import SelectWithLabel from '../Selects/SelectWithLabel/SelectWithLabel';

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
    case 'checkbox':
      return <Checkbox {...rest} />;
    case 'dependentSelect':
      return <DependetSelect {...rest} />;
    case 'selectWithLabel':
      return <SelectWithLabel {...rest} />;
    case 'radio':
      return <RadioButton {...rest} />;
    case 'dependentInput':
      return <DependetInput {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
