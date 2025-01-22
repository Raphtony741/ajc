import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Technique() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', backgroundColor: '#333', color: '#fff' }}>
        <h1>Techniques</h1>
        <p>Learn how to bypass Jamf here. Add or update content as needed.</p>
        <section style={{ marginTop: '2rem' }}>
          <h2>Latest Technique</h2>
          <p>Description of the latest technique goes here.</p>
          <a href="https://external-shop-link.com" target="_blank" rel="noopener noreferrer">
            <button style={{ padding: '0.5rem 1rem', backgroundColor: '#ff0000', color: '#fff', border: 'none', cursor: 'pointer' }}>
              Get the Latest Technique
            </button>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
