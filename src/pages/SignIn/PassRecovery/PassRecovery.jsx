import React from 'react';
import styles from './PassRecovery.module.scss';
import PassRecoveryForm from '../../../components/SignIn/PassRecoveryForm/PassRecoveryForm';

function PassRecovery() {
  return (
    <section className={styles.passRecovery}>
      <h1>
        Enter your e-mail to reset
        <br />
        your password
      </h1>
      <PassRecoveryForm />
    </section>
  );
}

export default PassRecovery;
