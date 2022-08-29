import React from 'react';
import * as Yup from 'yup';

import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FormikControl from '../../common/Forms/FormikControl/FormikControl';
import CombinedError from '../../common/Forms/Errors/CombinedError/CombinedError';
import SubmitButton from '../../common/Buttons/SubmitButton/SubmitButton';
import styles from './ConfirmRecoveryForm.module.scss';

import { checkCode } from '../../../redux/password/asyncActions';
import { selectPassword } from '../../../redux/password/selectors';

function ConfirmRecoveryForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isMailSent, isCodeVerified, errors } = useSelector(selectPassword);

  const [isSent, setIsSent] = React.useState(false);

  const initialValues = {
    code: '',
  };

  const validationSchema = Yup.object({
    code: Yup.string().length(6, 'Code length must be 6 characters').required('Required'),
  });

  const onSubmit = async (values, actions) => {
    await dispatch(checkCode(values));
    setIsSent(true);

    actions.setSubmitting(false);
    actions.resetForm({ values: initialValues });
  };

  React.useEffect(() => {
    if (!isMailSent) {
      navigate('/sign-in/password-recovery');
    } else if (isCodeVerified && isSent) {
      navigate('/sign-in/password-reset');
    }
  }, [isMailSent, isCodeVerified, isSent]);

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnMount
    >
      {(formik) => (
        <Form className={styles.confirmRecoveryForm}>
          <FormikControl control="input" type="text" name="code" placeholder="Enter reset code" />

          <CombinedError
            name="code"
            serverError={errors.checkCodeError}
            condition={!formik.touched.code && isSent}
          />

          <SubmitButton textBody="Send" disabled={!formik.isValid || formik.isSubmitting} />
        </Form>
      )}
    </Formik>
  );
}

export default ConfirmRecoveryForm;
