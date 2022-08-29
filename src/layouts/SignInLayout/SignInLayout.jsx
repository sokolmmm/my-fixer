/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import LoginHeader from '../../components/common/Headers/LoginHeader/LoginHeader';
import styles from './SignInLayout.module.scss';

import { signInHeaderData } from '../../helpers/constants/signInHeaderData';

function SignInLayout() {
  const location = useLocation(0);
  const [path, setPath] = React.useState(location.pathname);

  const [currentData, setCurrentData] = React.useState({
    spanText: '',
    linkText: '',
    linkHref: '',
  });

  React.useEffect(() => {
    setPath(location.pathname);
    if (path === '/sign-in' || path === '/sign-in/password-reset') {
      setCurrentData(signInHeaderData[0]);
    } else if (
      path === '/sign-in/password-recovery'
      || path === '/sign-in/password-recovery-confirm'
      || path === '/sign-in/password-reset-successful'
    ) {
      setCurrentData(signInHeaderData[1]);
    }
  }, [location, path]);

  return (
    <div className={styles.signInWrapper}>
      <LoginHeader
        spanText={currentData.spanText}
        linkText={currentData.linkText}
        linkHref={currentData.linkHref}
      />
      <Outlet />
    </div>
  );
}

export default SignInLayout;
