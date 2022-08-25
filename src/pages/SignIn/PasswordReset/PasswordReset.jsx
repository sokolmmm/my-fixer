import React from 'react';

import PasswordResetForm from '../../../components/SignIn/PassResetForm/PassResetForm';
import styles from './PasswordReset.module.scss';

function PasswordReset() {
  return (
    <section className={styles.passwordReset}>
      <h1>Reset your password</h1>
      <PasswordResetForm />
    </section>
  );
}

export default PasswordReset;
