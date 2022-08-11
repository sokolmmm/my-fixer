/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import LoginHeader from '../../components/common/Headers/LoginHeader/LoginHeader';
import styles from './SignUpLayout.module.scss';

function SignUpLayout() {
  const location = useLocation(0);
  const [path, setPath] = React.useState(location.pathname);
  const [data] = React.useState([
    {
      spanText: 'Already have an account?',
      linkText: 'Log In',
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
  }, [location]);

  React.useEffect(() => {
    if (path.includes('/sign-up')) {
      setHeaderData(data[0]);
    }
  }, [path]);

  return (
    <div className={styles.signUpWrapper}>
      <LoginHeader
        spanText={headerData.spanText}
        linkText={headerData.linkText}
        linkHref={headerData.linkHref}
      />
      <Outlet />
    </div>
  );
}

export default SignUpLayout;
