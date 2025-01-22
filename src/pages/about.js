import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', backgroundColor: '#222', color: '#fff' }}>
        <h1>About Us</h1>
        <p>This is where you tell the story of the Anti Jamf Club/Clan. Modify this text as you see fit.</p>
      </main>
      <Footer />
    </>
  );
}
