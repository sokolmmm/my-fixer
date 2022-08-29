import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';

import ToggleTab from '../../components/common/Links/ToggleTab/ToggleTab';
import styles from './Profile.module.scss';

import { selectIstAuth } from '../../redux/auth/selectors';
import { getUser } from '../../redux/user/asyncActions';

function Profile() {
  const dispatch = useDispatch();
  const location = useLocation(0);

  const isAuth = useSelector(selectIstAuth);

  const [path, setPath] = React.useState(location.pathname);
  const [currentPage, setCurrentPage] = React.useState('personal-info');

  React.useEffect(() => {
    setPath(location.pathname);

    if (path.includes('personal-info')) {
      setCurrentPage('personal-info');
    } else if (path.includes('account-info')) {
      setCurrentPage('account-info');
    }
  }, [location, path]);

  React.useEffect(() => {
    if (isAuth) {
      dispatch(getUser());
    }
  }, []);
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
