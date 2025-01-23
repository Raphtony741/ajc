// File: src/pages/about.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main>
        <h1>{t('about')}</h1>
        <p>{t('about_content')}</p> {/* Add a translation key for about content */}
      </main>
      <Footer />
    </>
  );
}