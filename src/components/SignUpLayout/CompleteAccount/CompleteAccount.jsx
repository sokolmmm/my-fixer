import React from 'react';
import styles from './CompleteAccount.module.scss';
import CompleteAccountForm from './CompleteAccountForm/CompleteAccountForm';

function CompleteAccount() {
  return (
    <section className={styles.completeAccount}>
      <h1>Complete your account</h1>
      <CompleteAccountForm />
    </section>
  );
}

export default CompleteAccount;
