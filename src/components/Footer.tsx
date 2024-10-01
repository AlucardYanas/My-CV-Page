import React from 'react';
import styles from '../styles/footer.module.scss';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <p>Контакты: alucardyanas@gmail.com</p>
      <p>ссылка на мой гитхаб</p>
      <p>© 2024 Artem Pashkov. Все права защищены.</p>
    </footer>
  );
};
