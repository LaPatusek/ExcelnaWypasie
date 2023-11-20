import { HambergerMenu } from 'iconsax-react';
import React, { Fragment, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/excel_logo_png.webp';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
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
              width={'150px'}
              height={'180.766px'}
            />
          </Link>
        </div>

        <nav className={`${styles.navbar} grid`}>
          <NavLink to='/kursy' className={styles.link}>
            Szkolenia
          </NavLink>
          <NavLink to='/o-nas' className={styles.link}>
            O nas
          </NavLink>
          <NavLink to='/kontakt' className={styles.link}>
            Kontakt
          </NavLink>
        </nav>

        <Link to='/oferta' className={styles['oferta-link']}>
          <div className={styles['button-oferta']}>Oferta kursów</div>
        </Link>
      </div>

      <div className={styles['nav-800']}>
        <div className={styles['logo-800']}>
          <Link to='/'>
            <img
              src={logo}
              alt='Excel na Wypasie'
              width={'150px'}
              height={'180.766px'}
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
                to='/kursy'
                className={`${styles['link-800']}`}
                onClick={menuHandler}
              >
                Szkolenia
              </NavLink>
              <NavLink
                to='/o-nas'
                className={styles['link-800']}
                onClick={menuHandler}
              >
                O nas
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
                Oferta kursów
              </NavLink>
            </nav>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Nav;
