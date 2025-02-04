import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import Link from 'next/link'; // Import Link from next/link

export default function Home() {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <>
      <Head>
        <title>{t('title')}</title> {/* Use translation for title */}
        <meta name="description" content={t('description')} /> {/* Use translation for description */}
        <meta property="og:image" content="https://ajcqc.info/favicon.ico" />
      </Head>
      <Navbar />
      <main style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
        {/* Section Héro */}
        <section
          style={{
            padding: '10rem 2rem',
            backgroundImage: 'linear-gradient(45deg, #8B0000, #000000)',
            color: '#fff',
            borderRadius: '10px',
            boxShadow: '0 0 20px #FF0000',
          }}
        >
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px #000' }}>
            {t('welcome')} {/* Use translation for welcome message */}
          </h1>
          <p style={{ fontSize: '1.5rem', margin: '1rem 0', textShadow: '1px 1px 3px #000' }}>
            {t('description')} {/* Use translation for description */}
          </p>
          <Link href="/techniques">
            <a style={{
              padding: '1rem 2rem',
              backgroundColor: '#FF0000',
              color: '#fff',
              borderRadius: '5px',
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 0 10px #8B0000',
            }}>
              {t('act_now')} {/* Add translation key for action button */}
            </a>
          </Link>
        </section>

        {/* Section de la peur */}
        <section style={{ marginTop: '3rem', padding: '3rem 2rem', backgroundColor: '#222', color: '#FF0000' }}>
          <h2 style={{ textShadow: '2px 2px 4px #000' }}>{t('threat_is_real')}</h2> {/* Use translation for threat message */}
          <p>
            {t('surveillance_message')} {/* Use translation for surveillance message */}
          </p>
        </section>

        {/* Appel à l'action */}
        <section style={{ marginTop: '3rem', padding: '3rem 2rem', backgroundColor: '#111', color: '#fff', border: '2px solid #FF0000' }}>
          <h2 style={{ color: '#FF0000', textShadow: '1px 1px 3px #000' }}>{t('join_resistance')}</h2> {/* Use translation for join message */}
          <p>
            {t('privacy_fight')} {/* Use translation for privacy fight message */}
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}