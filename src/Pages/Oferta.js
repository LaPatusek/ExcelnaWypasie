import { Calendar1, CalendarAdd, Clock, People } from 'iconsax-react';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Tick from '../Components/Elements/Tick';
import styles from './Oferta.module.css';

export default function Oferta() {
  const [bonusOffers, setBonusOffers] = useState(false);

  const offerFunction = () => {
    setBonusOffers((s) => !s);
  };

  return (
    <div className={styles.oferta}>
      <div className={styles['oferta-header']}>
        <h1>Excel na Wypasie</h1>
        <h2>
          Dołącz do nas i naucz się programu Excel <br /> w ekspresowym tempie!
        </h2>
      </div>

      <div className={styles['flipped-wave-first']}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#21a366'
            fillOpacity='1'
            d='M0,256L21.8,224C43.6,192,87,128,131,128C174.5,128,218,192,262,224C305.5,256,349,256,393,224C436.4,192,480,128,524,133.3C567.3,139,611,213,655,240C698.2,267,742,245,785,240C829.1,235,873,245,916,218.7C960,192,1004,128,1047,106.7C1090.9,85,1135,107,1178,138.7C1221.8,171,1265,213,1309,218.7C1352.7,224,1396,192,1418,176L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z'
          ></path>
        </svg>
      </div>

      <div className={`${styles['zalety']} grid`}>
        <div className={`${styles['zalety-container']} grid`}>
          <Clock size='60' color='#fff' variant='Bold' />
          <h3>
            +50h
            <br /> materiałów
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dolor est,
          </p>
        </div>

        <div className={`${styles['zalety-container']} grid`}>
          <People size='60' color='#fff' variant='Bulk' />
          <h3>
            Szybki
            <br /> support
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dolor est,
          </p>
        </div>

        <div className={`${styles['zalety-container']} grid`}>
          <Calendar1 size='60' color='#fff' variant='Bulk' />
          <h3>
            Aktualne <br /> dane
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dolor est,
          </p>
        </div>

        <div className={`${styles['zalety-container']} grid`}>
          <CalendarAdd size='60' color='#fff' variant='Bold' />
          <h3>
            Regularne
            <br /> aktualizacje
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dolor est,
          </p>
        </div>
      </div>

      <div className={styles['flipped-wave']}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#8d6950'
            fillOpacity='1'
            d='M0,256L21.8,224C43.6,192,87,128,131,128C174.5,128,218,192,262,224C305.5,256,349,256,393,224C436.4,192,480,128,524,133.3C567.3,139,611,213,655,240C698.2,267,742,245,785,240C829.1,235,873,245,916,218.7C960,192,1004,128,1047,106.7C1090.9,85,1135,107,1178,138.7C1221.8,171,1265,213,1309,218.7C1352.7,224,1396,192,1418,176L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z'
          ></path>
        </svg>
      </div>

      <div className={styles['oferta-wrap']}>
        <h2>Poziomy</h2>
        <div className={`${styles['oferta']} grid`}>
          <div className={`${styles['oferta-container']} ${styles.brown}`}>
            <h3>poziom 1</h3>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            <div className={`${styles.list} ${styles['brown-list']}`}>
              <ol>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                </li>
                {bonusOffers && (
                  <Fragment>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    </li>
                  </Fragment>
                )}
              </ol>
              {!bonusOffers && (
                <button onClick={offerFunction}>Zobacz pełną ofertę</button>
              )}
            </div>
            <h5>Cena zł</h5>
            <button className={styles['buy-button']}>
              Rozpocznij już teraz
            </button>

            <Link to='/' className={styles['container-link']}>
              Dowiedz się więcej
            </Link>
          </div>

          <div className={`${styles['oferta-container']} ${styles.green}`}>
            <h3>poziom 2</h3>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            <div className={`${styles.list} ${styles['green-list']}`}>
              <ol>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                </li>
                {bonusOffers && (
                  <Fragment>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    </li>
                  </Fragment>
                )}
              </ol>
              {!bonusOffers && (
                <button onClick={offerFunction}>Zobacz pełną ofertę</button>
              )}
            </div>
            <h5>Cena zł</h5>
            <button className={styles['buy-button']}>
              Rozpocznij już teraz
            </button>

            <Link to='/' className={styles['container-link']}>
              Dowiedz się więcej
            </Link>
          </div>

          <div className={`${styles['oferta-container']} ${styles.blue}`}>
            <h3>poziom 3</h3>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            <div className={`${styles.list} ${styles['blue-list']}`}>
              <ol>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                </li>
                {bonusOffers && (
                  <Fragment>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,
                    </li>
                  </Fragment>
                )}
              </ol>
              {!bonusOffers && (
                <button onClick={offerFunction}>Zobacz pełną ofertę</button>
              )}
            </div>
            <h5>Cena zł</h5>
            <button className={styles['buy-button']}>
              Rozpocznij już teraz
            </button>

            <Link to='/' className={styles['container-link']}>
              Dowiedz się więcej
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
