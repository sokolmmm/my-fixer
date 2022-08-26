import React from 'react';

import PasswordRecoveryForm from '../../../components/SignIn/PasswordRecoveryForm/PasswordRecoveryForm';
import styles from './PasswordRecovery.module.scss';

function PasswordRecovery() {
  return (
    <section className={styles.passwordRecovery}>
      <h1>
        Enter your e-mail to reset
        <br />
        your password
      </h1>
      <PasswordRecoveryForm />
    </section>
  );
}

export default PasswordRecovery;
