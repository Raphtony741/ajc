// File: src/pages/techniques_help.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

export default function TechniquesHelp() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>{t('techniques_help')}</h1>
        <p>{t('techniques_help_description')}</p>
        <h2>{t('video_resources')}</h2>

        {/* Your own video */}
        <h3>{t('step1')}</h3>
        <video width="640" height="360" controls>
        <source src="/Vidéo_techniques.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h3>YouTube Videos</h3>
        <div style={{ margin: '20px 0' }}>
          <iframe
            width="640"
            height="360"
            src="https://youtube.com/embed/dqraxFrc8Kg?si=8Zo-e2yW_LJeu9rM"
            title="ajoutez vos dns (veuillez prendre notes de redémarrer votre ordinateur après le changement de dns"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h4>redémarrer l'ordinateur après le changement de dns.</h4>
        <div style={{ margin: '20px 0' }}>
          <iframe
            width="640"
            height="360"
            src="https://youtube.com/embed/8PcGqJt8Ako?si=bxOPiZ4dqHTgOPfw"
            title="partager votre connexion wifi qui bloque *jamfcloud.com sur votre Ipad"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h5>partager votre connexion wifi qui bloque *jamfcloud.com sur votre Ipad.</h5>
      </main>
      <Footer />
    </>
  );
}