import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import MainHeader from '../../common/Headers/MainHeader/MainHeader';
import Navbar from '../../common/Navbar/Navbar';

function MainLayout() {
  const location = useLocation(0);
  const [path, setPath] = React.useState(location.pathname);
  const [headerHistory, setHeaderHistory] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState();
  const [data] = React.useState([
    ['Home', 'Profile'],
    ['Home', 'Search'],
    ['Home', 'Messages'],
    ['Home', 'Calendar'],
    ['Home', 'Manage users'],
  ]);

  React.useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  React.useEffect(() => {
    if (path.includes('/profile')) {
      setHeaderHistory(data[0]);
      setCurrentPage('profile');
    } else if (path === '/search') {
      setHeaderHistory(data[1]);
      setCurrentPage('search');
    } else if (path === '/messages') {
      setHeaderHistory(data[2]);
      setCurrentPage('messages');
    } else if (path === '/calendar') {
      setHeaderHistory(data[3]);
      setCurrentPage('calendar');
    } else if (path === '/admin-zone') {
      setHeaderHistory(data[4]);
      setCurrentPage('admin-zone');
    }
  }, [path]);
  return (
    <div className={styles.wrapper}>
      <MainHeader history={headerHistory} />
      <Navbar currentPage={currentPage} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
