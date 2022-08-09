import React from 'react';
import styles from './CompleteAccountSuccessful.module.scss';
import letter from '../../../assets/images/letter.svg';

function CompleteAccountSuccessful() {
  return (
    <section className={styles.completeAccountSuccessful}>
      <figure>
        <img src={letter} alt="letter" />
      </figure>
      <h1>You are almost ready to go!</h1>
      <p>Please check your email to activate your account</p>
    </section>
  );
}

export default CompleteAccountSuccessful;
