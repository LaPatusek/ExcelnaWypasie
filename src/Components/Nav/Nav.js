import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
  // const [menuState, setMenuState] = useState(false);

  return (
    <Fragment>
      <div className={`${styles.nav} grid`}>
        <div className={styles.logo}>
          <Link to='/'>
            Excel na <br /> Wypasie
          </Link>
        </div>

        <nav className={`${styles.navbar} grid`}>
          <Link to='/kursy' className={styles.link}>
            Szkolenia
          </Link>
          <Link to='/o-nas' className={styles.link}>
            O nas
          </Link>
          <Link to='/kontakt' className={styles.link}>
            Kontakt
          </Link>
        </nav>

        <Link to='/oferta' className={styles['oferta-link']}>
          <div className={styles['button-oferta']}>Oferta kursów</div>
        </Link>
      </div>
      <div className={styles['nav-800']}></div>
    </Fragment>
  );
}
