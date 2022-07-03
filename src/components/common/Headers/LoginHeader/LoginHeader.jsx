/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './LoginHeader.module.scss';
import logo from '../../../../assets/images/logo_header.svg';

function LoginHeader({ spanText, linkText, linkHref }) {
  return (
    <header className={styles.header}>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <nav>
        <span>
          {spanText}
          &nbsp;
        </span>
        <NavLink to={linkHref}>{linkText}</NavLink>
      </nav>
    </header>
  );
}

export default LoginHeader;
