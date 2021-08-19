import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const history = useHistory();

  const [cards, setCards] = useState([
    {
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
    {
      id: 2,
      name: 'Kwon',
      company: 'LH',
      title: 'daeri',
      email: 'jvn4develop@gmail.com',
      message: "Don't be a code Monkey",
      theme: 'light',
      fileName: 'chung.png',
      fileURL: './images/default_logo.png',
    },
    {
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
  ]);

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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
