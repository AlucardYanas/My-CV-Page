import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.scss';

export default function Header(): JSX.Element {
  return (
    <nav className={styles.header}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Главная</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/portfolio">Портфолио</Link>
        </li>
      </ul>
    </nav>
  );
};


