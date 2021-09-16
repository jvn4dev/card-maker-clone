import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './add_form.module.css';

const AddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

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
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };

    // 입력폼중 하나라도 입력해야 add가 눌리도록 그렇지 않으면 양식을 채우라는 alert
    if (
      nameRef.current.value ||
      companyRef.current.value ||
      titleRef.current.value ||
      emailRef.current.value ||
      messageRef.current.value
    ) {
      onAdd(newCard);
    } else {
      alert('양식을 채워주세요!');
    }

    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
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
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <div className={styles.addButton}>
        <Button name="Add" onClick={handleAddClick} />
      </div>
    </form>
  );
};

export default AddForm;
