import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import MainHeader from '../../common/Headers/MainHeader/MainHeader';
import Navbar from '../../common/Navbar/Navbar';

function MainLayout() {
  const location = useLocation(0);
  const [path, setPath] = React.useState(location.pathname);
  const [headerHistory, setHeaderHistory] = React.useState([]);
  const [activeLink, setActiveLink] = React.useState();
  const [data] = React.useState([
    ['Home', 'Profile'],
    ['Home', 'Search'],
    ['Home', 'Messages'],
    ['Home', 'Calendar'],
  ]);

  React.useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  React.useEffect(() => {
    if (path === '/profile') {
      setHeaderHistory(data[0]);
      setActiveLink('profile');
    } else if (path === '/search') {
      setHeaderHistory(data[1]);
      setActiveLink('search');
    } else if (path === '/messages') {
      setHeaderHistory(data[2]);
      setActiveLink('messages');
    } else if (path === '/calendar') {
      setHeaderHistory(data[3]);
      setActiveLink('calendar');
    }
  }, [path]);
  return (
    <div className={styles.wrapper}>
      <MainHeader history={headerHistory} />
      <Navbar activeLink={activeLink} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
