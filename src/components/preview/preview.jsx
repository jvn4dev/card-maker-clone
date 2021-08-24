import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    <ul className={styles.cards}>
      {Object.keys(cards).length === 0 ? (
        <h1 className={styles.noCards}>Please fill the form 📇</h1>
      ) : (
        Object.keys(cards).map((key) => {
          return <Card key={key} card={cards[key]} />;
        })
      )}
    </ul>
  </section>
);

export default Preview;
<h1>Preview</h1>;
