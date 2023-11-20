import React from 'react';
import pastwisko from '../Assets/cow-pasture.webp';
import styles from './Soon.module.css';

const Soon: React.FC = () => {
  return (
    <div className={styles.projekty}>
      <img
        src={pastwisko}
        alt='Kursy Excel Online'
        width='100%'
        height='100%'
      />
      <h2>Już wkrótce</h2>
    </div>
  );
};

export default Soon;
