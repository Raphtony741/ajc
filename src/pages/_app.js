// src/pages/_app.js

import { useState } from 'react';
import '../../styles/globals.css';
import '../i18n/i18n';
import Popup from '../components/Popup'; // Importer le composant Popup
import { useTranslation } from 'react-i18next';

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(true); // État pour gérer l'affichage du pop-up

  const handleClosePopup = () => {
    setShowPopup(false); // Fermer le pop-up
  };

  return (
    <>
      <Component {...pageProps} />
      {showPopup && (
        <Popup 
          message="Nouvelle méthode trouvée, date de sortie dans 5 jours." 
          onClose={handleClosePopup} 
        />
      )}
    </>
  );
}

export default MyApp;