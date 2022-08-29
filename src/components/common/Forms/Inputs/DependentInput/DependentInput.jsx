/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Field, useFormikContext } from 'formik';
import styles from './DependentInput.module.scss';

function DependentInput(props) {
  const {
    type,
    name,
    placeholder,
    items,
    mainField,
    mainFieldKey,
    additionalField,
    dependentFieldKey,
    ...rest
  } = props;

  const { values, setFieldValue, touched } = useFormikContext();

  React.useEffect(() => {
    if (!touched[additionalField] && !touched[mainField] && !touched[name]) {
      setFieldValue(name, values[name]);
    } else if ((touched[additionalField] || touched[mainField])) {
      const dependentValue = items.find((el) => el[mainFieldKey] === values[mainField])[
        dependentFieldKey
      ];
      setFieldValue(name, dependentValue);
    }
  }, [values[mainField], setFieldValue, touched]);

  return (
    <div className={styles.formControl}>
      <Field type={type} id={name} name={name} placeholder={placeholder} {...rest} />
    </div>
  );
}

export default DependentInput;
