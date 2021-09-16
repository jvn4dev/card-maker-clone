import React from 'react';
import styles from './card.module.css';

const Card = ({ card }) => {
  const { name, company, title, email, message, theme, fileURL } = card;
  return (
    <li className={`${styles.card} ${getTheme(theme)}`}>
      <img className={styles.image} src={fileURL} alt="profile" />
      <div className={styles.container}>
        <p className={styles.name}>{name}</p>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getTheme(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
