// src/components/Popup.js

import React from 'react';

const Popup = ({ message, onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      top: '20%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
    }}>
      <p>{message}</p>
      <button onClick={onClose} style={{
        marginTop: '10px',
        backgroundColor: '#FF0000',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 15px',
        cursor: 'pointer',
      }}>
        Fermer
      </button>
    </div>
  );
};

export default Popup;