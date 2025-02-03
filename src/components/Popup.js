// src/components/Popup.js
import React, { useEffect, useState } from 'react';

const Popup = ({ message, onClose }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const targetDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000); // 5 jours à partir de maintenant

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft('Le temps est écoulé !');
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft(`${days} jours, ${hours} heures, ${minutes} minutes`);
      }
    }, 60000); // Met à jour toutes les minutes

    return () => clearInterval(interval);
  }, []);

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
      <p>{message} {timeLeft}</p>
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