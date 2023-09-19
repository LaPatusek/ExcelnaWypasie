import { Call, Location, TickCircle } from 'iconsax-react';
import { Fragment, useRef, useState } from 'react';
import useInput from '../Components/hooks/useInput';
import styles from './Kontakt.module.css';

const Kontakt = () => {
  const [formIsSent, setFormIsSent] = useState(false);
  const formRef = useRef();

  const {
    value: enteredName,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
    reset: nameReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredTopic,
    isValid: topicIsValid,
    valueChangeHandler: topicChangeHandler,
    inputBlurHandler: topicBlurHandler,
    hasError: topicHasError,
    reset: topicReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredMail,
    isValid: mailIsValid,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    hasError: mailHasError,
    reset: mailReset,
  } = useInput((value) => value.trim().includes('@'));

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    hasError: messageHasError,
    reset: messageReset,
  } = useInput((value) => value.trim() !== '');

  let formIsValid = false;

  if (messageIsValid && topicIsValid && nameIsValid && mailIsValid) {
    formIsValid = true;
  }

  const formHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    setFormIsSent(true);
    nameReset();
    topicReset();
    mailReset();
    messageReset();
  };

  const resetHandler = (e) => {
    e.preventDefault();

    nameReset();
    topicReset();
    mailReset();
    messageReset();
  };

  return (
    <Fragment>
      <div className={styles.title}>
        <h2>Kontakt</h2>
        <section className={`${styles['first-section']} grid`}>
          <div className={styles.container}>
            <Location variant='Bold' size='40px' /> <h3>Adres</h3>
            <p>
              Excel Na Wypasie
              <br /> Selenbit Eryk Trojanowski
              <br /> Jawornik 114A <br />
              38-114 Niebylec
            </p>
          </div>
          <div className={styles.container}>
            <Call variant='Bold' size='40px' /> <h3>Telefon</h3>{' '}
            <p> +48 531 771 944</p>
          </div>
          <div className={styles.container}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              fill='#1a1a1a'
              viewBox='0 0 512 512'
            >
              <path d='M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z' />
            </svg>
            <h3>eMail</h3>
            <p>
              <a href='mailto:kontakt@excelnawypasie.pl'>
                kontakt@excelnawypasie.pl
              </a>
            </p>
            <p>
              <a href='mailto:eryktrojanowski@gmail.com'>
                eryktrojanowski@gmail.com
              </a>
            </p>
          </div>
        </section>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          className={styles['flipped-wave']}
        >
          <path
            fill='#ded6c9'
            fillOpacity='1'
            d='M0,256L21.8,224C43.6,192,87,128,131,128C174.5,128,218,192,262,224C305.5,256,349,256,393,224C436.4,192,480,128,524,133.3C567.3,139,611,213,655,240C698.2,267,742,245,785,240C829.1,235,873,245,916,218.7C960,192,1004,128,1047,106.7C1090.9,85,1135,107,1178,138.7C1221.8,171,1265,213,1309,218.7C1352.7,224,1396,192,1418,176L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z'
          ></path>
        </svg>
      </div>

      <div className={`${styles.kontakt} grid`}>
        <section className={styles['left-section']}>
          <h3>Skontaktuj się z nami!</h3>
          <p>
            Naszym celem jest omówienie Twoich potrzeb, odpowiedź na Twoje
            pytania i dostarczenie wszystkich niezbędnych informacji. Nasz
            zespół jest gotowy, aby Ci pomóc w znalezieniu najlepszego
            rozwiązania, które spełni Twoje oczekiwania i cele.
          </p>
        </section>

        <section className={styles['right-section']}>
          <h4>Formularz kontaktowy</h4>
          <form onSubmit={formHandler} ref={formRef}>
            <div className={styles.group}>
              <input
                required='Imie i nazwisko'
                type='text'
                name='user_name'
                id='name'
                autoComplete='false'
                value={enteredName}
                className={styles.input}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
              />
              <span className={styles.bar}></span>
              <label htmlFor='name'>Imie i nazwisko </label>
              {nameHasError && <p>Wprowadź imie i nazwisko</p>}
            </div>

            <div className={styles.group}>
              <input
                required='Temat'
                id='topic'
                name='user_topic'
                type='text'
                autoComplete='false'
                value={enteredTopic}
                className={styles.input}
                onChange={topicChangeHandler}
                onBlur={topicBlurHandler}
              />
              <span className={styles.bar}></span>
              <label htmlFor='topic'>Temat</label>
              {topicHasError && <p>Wprowadź temat</p>}
            </div>

            <div className={styles.group}>
              <input
                required='Adres email'
                id='mail'
                name='user_email'
                value={enteredMail}
                type='text'
                autoComplete='false'
                className={styles.input}
                onChange={mailChangeHandler}
                onBlur={mailBlurHandler}
              />
              <span className={styles.bar}></span>
              <label htmlFor='mail'>Adres email </label>
              {mailHasError && <p>Wprowadź prawidłowy mail</p>}
            </div>

            <div className={styles.group}>
              <textarea
                required='Twoja wiadomość'
                id='message'
                name='message'
                value={enteredMessage}
                autoComplete='false'
                className={styles.input}
                rows='6'
                onChange={messageChangeHandler}
                onBlur={messageBlurHandler}
              />
              <span className={styles.bar}></span>
              <label htmlFor='message'>Twoja wiadomość</label>
              {messageHasError && <p>Wprowadź wiadomość</p>}
            </div>

            <div className={styles.buttons}>
              <button className={styles['reset-button']} onClick={resetHandler}>
                Reset
              </button>
              <button
                className={styles['submit-button']}
                value='Send'
                type='submit'
              >
                Wyślij
              </button>
            </div>
            {formIsSent && (
              <div className={styles['mess-after-form']}>
                <TickCircle variant='Bold' size='32' />
                <p>Dziękujemy za kontakt!</p>
              </div>
            )}
          </form>
        </section>
      </div>
    </Fragment>
  );
};

export default Kontakt;
