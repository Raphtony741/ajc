// src/pages/_app.js

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
      <Navbar />
      <Component {...pageProps} />
      <Footer />
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