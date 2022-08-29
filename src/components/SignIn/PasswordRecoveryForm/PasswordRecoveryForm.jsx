import React from 'react';
import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import SubmitButton from '../../common/Buttons/SubmitButton/SubmitButton';
import CombinedError from '../../common/Forms/Errors/CombinedError/CombinedError';
import styles from './PasswordRecoveryForm.module.scss';

import { sendResetPasswordMail } from '../../../redux/password/asyncActions';
import { selectIsMailSent, selectResetPasswordError } from '../../../redux/password/selectors';

function PasswordRecoveryForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMailSent = useSelector(selectIsMailSent);
  const error = useSelector(selectResetPasswordError);

  const [isSent, setIsSent] = React.useState(false);

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
  });

  const onSubmit = async (values, actions) => {
    await dispatch(sendResetPasswordMail(values));
    setIsSent(true);

    actions.setSubmitting(false);
    actions.resetForm({ values: initialValues });
  };

  React.useEffect(() => {
    if (isMailSent && isSent) {
      navigate('/sign-in/password-recovery-confirm');
    }
  }, [isMailSent, isSent]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
    >
      {(formik) => (
        <Form className={styles.passwordRecoveryForm}>
          <FormikControl
            control="input"
            type="email"
            name="email"
            placeholder="E-mail"
          />

          <CombinedError
            name="email"
            serverError={error}
            condition={!formik.touched.email && isSent}
          />

          <SubmitButton
            textBody="Send"
            disabled={!formik.isValid || formik.isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
}

export default PasswordRecoveryForm;
