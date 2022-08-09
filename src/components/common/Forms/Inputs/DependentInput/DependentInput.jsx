/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Field, useFormikContext } from 'formik';
import styles from './DependentInput.module.scss';

function DependetInput(props) {
  console.log(props);
  const {
    type,
    name,
    placeholder,
    initialValue,
    items,
    mainField,
    mainFieldKey,
    dependentFieldKey,
    ...rest
  } = props;

  const { values, setFieldValue, touched } = useFormikContext();

  React.useEffect(() => {
    if (values[mainField].trim() !== '' && touched[mainField]) {
      const dependetValue = items.find((el) => el[mainFieldKey] === values[mainField])[
        dependentFieldKey
      ];
      setFieldValue(name, dependetValue);
    }
  }, [values[mainField], setFieldValue, name, touched]);

  return (
    <div className={styles.formControl}>
      <Field type={type} id={name} name={name} placeholder={placeholder} {...rest} />
    </div>
  );
}

export default DependetInput;
