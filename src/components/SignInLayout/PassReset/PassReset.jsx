import React from 'react';
import styles from './PassReset.module.scss';
import PassResetForm from './PassResetForm/PassResetForm';

function PassReset() {
  return (
    <section className={styles.passReset}>
      <h1>Reset your password</h1>
      <PassResetForm />
    </section>
  );
}

export default PassReset;
