// src/pages/about.js

import Navbar from '../components/Navbar'; // Importing Navbar
import Footer from '../components/Footer'; // Importing Footer
import { useTranslation } from 'react-i18next'; // Importing translation hook

const About = () => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <>
      <Navbar />
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>{t('about.title')}</h1> {/* Using translation for title */}
        <p style={{ marginBottom: '20px' }}>{t('about.content1')}</p> {/* Using translation for first paragraph with spacing */}
        <p style={{ marginBottom: '20px' }}>{t('about.content2')}</p> {/* Using translation for second paragraph with spacing */}
        <p>{t('about.content3')}</p> {/* Using translation for third paragraph */}
      </main>
      <Footer />
    </>
  );
};

export default About;