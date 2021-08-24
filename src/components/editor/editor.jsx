import React from 'react';
import AddForm from '../add_form/add_form';
import EditForm from '../edit_form/edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, onAdd }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    <ul className={styles.editFormList}>
      {cards.map((card) => {
        return <EditForm key={card.id} card={card} />;
      })}
      <AddForm onAdd={onAdd} />
    </ul>
  </section>
);

export default Editor;
<h1>Editor</h1>;
