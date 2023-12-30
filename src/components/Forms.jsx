import React, { useState } from 'react';
import styles from './CreateGroupForm.module.css'; // Import your CSS file for styling

const Forms = ({ onClose, onSubmit }) => {
  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with groupName and selectedColor, such as storing them or making an API call
    const formData = { groupName, selectedColor };
    onSubmit(formData);
    console.log('Submitted:', { formData });
  };

  return (
    <div className={styles.group_form}>
      <p className={styles.label}>Create New Notes Group</p>
        <div style={{ display: 'flex' }}>
        <p className={styles.inps}> Group Name: </p>
        <input
          type="text"
          placeholder='Enter your group name...'
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        </div>
        <div className={styles.color_picker_container}>
          <p className={styles.inps}>Choose colour:</p>
          {['red', 'blue', 'green', 'yellow', 'purple'].map((color, index) => (
            <div
              key={index}
              className={`${styles.colorOption} ${selectedColor === color ? styles.selected : ''}`}
              style={{
                backgroundColor: color,
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
        <button className={styles.butn}type="submit" onClick={handleSubmit}>Create</button>
    </div>
  );
};

export default Forms;
