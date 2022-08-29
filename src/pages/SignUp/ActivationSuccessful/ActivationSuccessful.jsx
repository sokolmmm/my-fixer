import React from 'react';

import styles from './ActivationSuccessful.module.scss';
import letter from '../../../assets/images/letter.svg';

function ActivationSuccessful() {
  return (
    <section className={styles.activationSuccessful}>
      <figure>
        <img src={letter} alt="letter" />
      </figure>
      <h1>Your account is activated!</h1>
      <p>Welcome to us</p>
    </section>
  );
}

export default ActivationSuccessful;
