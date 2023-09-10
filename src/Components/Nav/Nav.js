import { Fragment, useState } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [menuState, setMenuState] = useState(false);

  return (
    <Fragment>
      <div className={styles.nav}>
        <div>
          <h1>Excel na Wypasie</h1>
        </div>
      </div>
      <div className={styles.navbar}>
        <h2>linki</h2>
      </div>
      <div className={styles['nav-800']}></div>
    </Fragment>
  );
}
