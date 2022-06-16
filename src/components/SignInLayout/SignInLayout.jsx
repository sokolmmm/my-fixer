/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../common/Header';
import styles from './SignInLayout.module.scss';

function SignInLayout() {
  const location = useLocation(0);
  const [path, setPath] = React.useState(location.pathname);
  const [headerData, setHeaderData] = React.useState();
  const [data] = React.useState([
    {
      spanText: 'Do not have an account?',
      linkText: 'Sign up',
      linkHref: '/signup',
    },
    {
      spanText: 'Back to ',
      linkText: 'Sign in',
      linkHref: '/signin',
    },
  ]);

  React.useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  React.useEffect(() => {
    if (path === '/signin') {
      setHeaderData(data[0]);
    } else if (path === '/signin/password-recovery') {
      setHeaderData(data[1]);
    } else if (path === '/signin/password-reset') {
      setHeaderData(data[0]);
    }
  }, [path]);

  return (
    <div>
      {headerData ? (
        <div className={styles.signInWrapper}>
          <Header
            spanText={headerData.spanText}
            linkText={headerData.linkText}
            linkHref={headerData.linkHref}
          />
          <Outlet />
        </div>
      ) : (
        <div>Preloader</div>
      )}
    </div>
  );
}

export default SignInLayout;
