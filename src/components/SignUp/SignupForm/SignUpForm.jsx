import React from 'react';
import * as Yup from 'yup';

import { ErrorMessage, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import GreenButton from '../../common/Buttons/GreenButton/GreenButton';
import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import TextError from '../../common/Forms/TextError/TextError';
import CombinedError from '../../common/Forms/CombinedError/CombinedError';
import styles from './SignUpForm.module.scss';

import { firstStepSignUp } from '../../../redux/signUp/slice';
import { selectSignUpData } from '../../../redux/signUp/selectors';

function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error } = useSelector(selectSignUpData);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().min(3).max(15).required('Required'),
    lastName: Yup.string().min(3).max(15).required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  });

  const onSubmit = (values) => {
    dispatch(firstStepSignUp(values));
    navigate('/sign-up/complete');
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema} validateOnMount>
      {(formik) => (
        <Form className={styles.signUpForm}>
          <div className={styles.nameGroup}>
            <FormikControl control="input" type="text" name="firstName" placeholder="First name" />

            <FormikControl control="input" type="text" name="lastName" placeholder="Last name" />
          </div>
          <div className={styles.errorNameGroup}>
            <div>
              <ErrorMessage name="firstName" component={TextError} />
            </div>

            <div>
              <ErrorMessage name="lastName" component={TextError} />
            </div>
          </div>

          <FormikControl control="input" type="email" name="email" placeholder="E-mail" />

          <CombinedError
            name="email"
            serverError={error}
            condition={!formik.touched.email && !formik.touched.firstName && !formik.touched.lastName}
          />

          <GreenButton textBody="Get started" disabled={!formik.isValid} />
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;
