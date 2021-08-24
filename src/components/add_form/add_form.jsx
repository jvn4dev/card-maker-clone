import React, { useRef } from 'react';
import Button from '../button/button';
import ImageInput from '../image_input/image_input';
import styles from './add_form.module.css';

const AddForm = ({ onAdd }) => {
  const onSubmit = () => {};

  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleAddClick = (event) => {
    event.preventDefault();

    const newCard = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      theme: themeRef.current.value,
      fileName: '',
      fileURL: '',
    };

    onAdd(newCard);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.text}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        ref={companyRef}
        className={styles.text}
        type="text"
        name="company"
        placeholder="Company"
      />
      <select
        ref={themeRef}
        className={styles.theme}
        name="theme"
        placeholder="Theme"
      >
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.text}
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        ref={emailRef}
        className={styles.text}
        type="text"
        name="email"
        placeholder="Email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="put your message here"
      ></textarea>
      <div className={styles.imageInput}>
        <ImageInput name="Upload" onClick={onSubmit} />
      </div>
      <div className={styles.addButton}>
        <Button name="Add" onClick={handleAddClick} />
      </div>
    </form>
  );
};

export default AddForm;
