import React from 'react';

import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';

export default function Layout(): JSX.Element {
  return (
    <div className={styles.root}>
      <Outlet />
    </div>
  );
}
