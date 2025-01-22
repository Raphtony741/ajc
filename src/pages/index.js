import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#111', color: '#fff' }}>
        <h1>Welcome to the Anti Jamf Club/Clan</h1>
        <p>Join the revolution. Fear is power.</p>
      </main>
      <Footer />
    </>
  );
}
