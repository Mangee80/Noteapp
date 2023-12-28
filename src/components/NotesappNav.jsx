import React, { useState, useEffect } from 'react';
import styles from "./NotesappNav.module.css";
import CreateGroupForm from './Forms';
const NotesappNav = ({ setSelectedObject }) => {

  const [formDataArray, setFormDataArray] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedFormData, setSelectedFormData] = useState(null);
  const localStorageKey = 'formData';

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem(localStorageKey));
    if (storedFormData) {
      setFormDataArray(storedFormData);
    }
  }, []);

  
  const handleFormSubmit = (data) => {
    const initials = data.groupName.slice(0, 2).toUpperCase();
    const updatedFormData = [...formDataArray, { ...data, initials }];
    setFormDataArray(updatedFormData);

    // Store the data in local storage
    localStorage.setItem(localStorageKey, JSON.stringify(updatedFormData));
    

    console.log('Form data submitted:', data);
    setIsFormVisible(false);
  }

  const handleDivClick = (object) => {
    setSelectedObject(object);
    setSelectedFormData(object);
  };
  
  
  return (
    <>
      <div className={styles.left}>
        <p id={styles.pocketNotes}>Pocket Notes</p>
        <div className={styles.notesGroup}>
          <button className={styles.createNote} onClick={() => setIsFormVisible(true)}><span style={{fontSize: "40px", alignContent: "baseline"}}>+ </span> Create Notes group</button>
          <div className={styles.notesList}>
            {formDataArray.map((formData, index) => (
              <div
                className={`${styles.notes} ${selectedFormData === formData ? styles.selected : ''}`}
                key={index}
                onClick={() => handleDivClick(formData)}
              >
                <div className={styles.logo} style={{ backgroundColor: formData.selectedColor }}>{formData.initials}</div>
                <p className={styles.noteheading}>{formData.groupName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isFormVisible && (
        <CreateGroupForm onClose={() => setIsFormVisible(false)} onSubmit={handleFormSubmit} />
      )}
    </>
  )
}

export default NotesappNav;

