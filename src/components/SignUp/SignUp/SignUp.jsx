import React from 'react';
import styles from './SignUp.module.scss';
import SignUpForm from './SignupForm/SignUpForm';

function SignUp() {
  return (
    <section className={styles.signUp}>
      <h1>Sign up</h1>
      <SignUpForm />
    </section>
  );
}

export default SignUp;
