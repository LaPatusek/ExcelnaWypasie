import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header';
import styles from './Main.module.css';

export default function Main() {
  return (
    <Fragment>
      <Header />
      <section className={styles.main}>
        <div className={styles.oferta}>
          <div className={styles['left-section']}>
            <h1>Oferujemy kursy Excel</h1>
            <Link to='/oferta'> Oferta </Link>
          </div>
          <div className={`${styles['right-section']} grid`}>
              <div /> <div className={styles.content}></div>
              <div className={styles.content}></div> <div />
              <div /> <div className={styles.content}></div>
          </div>
        </div>
      </section>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className={styles['flipped-wave']}
      >
        <path
          fill='#21a366'
          fillOpacity='1'
          d='M0,256L21.8,224C43.6,192,87,128,131,128C174.5,128,218,192,262,224C305.5,256,349,256,393,224C436.4,192,480,128,524,133.3C567.3,139,611,213,655,240C698.2,267,742,245,785,240C829.1,235,873,245,916,218.7C960,192,1004,128,1047,106.7C1090.9,85,1135,107,1178,138.7C1221.8,171,1265,213,1309,218.7C1352.7,224,1396,192,1418,176L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z'
        ></path>
      </svg>
    </Fragment>
  );
}
