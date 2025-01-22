import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#111', color: '#fff' }}>
        <h1>Bienvenue sur Anti Jamf Club</h1>
        <p>rejoin la révolution.</p>
      </main>
      <Footer />
    </>
  );
}
