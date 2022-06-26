/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoIcon from '../../Icons/LogoIcon';
import styles from './MainHeader.module.scss';
import avatar from '../../../../assets/images/avatar.png';

function MainHeader({ history }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <NavLink to="/">
          <LogoIcon />
        </NavLink>
      </div>
      <div className={styles.headerContent}>
        <div className={styles.history}>
          {history.map((el) => (
            <span key={el}>{el}</span>
          ))}
        </div>
        <figure>
          <figcaption>Faruh Bernandez</figcaption>
          <img src={avatar} alt="avatar" />
        </figure>
      </div>
    </header>
  );
}

export default MainHeader;
