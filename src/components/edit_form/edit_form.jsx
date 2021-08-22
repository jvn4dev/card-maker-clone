import React from 'react';
import styles from './edit_form.module.css';

const EditForm = (props) => {
  return (
    <form>
      <input type="text" />
      <input type="text" />
      <select>
        <option value="" selected="selected" hidden="hidden">
          Choose Theme
        </option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input type="text" />
      <input type="text" />
      <textarea placeholder="messages"></textarea>
    </form>
  );
};

export default EditForm;
