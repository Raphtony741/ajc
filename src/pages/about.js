// src/pages/about.js

import Navbar from '../components/Navbar'; // Importing Navbar
import Footer from '../components/Footer'; // Importing Footer
import { useTranslation } from 'react-i18next'; // Importing translation hook
import { FaDiscord, FaReddit } from 'react-icons/fa'; // Importer les icônes

const About = () => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <>
      <Navbar />
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>{t('about1.title')}</h1> {/* Using translation for title */}
        <p style={{ marginBottom: '20px' }}>{t('about1.content1')}</p> {/* Using translation for first paragraph with spacing */}
        <p style={{ marginBottom: '20px' }}>{t('about1.content2')}</p> {/* Using translation for second paragraph with spacing */}
        <p>{t('about1.content3')}</p> {/* Using translation for third paragraph */}

        {/* Nouvelle section pour le contact */}
        <section style={{ marginTop: '40px' }}>
          <h2>Vous avez des questions ?</h2>
          <p>Contactez-nous :</p>
          <p>
            <a href="https://discord.gg/9S8gjy8wsH" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px',color: "white" }}>
              <FaDiscord size={30} color="blue" /> Discord
            </a> |
            <a href="https://www.reddit.com/r/anti_jamf_club" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: "white" }}>
              <FaReddit size={30} color="red" /> Reddit
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;