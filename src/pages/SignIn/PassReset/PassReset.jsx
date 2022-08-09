import React from 'react';

import PassResetForm from '../../../components/SignIn/PassResetForm/PassResetForm';
import styles from './PassReset.module.scss';

function PassReset() {
  return (
    <section className={styles.passReset}>
      <h1>Reset your password</h1>
      <PassResetForm />
    </section>
  );
}

export default PassReset;
