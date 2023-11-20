import React from 'react';
import { Link } from 'react-router-dom';
import cowColors from '../Assets/cow-colors.webp';
import logo from '../Assets/excel_logo_png.webp';
import styles from './PageNotFound.module.css';

const PageNotFound: React.FC = () => {
  return (
    <div className={`${styles.wrap} grid`}>
      <div className={`${styles['page-not-found']} flex`}>
        <img
          src={logo}
          alt='Excel na Wypasie - Kurs Online Excel'
          height={'300px'}
          width={'253px'}
          className={styles.logo}
        />
        <div className={styles['text-section']}>
          <h2>Strony nie znaleziono</h2>
          <span className={styles['error-code']}>
            4
            <img src={cowColors} height={'40px'} width={'40px'} alt='' />4
          </span>
          <div className={styles.buttons}>
            <div className={`${styles.link} grid`}>
              <Link to='/'>Strona główna</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
