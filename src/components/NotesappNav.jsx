import React, { useState, useEffect } from 'react';
import ModalComponent from "./ModalComponent";
import NotesBody from "./NotesappBody"
import styles from "./NotesappNav.module.css";

const NotesappNav = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formDataArray, setFormDataArray] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);
  const localStorageKey = 'formData';

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem(localStorageKey));
    if (storedFormData) {
      setFormDataArray(storedFormData);
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  
  const handleFormSubmit = (data) => {
    const initials = data.groupName.slice(0, 2).toUpperCase();
    const updatedFormData = [...formDataArray, { ...data, initials }];
    setFormDataArray(updatedFormData);

    // Store the data in local storage
    localStorage.setItem(localStorageKey, JSON.stringify(updatedFormData));

    closeModal();
  }

  
  
  const handleDivClick = (object) => {
    setSelectedObject(object); 
  };

  
  return (
    <>
      <div className={styles.left}>
        <p id={styles.pocketNotes}>Pocket Notes</p>
        <div className={styles.notesGroup}>
          <button className={styles.createNote} onClick={openModal}><span style={{fontSize: "40px", alignContent: "baseline"}}>+ </span> Create Notes group</button>
          <ModalComponent
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            onFormSubmit={handleFormSubmit}
          />
          <div className={styles.notesList}>
            {formDataArray.map((formData, index) => (
              <div className={styles.notes} key={index} onClick={() => handleDivClick(formData)}>
                <div className={styles.logo} style={{ backgroundColor: formData.color }}>{formData.initials}</div>
                <p className={styles.noteheading}>{formData.groupName}</p>
              </div>
            ))}
          </div>
        </div>
        <NotesBody selectedObject={selectedObject} />
      </div>  
    </>
  )
}

export default NotesappNav;

