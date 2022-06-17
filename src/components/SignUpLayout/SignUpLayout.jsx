/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../common/Header/Header';
import styles from './SignUpLayout.module.scss';

function SignUpLayout() {
  const location = useLocation(0);
  const [path, setPath] = React.useState(location.pathname);
  const [headerData, setHeaderData] = React.useState();
  const [data] = React.useState([
    {
      spanText: 'Already have an account?',
      linkText: 'Log In',
      linkHref: '/signin',
    },
  ]);

  React.useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  React.useEffect(() => {
    if (path.includes('/signup')) {
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
        <div className={styles.signUpWrapper}>
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

export default SignUpLayout;
