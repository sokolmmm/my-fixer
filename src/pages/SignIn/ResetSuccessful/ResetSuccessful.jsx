import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import letter from '../../../assets/images/letter.svg';
import styles from './ResetSuccessful.module.scss';

import { selectIsPasswordReset } from '../../../redux/password/selectors';

function ResetSuccessful() {
  const navigate = useNavigate();

  const isPasswordReset = useSelector(selectIsPasswordReset);

  React.useEffect(() => {
    if (!isPasswordReset) {
      navigate('/sign-in');
    }
  }, [isPasswordReset]);

  return (
    <section className={styles.resetSuccessful}>
      <figure>
        <img src={letter} alt="letter" />
      </figure>
      <h1>You are ready to go!</h1>
      <p>Your password has been successfully reset</p>
    </section>
  );
}

export default ResetSuccessful;
