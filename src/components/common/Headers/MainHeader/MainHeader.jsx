/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import LogoIcon from '../../Icons/LogoIcon/LogoIcon';
import styles from './MainHeader.module.scss';
import avatar from '../../../../assets/images/avatar.png';
import { signOut } from '../../../../redux/auth/slice';
import { deleteUserData } from '../../../../redux/slices/userSlice';

function MainHeader({ history }) {
  const dispatch = useDispatch();

  const signOutOnClick = () => {
    dispatch(deleteUserData());
    dispatch(signOut());
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('refresh');
  };

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
          <button type="button" onClick={signOutOnClick}>
            Sign out
          </button>
        </figure>
      </div>
    </header>
  );
}

export default MainHeader;
