/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import CalendarIcon from '../Icons/CalendarIcon';
import MessagesIcon from '../Icons/MessagesIcon';
import ProfileIcon from '../Icons/ProfileIcon';
import SearchIcon from '../Icons/SearchIcon';
import styles from './Navbar.module.scss';

function Navbar({ activeLink }) {
  console.log(activeLink);
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={activeLink === 'profile' ? styles.activeLink : null}>
          <NavLink to="/profile">
            <ProfileIcon />
          </NavLink>
        </li>
        <li className={activeLink === 'search' ? styles.activeLink : null}>
          <NavLink to="/search">
            <SearchIcon />
          </NavLink>
        </li>
        <li className={activeLink === 'messages' ? styles.activeLink : null}>
          <NavLink to="/messages">
            <MessagesIcon />
          </NavLink>
        </li>
        <li className={activeLink === 'calendar' ? styles.activeLink : null}>
          <NavLink to="/calendar">
            <CalendarIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
