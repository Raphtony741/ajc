import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Anti Jamf Club - Agissez</title>
        <meta name="description" content="Rejoignez la révolution et récupérez votre liberté avec Anti Jamf Club." />
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
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px #000' }}>Bienvenue sur Anti Jamf Club</h1>
          <p style={{ fontSize: '1.5rem', margin: '1rem 0', textShadow: '1px 1px 3px #000' }}>
            Êtes-vous prêt à échapper au contrôle ? Le temps presse !
          </p>
          <a
            href="#join"
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#FF0000',
              color: '#fff',
              borderRadius: '5px',
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 0 10px #8B0000',
            }}
          >
            Agissez maintenant
          </a>
        </section>

        {/* Section de la peur */}
        <section style={{ marginTop: '3rem', padding: '3rem 2rem', backgroundColor: '#222', color: '#FF0000' }}>
          <h2 style={{ textShadow: '2px 2px 4px #000' }}>La menace est réelle</h2>
          <p>
            Chaque jour, vous êtes surveillé. Vos actions sont contrôlées. <strong>Le temps d'agir est maintenant.</strong> Ne laissez pas votre liberté devenir un souvenir.
          </p>
        </section>

        {/* Appel à l'action */}
        <section style={{ marginTop: '3rem', padding: '3rem 2rem', backgroundColor: '#111', color: '#fff', border: '2px solid #FF0000' }}>
          <h2 style={{ color: '#FF0000', textShadow: '1px 1px 3px #000' }}>Rejoignez la résistance</h2>
          <p>
            Le combat pour votre vie privée n'est pas juste un choix—c'est une nécessité. Tenez-vous avec nous, ou écartez-vous.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}