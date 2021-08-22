import React from 'react';
import EditForm from '../edit_form/edit_form';
import styles from './editor.module.css';

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    <ul className={styles.editFormList}>
      {cards.map((card) => {
        return <EditForm />;
      })}
    </ul>
  </section>
);

export default Editor;
<h1>Editor</h1>;
