import { HambergerMenu } from 'iconsax-react';
import { Fragment, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../Assets/excel_logo_png.webp';
import styles from './ExcelNav.module.css';

export default function ExcelNav() {
  const [menuState, setMenuState] = useState(false);

  const menuHandler = () => {
    setMenuState((p) => !p);
  };

  useEffect(() => {
    if (menuState) {
      document.body.style.overflowY = 'hidden';
    }
    if (!menuState) {
      document.body.style.overflowY = 'scroll';
    }
  }, [menuState]);

  return (
    <Fragment>
      <div className={`${styles.nav} grid`}>
        <div className={styles.logo}>
          <Link to='/'>
            <img
              src={logo}
              alt='Excel na Wypasie'
              width={'100px'}
              height={'auto'}
            />
          </Link>
        </div>

        <nav className={`${styles.navbar} grid`}>
          <div />
          <NavLink to='/o-nas' className={styles.link}>
            O nas
          </NavLink>
          <NavLink to='/login' className={styles.link}>
            Login
          </NavLink>
        </nav>

        <Link to='/excel-course#pakiety' className={styles['oferta-link']}>
          <div className={styles['button-oferta']}>Zakup kurs</div>
        </Link>
      </div>

      <div className={styles['nav-800']}>
        <div className={styles['logo-800']}>
          <Link to='/'>
            <img
              src={logo}
              alt='Excel na Wypasie'
              width={'130px'}
              height={'auto'}
            />
          </Link>
        </div>

        <div className={styles['hamburger-menu']}>
          <HambergerMenu onClick={menuHandler} color='white' size='44' />
        </div>

        {menuState && (
          <Fragment>
            <nav className={`${styles['menu-800']} grid`}>
              <NavLink
                to='/'
                className={`${styles['link-800']}`}
                onClick={menuHandler}
              >
                Strona główna
              </NavLink>
              <NavLink
                to='/kontakt'
                className={styles['link-800']}
                onClick={menuHandler}
              >
                Kontakt
              </NavLink>
              <NavLink
                to='/oferta'
                className={styles['link-800']}
                onClick={menuHandler}
              >
                Zakup kursów
              </NavLink>
            </nav>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}
