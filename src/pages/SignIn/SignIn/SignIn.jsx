import React from 'react';
import SignInForm from '../../../components/SignIn/SignInForm/SignInForm';
import styles from './SignIn.module.scss';

function SignIn() {
  return (
    <section className={styles.signIn}>
      <h1>Sign in</h1>
      <SignInForm />
    </section>
  );
}

export default SignIn;
