import emailjs from '@emailjs/browser';
import { ArrowRight2, Heart } from 'iconsax-react';
import { useEffect, useRef, useState } from 'react';
import meeting from '../Components/Assets/meeting.webp';
import useInput from '../Components/hooks/useInput';
import faq from '../json/faq.json';
import styles from './About.module.css';

export default function About() {
  const [activeBlock, setActiveBlock] = useState([]);
  const [formSent, setFormSent] = useState(false);
  const newsletterRef = useRef();

  const {
    value: enteredNews,
    isValid: newsIsValid,
    valueChangeHandler: newsChangeHandler,
    inputBlurHandler: newsBlurHandler,
    hasError: newsHasError,
    reset: newsReset,
  } = useInput((value) => value.trim().includes('@'));

  const newsletterFunction = (e) => {
    e.preventDefault();

    if (!newsIsValid) {
      console.log('hybydyż');
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SMTP_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        newsletterRef.current,
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

  const questionFunction = (index) => {
    setActiveBlock((prevBlocks) => {
      if (prevBlocks.includes(index)) {
        return prevBlocks.filter((block) => block !== index);
      } else {
        return [...prevBlocks, index];
      }
    });
  };

  return (
    <div className={styles.about}>
      <div className={styles['about-header']}>
        <div>
          <h1>
            Excel na Wypasie <br />
            Razem możemy <br /> więcej!
          </h1>

          <h2>
            Mamy wieloletnie doświadczenie w prowadzeniu szkoleń stacjonarnych,
            ale teraz skupiamy się na dostarczaniu najwyższej jakości nauki z
            zakresu Excela. Dzięki naszej wiedzy i profesjonalizmowi, nasi
            uczestnicy mogą zdobywać umiejętności związane z arkuszem
            kalkulacyjnym Excel w dogodny dla siebie sposób, dostosowany do
            swojego tempa i harmonogramu. Jeśli szukasz pewnego wyboru dla
            siebie lub swoich kolegów, którzy chcą rozwijać swoją wiedzę z
            Excela, to "Excel na Wypasie" to odpowiedni wybór.
          </h2>
        </div>
        <img
          src={meeting}
          alt='Excel na Wypasie business meeting'
          width='90%'
          height='auto'
        />
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className={styles['flipped-wave-spacer']}
      >
        <path
          fill='#a37a5c'
          fillOpacity='1'
          d='M0,128L60,112C120,96,240,64,360,53.3C480,43,600,53,720,74.7C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
        ></path>
      </svg>

      <div
        className={`${styles['newsletter']} ${
          newsHasError ? styles.error : ''
        }`}
      >
        <h3>Zapisz się do naszego newslettera</h3>
        <h4>
          Bez spamu. Dołącz do naszej społeczności, gdzie dostaniesz dostęp do
          najnowszych aktualizacji.
        </h4>
        <form onSubmit={newsletterFunction} ref={newsletterRef}>
          <input
            name='user_email'
            type='email'
            placeholder='Wpisz swój adres e-mail'
            id='newsletter'
            value={enteredNews}
            onChange={newsChangeHandler}
            onBlur={newsBlurHandler}
          />
          <button>Zapisz się</button>
        </form>
        {formSent && (
          <p>
            Dziękujemy za zaufanie! <Heart variant='Bold' />
          </p>
        )}
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className={styles['wave-spacer']}
      >
        <path
          fill='#a37a5c'
          fillOpacity='1'
          d='M0,128L60,112C120,96,240,64,360,53.3C480,43,600,53,720,74.7C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
        ></path>
      </svg>

      <div className={styles.faq} id='faq'>
        <h3>Często zadawane pytania</h3>
        {faq.map((element) => {
          const isActive = activeBlock.includes(element.number);
          return (
            <div className={styles['question-wrap']} key={element.number}>
              <div
                className={`${styles.question} ${
                  isActive ? styles.active : ''
                }`}
                onClick={() => questionFunction(element.number)}
              >
                <h4>
                  {element.question}{' '}
                  <ArrowRight2 size='22' color='#33c481' variant='Bold' />
                </h4>
              </div>
              {isActive && (
                <div
                  className={styles.answer}
                  onClick={() => questionFunction(element.number)}
                >
                  <p>{element.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
