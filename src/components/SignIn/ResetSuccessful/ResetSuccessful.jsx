import React from 'react';
import LetterIcon from '../../common/Icons/LetterIcon';
import styles from './ResetSuccessful.module.scss';

function ResetSuccessful() {
  return (
    <section className={styles.resetSuccessful}>
      <figure>
        <LetterIcon />
      </figure>
      <h1>You are almost ready to go!</h1>
      <p>Please check your email to reset your password</p>
    </section>
  );
}

export default ResetSuccessful;
