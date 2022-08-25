/* eslint-disable no-unused-vars */
import React from 'react';
import * as Yup from 'yup';

import { NavLink, useNavigate } from 'react-router-dom';
import { ErrorMessage, Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import GreenButton from '../../common/Buttons/GreenButton/GreenButton';
import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import TextError from '../../common/Forms/TextError/TextError';
import CombinedError from '../../common/Forms/CombinedError/CombinedError';
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
    actions.resetForm({ values: initialValues });
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

          <FormikControl control="input" type="password" name="password" placeholder="Password" />

          <CombinedError
            name="password"
            serverError={error}
            condition={!formik.touched.email && !formik.touched.password && isSent}
          />

          <NavLink to="password-recovery">Forgot password?</NavLink>

          <GreenButton textBody="Sign in" disabled={!formik.isValid || formik.isSubmitting} />
        </Form>
      )}
    </Formik>
  );
}

export default SignInForm;
