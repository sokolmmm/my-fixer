/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import AdminZoneIcon from '../Icons/AdminZoneIcon/AdminZoneIcon';
import CalendarIcon from '../Icons/CalendarIcon/CalendarIcon';
import MessagesIcon from '../Icons/MessagesIcon/MessagesIcon';
import ProfileIcon from '../Icons/ProfileIcon/ProfileIcon';
import SearchIcon from '../Icons/SearchIcon/SearchIcon';
import styles from './Navbar.module.scss';

const userLinksList = [
  {
    page: 'profile',
    link: '/profile/personal-info',
    icon(currentPage) {
      return <ProfileIcon isActive={currentPage === this.page} />;
    },
  },
  {
    page: 'search',
    link: '/search',
    icon(currentPage) {
      return <SearchIcon isActive={currentPage === this.page} />;
    },
  },
  {
    page: 'messages',
    link: '/messages',
    icon(currentPage) {
      return <MessagesIcon isActive={currentPage === this.page} />;
    },
  },
  {
    page: 'calendar',
    link: '/admin-zone',
    icon(currentPage) {
      return <CalendarIcon isActive={currentPage === this.page} />;
    },
  },
];

const adminLinksList = [
  {
    page: 'admin-zone',
    link: '/admin-zone',
    icon: (currentPage) => (
      <AdminZoneIcon isActive={currentPage === 'admin-zone'} />
    ),
  },
];
function Navbar({ currentPage }) {
  return (
    <nav className={styles.navbar}>
      <ul>
        {(currentPage === 'admin-zone' ? adminLinksList : userLinksList).map((el) => (
          <li key={el.page} className={currentPage === el.page ? styles.activeLink : null}>
            <NavLink to={el.link}>{el.icon(currentPage)}</NavLink>
          </li>
        ))}
        {/* <li className={currentPage === 'profile' ? styles.activeLink : null}>
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
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
