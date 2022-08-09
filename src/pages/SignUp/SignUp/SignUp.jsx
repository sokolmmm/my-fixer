import React from 'react';
import SignUpForm from '../../../components/SignUp/SignupForm/SignUpForm';
import styles from './SignUp.module.scss';

function SignUp() {
  return (
    <section className={styles.signUp}>
      <h1>Sign up</h1>
      <SignUpForm />
    </section>
  );
}

export default SignUp;
