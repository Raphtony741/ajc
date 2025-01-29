// File: src/pages/techniques.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import styles from '../../styles/Home.module.css';
import Link from 'next/link'; // Import the styles

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
           <Link href="/docs/anti-jamf-method-v1.pdf">
            <button className={styles.button}>{t('get_latest_technique')}</button> {/* Apply the button class */}
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
};