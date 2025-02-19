// src/pages/_app.js

import '../../styles/globals.css';
import '../i18n/i18n';
import { useTranslation } from 'react-i18next';

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation();

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;