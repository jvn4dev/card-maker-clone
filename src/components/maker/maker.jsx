import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const history = useHistory();

  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: 'Chung',
      company: 'Zepeto',
      title: 'Front-end Developer',
      email: 'jvn4develop@gmail.com',
      message: "Don't be a code Monkey",
      theme: 'dark',
      fileName: 'chung.png',
      fileURL: './images/default_logo.png',
    },
    2: {
      id: 2,
      name: 'Kwon',
      company: 'LH',
      title: 'daeri',
      email: 'decyj@lh.or.kr',
      message: "Don't be a code Monkey",
      theme: 'light',
      fileName: 'chung.png',
      fileURL: './images/default_logo.png',
    },
    3: {
      id: 3,
      name: 'MR.NOBODY',
      company: 'Zepeto',
      title: 'Front-end Developer',
      email: 'jvn4develop@gmail.com',
      message: "Don't be a code Monkey",
      theme: 'colorful',
      fileName: 'chung.png',
      fileURL: './images/default_logo.png',
    },
  });

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const newCards = { ...cards };
      newCards[card.id] = card;
      return newCards;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const newCards = { ...cards };
      delete newCards[card.id];
      return newCards;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          onAdd={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
