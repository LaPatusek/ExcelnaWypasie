import { Calendar1, CalendarAdd, Clock, People } from 'iconsax-react';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import instructor from '../Components/Assets/Eryk.webp';
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
        <span>Excel na Wypasie</span>
        <h1>
          Dołącz do nas i naucz się programu Excel <br /> w ekspresowym tempie!
        </h1>
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
            Oferujemy ponad 50 godzin materiałów szkoleniowych, które pozwolą Ci
            opanować Excel od podstaw do zaawansowanych technik.
          </p>
        </div>

        <div className={`${styles['zalety-container']} grid`}>
          <People size='60' color='#fff' variant='Bulk' />
          <h3>
            Szybki
            <br /> support
          </h3>
          <p>
            Nasz zespół wsparcia jest gotowy do odpowiedzi na Twoje pytania i
            rozwiązywania problemów, zapewniając Ci pomoc na każdym etapie
            nauki.
          </p>
        </div>

        <div className={`${styles['zalety-container']} grid`}>
          <Calendar1 size='60' color='#fff' variant='Bulk' />
          <h3>
            Aktualne <br /> dane
          </h3>
          <p>
            Nasze kursy są zawsze oparte na najnowszych informacjach i
            technologiach, abyś mógł być na bieżąco z najważniejszymi aspektami
            Excela.
          </p>
        </div>

        <div className={`${styles['zalety-container']} grid`}>
          <CalendarAdd size='60' color='#fff' variant='Bold' />
          <h3>
            Regularne
            <br /> aktualizacje
          </h3>
          <p>
            Nasza platforma jest regularnie aktualizowana, dzięki czemu możesz
            mieć pewność, że masz dostęp do najnowszych narzędzi i treści.
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
        <h3 className={styles['sub-title']}>
          Wejdź na wyższy poziom z naszymi kursami
        </h3>
        <div className={`${styles['oferta']} grid`}>
          <div className={`${styles['oferta-container']} ${styles.brown}`}>
            <h3>poziom 1</h3>
            <h4>
              Rozpocznij naukę Excela od podstaw i zdobądź pewność w tworzeniu
              arkuszy kalkulacyjnych.
            </h4>
            <div className={`${styles.list} ${styles['brown-list']}`}>
              <ol>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Wprowadzenie do arkuszy kalkulacyjnych i funkcji Excela.
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Omówienie interfejsu użytkownika: wstążka, komórki, arkusze,
                  pasek formuł.
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Tworzenie nowego pliku, zapisywanie i otwieranie istniejącego.
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Tworzenie i zarządzanie arkuszami.
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Formatowanie komórek: czcionka, kolor, pogrubienie, kursywa
                  itp.
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Używanie operacji matematycznych w formułach.
                </li>
                {bonusOffers && (
                  <Fragment>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Praca grupowa - komentowanie
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Wprowadzenie do funkcji i formuł: składnia i zastosowanie
                      na prostych przykładach.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Kopiowanie, wycinanie, wklejanie danych oraz korzystanie z
                      opcji wklejania specjalnego.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Używanie podstawowych funkcji wbudowanych: SUMA, ŚREDNIA,
                      MAX, MIN.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Wprowadzanie i formatowanie danych: tekst, liczby, daty,
                      waluty.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Tworzenie i formatowanie tabel danych.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Automatyczne uzupełnianie danych.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Autouzupełnianie, adresowanie względne.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Sortowanie danych: rosnąco, malejąco.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Filtorwanie danych oraz filtrowanie wielopoziomowe.
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
              <Link to='/excel-course'>Rozpocznij już teraz</Link>
            </button>
          </div>

          <div className={`${styles['oferta-container']} ${styles.green}`}>
            <h3>poziom 2</h3>
            <h4>
              Zyskaj dostęp do zaawansowanych kursów, aby opanować skomplikowane
              formuły i analizować dane w Excelu.
            </h4>
            <div className={`${styles.list} ${styles['green-list']}`}>
              <ol>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Adresowanie bezwzględne oraz mieszane.
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Operacje na tekście, zmiana wielkości liter, łączenie oraz
                  wyciąganie znaków.
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Funkcje logiczne: JEŻELI, WIELR, ORAZ, LUB, NIE.
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Funkcje łączące tekst, odczytujące określone fragmenty.
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Grupowanie, filtrowanie i ukrywanie danych w tabelach
                  przestawnych.
                </li>

                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Funkcja WYSZUKAJ.PIONOWO
                </li>
                {bonusOffers && (
                  <Fragment>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Funkcje warunkowe LICZ.JEŻELI, ILE.NIEPUSTYCH.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Tworzenie i zarządzanie tabelami przestawnymi.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Fukcje daty i czasu
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Tworzenie interaktywnych formularzy za pomocą kontrolek.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Zabezpieczanie komórek przed edycją: blokowanie i
                      odblokowywanie.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Ustalanie haseł dla plików i arkuszy.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Wprowadzenie do systemu wizualizacji danych - wykresy.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Formatowanie warunkowe
                    </li>
                  </Fragment>
                )}
              </ol>
              {!bonusOffers && (
                <button onClick={offerFunction}>Zobacz pełną ofertę</button>
              )}
            </div>

            <div className={styles['start-container']}>
              <h5>Cena zł</h5>
              <button className={styles['buy-button']}>
                <Link to='/excel-course'>Rozpocznij już teraz</Link>
              </button>
            </div>
          </div>

          <div className={`${styles['oferta-container']} ${styles.blue}`}>
            <h3>poziom 3</h3>
            <h4>
              Stań się ekspertem Excela dzięki kursom programowania w VBA i
              zaawansowanej analizy danych.
            </h4>
            <div className={`${styles.list} ${styles['blue-list']}`}>
              <ol>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Operacje statystyczne
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Funckje finansowe
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Import / eksport danych do CSV, PDF
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Tworzenie interaktywnych dashboardów: łączenie różnych arkuszy
                  i wykresów.
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Wprowadzenie do makr: nagrywanie i edycja makr.
                </li>
                <li>
                  <i aria-hidden='true'>
                    <Tick />
                  </i>
                  Wprowadzenie do języka VBA: edytor VBA, zmienne, pętle,
                  instrukcje warunkowe.
                </li>
                {bonusOffers && (
                  <Fragment>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Udostępnianie plików online za pomocą platformy chmurowej.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Tworzenie scenariuszy w oparciu o różne warianty
                      kalkulacji.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Generowanie raportów.
                    </li>
                    <li>
                      <i aria-hidden='true'>
                        <Tick />
                      </i>
                      Analiza danych
                    </li>
                  </Fragment>
                )}
              </ol>
              {!bonusOffers && (
                <button onClick={offerFunction}>Zobacz pełną ofertę</button>
              )}
            </div>
            <div className={styles['start-container']}>
              <h5>Cena zł</h5>
              <button className={styles['buy-button']}>
                <Link to='/excel-course'>Rozpocznij już teraz</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className={styles['wave-spacer-flipped']}
      >
        <path
          fill='#21a366'
          fillOpacity='1'
          d='M0,128L60,112C120,96,240,64,360,53.3C480,43,600,53,720,74.7C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
        ></path>
      </svg>

      <div className={`${styles.offer} grid`}>
        <h2>Oferujemy kursy wysokiej jakości</h2>
        <h3>
          Dostosowane zarówno do początkujących, którzy chcą opanować podstawy
          arkuszy kalkulacyjnych, jak i dla zaawansowanych użytkowników,
          pragnących doskonalić swoje umiejętności w obszarze zaawansowanych
          technik analizy danych i automatyzacji procesów.
        </h3>
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className={styles['wave-spacer']}
      >
        <path
          fill='#21a366'
          fillOpacity='1'
          d='M0,128L60,112C120,96,240,64,360,53.3C480,43,600,53,720,74.7C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
        ></path>
      </svg>

      <div className={styles.preview}>
        <h3>Program kursu</h3>
        <div className={styles.program}>
          <h4 className={styles['brown-program--header']}>Początek</h4>
          <ol className={styles['brown-program']}>
            <li>
              <Link to='/excel-course/program/witaj'>
                <span>Witaj!</span>
                <div className={styles['li-button']}>Zobacz</div>
              </Link>
            </li>
            <li>
              <Link to='/excel-course/program/witaj'>
                <span>Witaj!</span>
                <div className={styles['li-button']}>Zobacz</div>
              </Link>
            </li>
            <li>
              <Link to='/excel-course/program/witaj'>
                <span>Witaj!</span>
                <div className={styles['li-button']}>Zobacz</div>
              </Link>
            </li>
          </ol>

          <h4 className={styles['brown-program--header']}>Poziom 1</h4>
          <ol className={styles['brown-program']}>
            <li>
              <Link to='/excel-course/program/witaj'>
                <span>
                  Wprowadzenie do arkuszy kalkulacyjnych i funkcji Excela.
                </span>
                <div className={styles['li-button']}>Start</div>
              </Link>
            </li>
            <li>
              <Link to='/excel-course/program/witaj'>
                <span>
                  Omówienie interfejsu użytkownika: wstążka, komórki, arkusze,
                  pasek formuł.
                </span>
                <div className={styles['li-button']}>Start</div>
              </Link>
            </li>
            <li>
              <Link to='/excel-course/program/witaj'>
                <span>
                  Tworzenie nowego pliku, zapisywanie i otwieranie istniejącego.
                </span>
                <div className={styles['li-button']}>Start</div>
              </Link>
            </li>
          </ol>

          <h4 className={styles['green-program--header']}>Poziom 2</h4>
          <ol className={styles['green-program']}>
            <li>
              <Link to='/excel-course/program/witaj'>
                <span>
                  Wprowadzenie do arkuszy kalkulacyjnych i funkcji Excela.
                </span>
                <div className={styles['li-button']}>Start</div>
              </Link>
            </li>
            <li>
              <Link to='/excel-course/program/witaj'>
                <span>
                  Omówienie interfejsu użytkownika: wstążka, komórki, arkusze,
                  pasek formuł.
                </span>
                <div className={styles['li-button']}>Start</div>
              </Link>
            </li>
            <li>
              <Link to='/excel-course/program/witaj'>
                <span>
                  Tworzenie nowego pliku, zapisywanie i otwieranie istniejącego.
                </span>
                <div className={styles['li-button']}>Start</div>
              </Link>
            </li>
          </ol>

          <h4 className={styles['blue-program--header']}>Poziom 3</h4>
          <ol className={styles['blue-program']}>
            <li>
              <Link to='/excel-course/program/witaj'>
                <span>
                  Wprowadzenie do arkuszy kalkulacyjnych i funkcji Excela.
                </span>
                <div className={styles['li-button']}>Start</div>
              </Link>
            </li>
            <li>
              <Link to='/excel-course/program/witaj'>
                <span>
                  Omówienie interfejsu użytkownika: wstążka, komórki, arkusze,
                  pasek formuł.
                </span>
                <div className={styles['li-button']}>Start</div>
              </Link>
            </li>
            <li>
              <Link to='/excel-course/program/witaj'>
                <span>
                  Tworzenie nowego pliku, zapisywanie i otwieranie istniejącego.
                </span>
                <div className={styles['li-button']}>Start</div>
              </Link>
            </li>
          </ol>
        </div>
      </div>

      <div className={styles['instruktor-wrap']}>
        <h4>Twój instruktor</h4>
        <div className={`${styles.instruktor} grid`}>
          <div className={styles['instruktor-image']}>
            <img
              src={instructor}
              width={'150px'}
              height={'150px'}
              alt='Instruktor kursów Excel'
            />
            <h5>Eryk Trojanowski</h5>
          </div>
          <p>
            Przez ponad <span className={styles.highlight}> dekadę </span> nieprzerwanie dostarcza wysokiej jakości
            szkolenia i wsparcie dla szerokiej gamy klientów. Jego pasja do
            nauczania oraz umiejętność przekazywania wiedzy uczyniły go jednym z
            najbardziej poszukiwanych ekspertów w swojej dziedzinie.
          </p>
        </div>
      </div>
    </div>
  );
}
