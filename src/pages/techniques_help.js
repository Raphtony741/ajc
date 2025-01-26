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
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=your_video_id" target="_blank" rel="noopener noreferrer">
              Your Video Title
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=another_video_id" target="_blank" rel="noopener noreferrer">
              Another Video Title
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=yet_another_video_id" target="_blank" rel="noopener noreferrer">
              Yet Another Video Title
            </a>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}