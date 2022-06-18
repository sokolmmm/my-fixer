import React from 'react';
import FormSignIn from './FormSignIn/FormSignIn';
import styles from './SignIn.module.scss';

function SignIn() {
  return (
    <section className={styles.signIn}>
      <h1>Sign in</h1>
      <FormSignIn />
    </section>
  );
}

export default SignIn;
