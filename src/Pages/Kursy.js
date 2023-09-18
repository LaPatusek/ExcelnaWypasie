import szkolenieOnline from '../Components/Assets/CourseOnline.webp';
import szkolenieStacjonarne from '../Components/Assets/Stacjonarny.webp';
import styles from './Kursy.module.css';

export default function Kursy() {
  return (
    <div className={styles.kurs}>
      <div className={styles['kurs-header']}>
        <h1>Excel na Wypasie</h1>
        <h2>
          Oferujemy szkolenia online <br /> jak i szkolenia stacjonarne{' '}
        </h2>
      </div>

      <div className={`${styles.container} grid`}>
        <div className={styles['container-text']}>
          <h3>Szkolenia stacjonarne</h3>
          <p>
            Nasze profesjonalne szkolenia prowadzone są przez doświadczonych
            ekspertów, którzy w przystępny sposób przekazują praktyczną wiedzę.
            Nasi uczestnicy mają szansę na indywidualne wsparcie i skupienie na
            własnych celach, co pozwala im skutecznie wykorzystać potencjał tego
            popularnego narzędzia w pracy i życiu zawodowym.
          </p>
        </div>
        <img
          src={szkolenieStacjonarne}
          alt='Szkolenia stacjonarne'
          width='100%'
          height='auto'
        />
      </div>

      <div className={`${styles.container} grid`}>
        <img
          src={szkolenieOnline}
          alt='Szkolenia online'
          width='100%'
          height='auto'
          className={styles['second-image']}
        />
        <div className={styles['container-text']}>
          <h3>Szkolenia online</h3>
          <p>
            Dzięki naszym interaktywnym platformom szkoleniowym, uczestnicy mają
            dostęp do bogatej bazy materiałów edukacyjnych, wideo lekcji oraz
            praktycznych ćwiczeń, które pozwalają na naukę w dogodnym dla nich
            tempie. Nasze szkolenia online zapewniają elastyczność, umożliwiając
            dostęp do treści szkoleniowych z dowolnego miejsca i urządzenia, co
            znacznie ułatwia proces nauki i pozwala na efektywne wykorzystanie
            potencjału programu Excel w codziennej pracy.
          </p>
        </div>
      </div>

      <div className={styles.zapis}>
        <h4>
          Skontaktuj się z nami już dziś <br /> i zarezerwuj szkolenie z linku
          poniżej!
        </h4>
        <a
          href='https://www.excelrzeszow.pl/#/wycena-szkolenie'
          target='_blank'
          className={styles['szkolenia-link']}
          rel='noreferrer'
        >
          {' > '} Excel w Rzeszowie
        </a>
      </div>
    </div>
  );
}
