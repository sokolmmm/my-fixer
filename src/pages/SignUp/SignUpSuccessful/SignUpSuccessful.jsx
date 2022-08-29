import React from 'react';
import styles from './SignUpSuccessful.module.scss';
import letter from '../../../assets/images/letter.svg';

function SignUpSuccessful() {
  return (
    <section className={styles.signUpSuccessful}>
      <figure>
        <img src={letter} alt="letter" />
      </figure>
      <h1>You are almost ready to go!</h1>
      <p>Please check your email to activate your account</p>
    </section>
  );
}

export default SignUpSuccessful;
