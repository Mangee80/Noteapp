import React, { useState } from 'react';
import Modal from 'react-modal';

function ModalComponent({ isOpen, onRequestClose, onFormSubmit }) {
  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const colors = ['red', 'blue', 'green', 'yellow', 'purple']; // Add more colors as needed

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const modalStyles = {
    overlay: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
    },
    content: {
      width: '300px',
      backgroundColor: '#fff',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
      padding: '20px',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    // You can call the onFormSubmit callback with the form data
    const formData = {
      groupName,
      selectedColor,
    };
    onFormSubmit(formData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Create New Notes Group"
      style={modalStyles}
    >
      <h2>Create New Notes Group</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="groupName">Group Name:</label>
        <input
          type="text"
          id="groupName"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <div>
          <label>Choose a Color:</label>
          <select
            value={selectedColor}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#fff',
              color: '#333',
            }}
          >
            <option value="">Select a color</option>
            {colors.map((color) => (
              <div
                key={color}
                className="color-option"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '10px',
                  cursor: 'pointer',
                  border: selectedColor === color ? '2px solid #fff' : '2px solid transparent',
                  backgroundColor: color,
                }}
                onClick={() => handleColorSelection(color)}
              ></div>
            ))}
          </select>
        </div>
        <button type="submit">Create</button>
      </form>
    </Modal>
  );
}

export default ModalComponent;
