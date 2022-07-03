/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ToggleTab from '../common/Links/ToggleTab/ToggleTab';
import styles from './Profile.module.scss';

function Profile() {
  const location = useLocation(0);
  const [path, setPath] = React.useState(location.pathname);
  const [currentPage, setCurrentPage] = React.useState('personal-info');

  React.useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  React.useEffect(() => {
    if (path === '/profile/personal-info') {
      setCurrentPage('personal-info');
    } else if (path === '/profile/account-info') {
      setCurrentPage('account-info');
    }
  }, [path]);

  return (
    <section className={styles.profileWrapper}>
      <div className={styles.toggleTabs}>
        <ToggleTab
          linkPath="personal-info"
          linkText="Personal Information"
          isActive={currentPage === 'personal-info'}
        />

        <ToggleTab
          linkPath="account-info"
          linkText="Account Information"
          isActive={currentPage === 'account-info'}
        />
      </div>
      <Outlet />
    </section>
  );
}

export default Profile;
