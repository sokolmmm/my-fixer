/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import { useSelector } from 'react-redux';
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
    link(id) {
      return `/profile/${id}/personal-info`;
    },
    icon(currentPage) {
      return <ProfileIcon isActive={currentPage === this.page} />;
    },
  },
  {
    page: 'search',
    link() {
      return '/search';
    },
    icon(currentPage) {
      return <SearchIcon isActive={currentPage === this.page} />;
    },
  },
  {
    page: 'messages',
    link() {
      return '/messages';
    },
    icon(currentPage) {
      return <MessagesIcon isActive={currentPage === this.page} />;
    },
  },
  {
    page: 'calendar',
    link() {
      return '/admin-zone';
    },
    icon(currentPage) {
      return <CalendarIcon isActive={currentPage === this.page} />;
    },
  },
];

const adminLinksList = [
  {
    page: 'admin-zone',
    link() {
      return '/admin-zone';
    },
    icon: (currentPage) => <AdminZoneIcon isActive={currentPage === 'admin-zone'} />,
  },
];

function Navbar({ currentPage }) {
  const { id } = useSelector((state) => state.user.userData);
  return (
    <nav className={styles.navbar}>
      <ul>
        {(currentPage === 'admin-zone' ? adminLinksList : userLinksList).map((el) => (
          <li key={el.page} className={currentPage === el.page ? styles.activeLink : null}>
            <NavLink to={el.link(id)}>{el.icon(currentPage)}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
