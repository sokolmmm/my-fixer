/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/style-prop-object */
import React from 'react';

import { Outlet } from 'react-router-dom';

import LoginHeader from '../../components/common/Headers/LoginHeader/LoginHeader';
import styles from './SignUpLayout.module.scss';

function SignUpLayout() {
  return (
    <div className={styles.signUpWrapper}>
      <LoginHeader spanText="Already have an account?" linkText="Log In" linkHref="/sign-in" />
      <Outlet />
    </div>
  );
}

export default SignUpLayout;
