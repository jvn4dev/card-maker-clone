import React from 'react';
import Button from '../button/button';
import ImageInput from '../image_input/image_input';
import styles from './edit_form.module.css';

const EditForm = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input className={styles.text} type="text" name="name" value={name} />
      <input
        className={styles.text}
        type="text"
        name="company"
        value={company}
      />
      <select className={styles.theme} name="theme" value={theme}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input className={styles.text} type="text" name="title" value={title} />
      <input className={styles.text} type="text" name="email" value={email} />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        placeholder="put your message here"
      ></textarea>
      <div className={styles.imageInput}>
        <ImageInput name="Upload" onClick={onSubmit} />
      </div>
      <div className={styles.delButton}>
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default EditForm;
