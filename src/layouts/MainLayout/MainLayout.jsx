/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import MainHeader from '../../components/common/Headers/MainHeader/MainHeader';
import Navbar from '../../components/common/Navbar/Navbar';
import styles from './MainLayout.module.scss';

import { checkIsAuth } from '../../redux/auth/asyncActions';
import { selectAuth } from '../../redux/auth/selectors';
import { mainHeaderData } from '../../helpers/constants/mainHeaderData';

function MainLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(0);

  const { isAuth, isRefreshRefused, statuses } = useSelector(selectAuth);

  const [path, setPath] = React.useState(location.pathname);
  const [headerHistory, setHeaderHistory] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState();

  React.useEffect(() => {
    if (!isAuth) {
      dispatch(checkIsAuth());
      if (isRefreshRefused) {
        navigate('/sign-in');
      }
    }
  }, [isAuth, isRefreshRefused]);

  React.useEffect(() => {
    setPath(location.pathname);

    if (path.includes('/profile')) {
      setHeaderHistory(mainHeaderData[0]);
      setCurrentPage('profile');
    } else if (path === '/search') {
      setHeaderHistory(mainHeaderData[1]);
      setCurrentPage('search');
    } else if (path === '/messages') {
      setHeaderHistory(mainHeaderData[2]);
      setCurrentPage('messages');
    } else if (path === '/calendar') {
      setHeaderHistory(mainHeaderData[3]);
      setCurrentPage('calendar');
    } else if (path === '/admin-zone') {
      setHeaderHistory(mainHeaderData[4]);
      setCurrentPage('admin-zone');
    }
  }, [location, path]);

  return (
    <>
      {statuses.checkIsAuthStatus === 'loading' ? (
        <div>Preloader</div>
      ) : (
        <div className={styles.wrapper}>
          <MainHeader history={headerHistory} />
          <Navbar currentPage={currentPage} />
          <main>
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
}

export default MainLayout;
