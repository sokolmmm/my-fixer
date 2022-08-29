/* eslint-disable no-unused-vars */
import React from 'react';
import * as Yup from 'yup';

import { NavLink, useNavigate } from 'react-router-dom';
import { ErrorMessage, Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import CombinedError from '../../common/Forms/Errors/CombinedError/CombinedError';
import TextError from '../../common/Forms/Errors/TextError/TextError';
import SubmitButton from '../../common/Buttons/SubmitButton/SubmitButton';
import styles from './SignInForm.module.scss';

import { signIn } from '../../../redux/auth/asyncActions';
import { selectAuth } from '../../../redux/auth/selectors';
import { selectUserData } from '../../../redux/user/selectors';

function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth, error } = useSelector(selectAuth);
  const userData = useSelector(selectUserData);

  const [isSent, setIsSent] = React.useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(3).required('Required'),
  });

  const onSubmit = async (values, actions) => {
    await dispatch(signIn(values));
    actions.setSubmitting(false);
    actions.resetForm({ values: { email: values.email, password: '' } });
    setIsSent(true);
  };

  React.useEffect(() => {
    if (isAuth) {
      navigate(`/profile/${userData.id}/personal-info`);
    }
  }, [isAuth]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
    >
      {(formik) => (
        <Form className={styles.signInForm}>
          <FormikControl control="input" type="email" name="email" placeholder="E-mail" />

          <div>
            <ErrorMessage name="email" component={TextError} />
          </div>

          <FormikControl
            control="inputForPassword"
            name="password"
            placeholder="Password"
            condition={formik.values.password}
          />

          <CombinedError
            name="password"
            serverError={error}
            condition={!formik.touched.email && !formik.touched.password && isSent}
          />

          <NavLink to="password-recovery">Forgot password?</NavLink>

          <SubmitButton textBody="Sign in" disabled={!formik.isValid || formik.isSubmitting || !formik.values} />
        </Form>
      )}
    </Formik>
  );
}

export default SignInForm;
