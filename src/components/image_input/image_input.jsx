import React from 'react';
import styles from './image_input.module.css';

const ImageInput = ({ name, onClick }) => (
  <button className={styles.ImageInput} onClick={onClick}>
    {name}
  </button>
);

export default ImageInput;
