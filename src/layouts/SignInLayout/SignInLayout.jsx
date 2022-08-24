/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import LoginHeader from '../../components/common/Headers/LoginHeader/LoginHeader';
import styles from './SignInLayout.module.scss';

function SignInLayout() {
  const location = useLocation(0);
  const [path, setPath] = React.useState(location.pathname);
  const [data] = React.useState([
    {
      spanText: 'Do not have an account?',
      linkText: 'Sign up',
      linkHref: '/sign-up',
    },
    {
      spanText: 'Back to ',
      linkText: 'Sign in',
      linkHref: '/sign-in',
    },
  ]);

  const [headerData, setHeaderData] = React.useState({
    spanText: '',
    linkText: '',
    linkHref: '',
  });

  React.useEffect(() => {
    setPath(location.pathname);
    if (path === '/sign-in' || path === '/sign-in/password-reset') {
      setHeaderData(data[0]);
    } else if (
      path === '/sign-in/password-recovery'
      || path === '/sign-in/password-recovery-confirm'
      || path === '/sign-in/password-reset-successful'
    ) {
      setHeaderData(data[1]);
    }
  }, [location, path]);

  return (
    <div className={styles.signInWrapper}>
      <LoginHeader
        spanText={headerData.spanText}
        linkText={headerData.linkText}
        linkHref={headerData.linkHref}
      />
      <Outlet />
    </div>
  );
}

export default SignInLayout;
