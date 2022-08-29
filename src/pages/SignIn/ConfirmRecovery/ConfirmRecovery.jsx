import React from 'react';

import ConfirmRecoveryForm from '../../../components/SignIn/ConfirmRecoveryForm/ConfirmRecoveryForm';
import styles from './ConfirmRecovery.module.scss';

function ConfirmRecovery() {
  return (
    <section className={styles.confirmRecovery}>
      <h1>Enter your reset code</h1>
      <ConfirmRecoveryForm />
    </section>
  );
}

export default ConfirmRecovery;
