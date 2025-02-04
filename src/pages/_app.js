// src/pages/_app.js
import { useEffect, useState } from 'react';
import '../../styles/globals.css';
import '../i18n/i18n';
import Popup from '../components/Popup'; 
import { useTranslation } from 'react-i18next';

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(true); 
  const [timeLeft, setTimeLeft] = useState(''); // Valeur par défaut

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
    }, 1000); // Met à jour chaque seconde

    return () => clearInterval(interval);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false); 
  };

  return (
    <>
    <head>
    <meta property="og:image" content="https://example.com/image.jpg" />
    </head>
      <Component {...pageProps} />
      {showPopup && timeLeft && ( // Vérification de timeLeft
        <Popup 
          message={t('popup_message')} 
          timeLeft={timeLeft} 
          onClose={handleClosePopup} 
        />
      )}
    </>
  );
}

export default MyApp;