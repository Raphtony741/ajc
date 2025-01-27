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
        <h3>Your Video</h3>
        <video width="640" height="360" controls>
        <source src="/Vidéo_techniques.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3>YouTube Videos</h3>
        <div style={{ margin: '20px 0' }}>
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/your_video_id"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{ margin: '20px 0' }}>
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/another_video_id"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
}