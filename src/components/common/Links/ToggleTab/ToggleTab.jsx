/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ToggleTab.module.scss';

function ToggleTab({ linkPath, linkText, isActive }) {
  return (
    <NavLink
      to={linkPath}
      className={
        isActive ? `${styles.toggleTab} ${styles.activeTab}` : styles.toggleTab
      }
    >
      {linkText}
    </NavLink>
  );
}

export default ToggleTab;
