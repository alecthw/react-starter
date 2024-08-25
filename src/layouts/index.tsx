import { Divider, Space, Spin } from 'antd';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import styles from './index.module.scss';

const PageLayout = () => (
  <Space direction="vertical" size="middle" className={styles.pageLayout}>
    <h1>React Redux Starter Kit</h1>
    <h3>React + Redux-Toolkit + React-Router + Antd</h3>

    <Space split={<Divider type="vertical" />}>
      <Link to="/" className={styles.navItemActive}>
        Home
      </Link>
      <Link to="/counter" className={styles.navItemActive}>
        Counter
      </Link>
      <Link to="/member" className={styles.navItemActive}>
        Member
      </Link>
    </Space>

    <div className={styles.viewport}>
      <Suspense fallback={<Spin className={styles.suspense} size="large" />}>
        <Outlet />
      </Suspense>
    </div>
  </Space>
);

export default PageLayout;
