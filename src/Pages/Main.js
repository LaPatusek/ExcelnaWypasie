import {
  Crown1,
  Facebook,
  Instagram,
  MoreSquare,
  Profile,
  VideoHorizontal,
} from 'iconsax-react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import instruktor from '../Components/Assets/Eryk.webp';
import Header from '../Components/Header/Header';
import styles from './Main.module.css';

export default function Main() {
  return (
    <Fragment>
      <Header />
      <section className={styles.main}>
        <div className={`${styles.oferta} grid`}>
          <div className={styles['left-section']}>
            <h1>Oferujemy kursy Excel</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum dolor est, euismod eget dignissim quis, finibus sit
              amet turpis. Integer tempor nulla eu orci finibus, sit amet semper
              velit porttitor.
            </p>
            <div className={`${styles['button-container']} grid`}>
              <Link to='/kursy' className={styles['learn-more-button']}>
                <span className={styles.circle} aria-hidden='true'>
                  <span className={`${styles.icon} ${styles.arrow}`}></span>
                </span>
                <span className={styles['button-text']}>
                  Zobacz pełną ofertę
                </span>
              </Link>
            </div>
          </div>
          <div className={`${styles['right-section']} grid`}>
            <div />
            <div className={styles.content}>
              <VideoHorizontal size='44' />
              <h2> Ponad 50 filmów o wysokiej jakości </h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum dolor est, euismod eget dignissim quis, finibus sit
                amet turpis.
              </h3>
            </div>
            <div className={styles.content}>
              <Profile size='44' />
              <h2>Bieżące wsparcie od prowadzących</h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum dolor est, euismod eget dignissim quis, finibus sit
                amet turpis.
              </h3>
            </div>
            <div />
            <div />
            <div className={styles.content}>
              <Crown1 size='44' /> <h2> Certyfikat ukończenia </h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum dolor est, euismod eget dignissim quis, finibus sit
                amet turpis.
              </h3>
            </div>
          </div>
        </div>

        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className={styles['wave-spacer-flipped']}>
          <path
            fill='#21a366'
            fillOpacity='1'
            d='M0,128L60,112C120,96,240,64,360,53.3C480,43,600,53,720,74.7C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
          ></path>
        </svg>

        <div className={`${styles.kontakt} grid`}>
          <h2>Rozwiejemy Twoje wątpliwości!</h2>
          <h3>
            W razie problemów lub niepewności prosimy o{' '}
            <Link to='/kontakt'>Kontakt</Link> lub skorzystanie z naszego{' '}
            <Link to='/o-nas#faq'>FAQ</Link>, który odpowiada na często zadawane
            pytania{' '}
          </h3>
        </div>

        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className={styles['wave-spacer']}>
          <path
            fill='#21a366'
            fillOpacity='1'
            d='M0,128L60,112C120,96,240,64,360,53.3C480,43,600,53,720,74.7C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
          ></path>
        </svg>

        <div className={`${styles.about} grid`}>
          <h3>Poznaj lepiej naszego instruktora</h3>
          <div className={`${styles['about-container']} grid`}>
            <img
              src={instruktor}
              alt='Instruktor szkoleń Excel'
              height='400px'
              width='400px'
            />
            <div className={styles['about-text']}>
              <h4>Eryk Trojanowski</h4>
              <h5>Założyciel & Instruktor</h5>
              <div className={`${styles.socials} grid`}>
                <a
                  href='https://www.facebook.com/ErykTrojanowski'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.Facebook}
                  aria-label='FaceBook'
                >
                  <Facebook size='44' color='#fff' />
                </a>
                <a
                  href='https://www.instagram.com/eryk7777/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.Instagram}
                  aria-label='Instagram'
                >
                  <Instagram size='44' color='#fff' />
                </a>
                <a
                  href='https://www.linkedin.com/in/eryk-trojanowski-7678ab120/'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.Linkedin}
                  aria-label='Linkedin'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='44px'
                    height='44px'
                    fill='#fff'
                    viewBox='0 0 512 512'
                  >
                    <path d='M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z' />
                  </svg>
                </a>
                <Link to='/o-nas'>
                  <MoreSquare size='44' color='#fff' />
                </Link>
              </div>
            </div>
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
