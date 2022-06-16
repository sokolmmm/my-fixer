/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../common/Header';
import styles from './SignInLayout.module.scss';

function SignInLayout() {
  const location = useLocation(0);
  const [path, setPath] = React.useState(location.pathname);
  const [b, setb] = React.useState();
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
      setb(data[0]);
    } else if (path === '/signin/password-recovery') {
      setb(data[1]);
    } else if (path === '/signin/password-reset') {
      setb(data[0]);
    }
  }, [path]);

  return (
    <div>
      {b ? (
        <div className={styles.signInWrapper}>
          <Header
            spanText={b.spanText}
            linkText={b.linkText}
            linkHref={b.linkHref}
          />
          <Outlet />
        </div>
      ) : (
        <div> hello</div>
      )}
    </div>
  );
}

export default SignInLayout;
