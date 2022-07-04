/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Field, useFormikContext } from 'formik';
import styles from './DependentInput.module.scss';

function DependetInput(props) {
  const {
    type,
    name,
    placeholder,
    items,
    mainField,
    mainFieldKey,
    dependentFieldKey,
    ...rest
  } = props;

  const { values, setFieldValue, touched } = useFormikContext();

  React.useEffect(() => {
    if (values[mainField].trim() !== '') {
      const dependetValue = items.find(
        (el) => el[mainFieldKey] === values[mainField],
      )[dependentFieldKey];
      setFieldValue(name, dependetValue);
    }
  }, [values[mainField], setFieldValue, name]);

  return (
    <div className={styles.formControl}>
      <Field
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}

export default DependetInput;
