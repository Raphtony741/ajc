import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Agissez - Anti Jamf Club</title>
      </Head>
      <Navbar />
      <main style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#111', color: '#fff' }}>
        <h1>Bienvenue sur Anti Jamf Club</h1>
        <p>Rejoignez la révolution.</p>
      </main>
      <Footer />
    </>
  );
}