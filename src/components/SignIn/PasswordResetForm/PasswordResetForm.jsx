import React from 'react';
import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import PasswordChecker from '../../common/PasswordChecker/PasswordChecker';
import CombinedError from '../../common/Forms/Errors/CombinedError/CombinedError';
import SubmitButton from '../../common/Buttons/SubmitButton/SubmitButton';
import passwordRegEx from '../../../helpers/constants/passwordRegEx';
import styles from './PasswordResetForm.module.scss';

import { selectPassword } from '../../../redux/password/selectors';
import { resetPassword } from '../../../redux/password/asyncActions';

function PasswordResetForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCodeVerified, isPasswordReset, errors } = useSelector(selectPassword);

  const [isSent, setIsSent] = React.useState(false);

  const initialValues = {
    password: '',
    confirmPassword: '',
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
  });

  const onSubmit = async (values, actions) => {
    await dispatch(resetPassword({ password: values.password }));

    setIsSent(true);

    actions.setSubmitting(false);
    actions.resetForm({ values: initialValues });
  };

  React.useEffect(() => {
    if (!isCodeVerified) {
      navigate('/sign-in/password-recovery');
    } else if (isPasswordReset && isCodeVerified) {
      navigate('/sign-in/password-reset-successful');
    }
  }, [isCodeVerified, isPasswordReset, isSent]);

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {(formik) => (
        <Form className={styles.passwordResetForm}>

          <FormikControl
            control="inputForPassword"
            name="password"
            placeholder="New password"
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

          <CombinedError
            name="confirmPassword"
            serverError={errors.resetPasswordError}
            condition={!formik.touched.password && !formik.touched.confirmPassword && isSent}
          />

          <SubmitButton textBody="Reset" />
        </Form>
      )}
    </Formik>
  );
}

export default PasswordResetForm;
