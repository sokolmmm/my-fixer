import React from 'react';
import * as Yup from 'yup';

import { ErrorMessage, Form, Formik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import PasswordChecker from '../../common/PasswordChecker/PasswordChecker';
import TextError from '../../common/Forms/Errors/TextError/TextError';
import SubmitButton from '../../common/Buttons/SubmitButton/SubmitButton';
import passwordRegEx from '../../../helpers/constants/passwordRegEx';
import styles from './SignUpCompleteForm.module.scss';
import reCaptcha from '../../../assets/images/re_captcha.png';

import { signUp } from '../../../redux/signUp/asyncActions';
import { selectSignUpData } from '../../../redux/signUp/selectors';

function SignUpCompleteForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, isFirstStepCompleted } = useSelector(selectSignUpData);

  const initialValues = {
    password: '',
    confirmPassword: '',
    termsService: '',
    privacyPolicy: '',
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .matches(
        passwordRegEx.strong,
        'Password must contain at least 8 characters, one uppercase, one number and one special case character',
      )
      .required('required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Passwords must match'),
    termsService: Yup.boolean().required('Required'),
    privacyPolicy: Yup.boolean().isTrue().required('Required'),
  });

  const onSubmit = async (values, actions) => {
    await dispatch(signUp({ password: values.password }));
    actions.setSubmitting(false);
  };

  React.useEffect(() => {
    if (status === 'resolved') {
      navigate('/sign-up/successful');
    } else if (!isFirstStepCompleted || status === 'rejected') {
      navigate('/sign-up');
    }
  }, [isFirstStepCompleted, status]);

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnMount
    >
      {(formik) => (
        <Form className={styles.completeAccountForm}>
          <FormikControl
            control="inputForPassword"
            name="password"
            placeholder="Create a password"
            condition={formik.values.password}
          />

          <PasswordChecker
            value={formik.values.password}
            condition={formik.touched.password || formik.values.password}
          />

          <FormikControl
            control="inputForPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            condition={formik.values.confirmPassword}
          />

          <div>
            <ErrorMessage name="confirmPassword" component={TextError} />
          </div>

          <div className={styles.checkboxGroup}>
            <FormikControl
              control="checkbox"
              name="termsService"
              label="I agree to the myFixer.com"
            />
            <NavLink to="s">Terms of Service</NavLink>
          </div>
          <div className={styles.checkboxGroup}>
            <FormikControl
              control="checkbox"
              name="privacyPolicy"
              label="I agree to the myFixer.com"
            />
            <NavLink to="s">Privacy Policy</NavLink>
          </div>

          <figure>
            <img src={reCaptcha} alt="reCaptcha" />
          </figure>

          <SubmitButton textBody="Get started" disabled={!formik.isValid} />
        </Form>
      )}
    </Formik>
  );
}

export default SignUpCompleteForm;
