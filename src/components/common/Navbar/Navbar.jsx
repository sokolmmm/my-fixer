/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import CalendarIcon from '../Icons/CalendarIcon/CalendarIcon';
import MessagesIcon from '../Icons/MessagesIcon/MessagesIcon';
import ProfileIcon from '../Icons/ProfileIcon/ProfileIcon';
import SearchIcon from '../Icons/SearchIcon/SearchIcon';
import styles from './Navbar.module.scss';

function Navbar({ currentPage }) {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={currentPage === 'profile' ? styles.activeLink : null}>
          <NavLink to="/profile/personal-info">
            <ProfileIcon isActive={currentPage === 'profile'} />
          </NavLink>
        </li>
        <li className={currentPage === 'search' ? styles.activeLink : null}>
          <NavLink to="/search">
            <SearchIcon isActive={currentPage === 'search'} />
          </NavLink>
        </li>
        <li className={currentPage === 'messages' ? styles.activeLink : null}>
          <NavLink to="/messages">
            <MessagesIcon isActive={currentPage === 'messages'} />
          </NavLink>
        </li>
        <li className={currentPage === 'calendar' ? styles.activeLink : null}>
          <NavLink to="/calendar">
            <CalendarIcon isActive={currentPage === 'calendar'} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
