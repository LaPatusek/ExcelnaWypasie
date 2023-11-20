import emailjs from '@emailjs/browser';
import { ArrowRight3, Copyright, Heart, Location } from 'iconsax-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput.tsx';
import styles from './Footer.module.css';

declare var process: {
  env: {
    REACT_APP_SMTP_ID: string;
    REACT_APP_NEWS_ID: string;
    REACT_APP_PUBLIC_KEY: string;
  };
};

const Footer: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const newsletterRef = useRef(null);

  const {
    value: enteredNews,
    isValid: newsIsValid,
    valueChangeHandler: newsChangeHandler,
    inputBlurHandler: newsBlurHandler,
    hasError: newsHasError,
    reset: newsReset,
  } = useInput({
    validateValue: (value: string) => value.trim().includes('@'),
  });

  const newsletterFunction = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsIsValid) {
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SMTP_ID,
        process.env.REACT_APP_NEWS_ID,
        newsletterRef.current!,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    newsReset();
    setFormSent(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setFormSent(false);
    }, 15000);
  }, [formSent]);

  return (
    <div className={styles.footer}>
      <div className={`${styles.boxes} grid`}>
        <div className={styles.container}>
          <h2>Kontakt</h2>
          <div className={styles.location}>
            <div className={styles['pin-container']}>
              <Location variant='Bold' size='26px' color='#fff' />
            </div>
            <p>
              Excel na Wypasie <br />
              Selenbit Eryk Trojanowski <br />
              Jawornik 114A <br />
              38-114 Niebylec
            </p>
          </div>

          <div className={styles.mail}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='26'
              fill='#fff'
              viewBox='0 0 512 512'
            >
              <path d='M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z' />
            </svg>

            <a href='mailto:kontakt@excelnawypasie.pl'>
              kontakt@excelnawypasie.pl
            </a>
          </div>
        </div>
        <div className={styles.container}>
          <h2>Strony</h2>
          <div className={`${styles.links} grid`}>
            <Link to='/' className={styles.link}>
              <ArrowRight3 variant='Broken' color='#FFF' size='20px' /> Strona
              główna
            </Link>
            <Link to='/kursy' className={styles.link}>
              <ArrowRight3 variant='Broken' color='#FFF' size='20px' /> Kursy
            </Link>
            <Link to='/o-nas' className={styles.link}>
              <ArrowRight3 variant='Broken' color='#FFF' size='20px' /> O nas
            </Link>
            <Link to='/kontakt' className={styles.link}>
              <ArrowRight3 variant='Broken' color='#FFF' size='20px' /> Kontakt
            </Link>
            <Link to='/oferta' className={styles.link}>
              <ArrowRight3 variant='Broken' color='#FFF' size='20px' /> Oferta
            </Link>
          </div>
        </div>

        <div
          className={`${styles['newsletter']} ${
            newsHasError ? styles.error : ''
          }`}
        >
          <h2>Zapisz się do naszego newslettera</h2>
          <h3>Bądź na bieżąco z aktualizacjami kursu.</h3>
          <form onSubmit={newsletterFunction} ref={newsletterRef}>
            <input
              type='email'
              name='user_email'
              placeholder='Wpisz swój adres e-mail'
              id='newsletter'
              value={enteredNews}
              onBlur={newsBlurHandler}
              onChange={newsChangeHandler}
            />{' '}
            <button> Zapisz się</button>
          </form>

          {formSent && (
            <p>
              {' '}
              Dziękujemy! <Heart
                variant='Bold'
                size='22px'
                color='#f1f1f1'
              />{' '}
            </p>
          )}
        </div>
      </div>

      <div className={styles.copyright}>
        <hr />
        <p>
          <Copyright size='16px' /> Excel na Wypasie 2023. Wszelkie prawa
          zastrzeżone.
        </p>
      </div>
    </div>
  );
};

export default Footer;
