import React from 'react';

import CompleteAccountForm from '../../../components/SignUp/SignUpCompleteForm/SignUpCompleteForm';
import styles from './SignUpComplete.module.scss';

function SignUpComplete() {
  return (
    <section className={styles.SignUpComplete}>
      <h1>Complete your account</h1>
      <CompleteAccountForm />
    </section>
  );
}

export default SignUpComplete;
