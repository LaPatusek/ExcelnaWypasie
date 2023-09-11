import styles from './HeaderButton.module.css';

export default function HeaderButton() {
  return (
    <div className={styles.button}>
      <button className={`${styles['c-button']} ${styles['c-button--gooey']}`}>
        Zacznij już teraz
        <div className={styles['c-button__blobs']}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
        <defs>
          <filter id='goo'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='10'
              result='blur'
            ></feGaussianBlur>
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
              result='goo'
            ></feColorMatrix>
            <feBlend in='SourceGraphic' in2='goo'></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
