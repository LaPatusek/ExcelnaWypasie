import { HambergerMenu } from 'iconsax-react';
import { Fragment, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
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

      <div className={styles['nav-800']}>
        <div className={styles['logo-800']}>
          <Link to='/'>Excel na Wypasie</Link>
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1440 320'
              className={styles['wave-800']}
            >
              <path
                fill='#a37a5c'
                fillOpacity='1'
                d='M0,0L26.7,16C53.3,32,107,64,160,80C213.3,96,267,96,320,106.7C373.3,117,427,139,480,165.3C533.3,192,587,224,640,213.3C693.3,203,747,149,800,112C853.3,75,907,53,960,85.3C1013.3,117,1067,203,1120,218.7C1173.3,235,1227,181,1280,138.7C1333.3,96,1387,64,1413,48L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z'
              ></path>
            </svg>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}
