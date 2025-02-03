// src/pages/_app.js
import { useState } from 'react';
import '../../styles/globals.css';
import '../i18n/i18n';
import Popup from '../components/Popup'; 
import { useTranslation } from 'react-i18next';

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(true); 

  const handleClosePopup = () => {
    setShowPopup(false); 
  };

  return (
    <>
      <Component {...pageProps} />
      {showPopup && (
        <Popup 
          message={t('popup_message')} 
          onClose={handleClosePopup} 
        />
      )}
    </>
  );
}

export default MyApp;