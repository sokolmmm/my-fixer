import React from 'react';
import LetterIcon from '../../common/Icons/LetterIcon';
import styles from './CompleteAccountSuccessful.module.scss';

function CompleteAccountSuccessful() {
  return (
    <section className={styles.completeAccountSuccessful}>
      <figure>
        <LetterIcon />
      </figure>
      <h1>You are almost ready to go!</h1>
      <p>Please check your email to activate your account</p>
    </section>
  );
}

export default CompleteAccountSuccessful;
