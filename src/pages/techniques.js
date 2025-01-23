// File: src/pages/techniques.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import styles from '../../styles/Home.module.css'; // Import the styles

export default function Technique() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main>
        <h1>{t('techniques')}</h1>
        <p>{t('techniques_content')}</p>
        <section>
          <h2>{t('latest_technique')}</h2>
          <p>{t('latest_technique_description')}</p>
          <a href="https://external-shop-link.com" target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>{t('get_latest_technique')}</button> {/* Apply the button class */}
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};