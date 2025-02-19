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

  );
}

export default MyApp;