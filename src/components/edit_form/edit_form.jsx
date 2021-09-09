import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './edit_form.module.css';

const EditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        className={styles.text}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        className={styles.text}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        ref={themeRef}
        className={styles.theme}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.text}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        ref={emailRef}
        className={styles.text}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        value={message}
        placeholder="put your message here"
        onChange={onChange}
      ></textarea>
      <div className={styles.imageInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <div className={styles.delButton}>
        <Button name="Delete" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default EditForm;
