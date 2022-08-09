import React from 'react';
import styles from './ResetSuccessful.module.scss';
import letter from '../../../assets/images/letter.svg';

function ResetSuccessful() {
  return (
    <section className={styles.resetSuccessful}>
      <figure>
        <img src={letter} alt="letter" />
      </figure>
      <h1>You are almost ready to go!</h1>
      <p>Please check your email to reset your password</p>
    </section>
  );
}

export default ResetSuccessful;
