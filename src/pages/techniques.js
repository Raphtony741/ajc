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
          {/* Correctly styled button and link */}
          <Link href="/methode-anti-jamf-v1.pdf">
            <a>
              <button style={{ 
                backgroundColor: 'red', 
                color: 'white', 
                padding: '10px 20px', 
                fontSize: '16px', 
                marginTop: '20px', 
                border: 'none', 
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Download Anti Jamf Method v1 PDF
              </button>
            </a>
          </Link>
            <Link href="/methode-dejamf-v2.pdf">
            <a>
              <button style={{ 
                backgroundColor: 'red', 
                color: 'white', 
                padding: '10px 20px', 
                fontSize: '16px', 
                marginTop: '20px', 
                border: 'none', 
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Download déJamf Method v1 PDF
              </button>
            </a>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};