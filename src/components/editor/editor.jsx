import React from 'react';
import AddForm from '../add_form/add_form';
import EditForm from '../edit_form/edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, onAdd, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    <ul className={styles.editFormList}>
      {Object.keys(cards).map((key) => {
        return (
          <EditForm
            key={key}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
        );
      })}
      <AddForm onAdd={onAdd} />
    </ul>
  </section>
);

export default Editor;
<h1>Editor</h1>;
