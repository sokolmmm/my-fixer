/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { Field, useFormikContext } from 'formik';
import React from 'react';
import styles from './DependentSelect.module.scss';

function DependentSelect(props) {
  const {
    name,
    options,
    optionValue,
    optionKey,
    mainField,
    mainFieldKey,
    ...rest
  } = props;

  const { values, setFieldValue } = useFormikContext();

  // React.useEffect(() => {
  //   if (!touched[additionalField] && !touched[mainField] && !touched[name]) {
  //     setFieldValue(name, dependentFieldValue);
  React.useEffect(() => {
    if (values[mainField].trim() !== '') {
      const dependentValue = options.find(
        (el) => el[mainFieldKey] === values[mainField],
      )[optionValue];
      setFieldValue(name, dependentValue);
    }
  }, [values[mainField], setFieldValue, name]);
  return (
    <div className={styles.formControl}>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option[optionKey]} value={option[optionValue]}>
            {option[optionValue]}
          </option>
        ))}
      </Field>
    </div>
  );
}

export default DependentSelect;
