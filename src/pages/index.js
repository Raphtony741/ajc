import Head from 'next/head';
   <Head>
        <title>Agissez - Anti Jamf Club</title>
      </Head>
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#111', color: '#fff' }}>
        <section style={{ padding: '10rem 2rem', backgroundImage: 'linear-gradient(45deg, #FF5733, #900C3F)', color: '#fff', borderRadius: '10px' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>Welcome to Anti Jamf Club</h1>
          <p style={{ fontSize: '1.5rem', margin: '1rem 0' }}>Join the revolution now!</p>
          <a href="#join" style={{ padding: '1rem 2rem', backgroundColor: '#fff', color: '#900C3F', borderRadius: '5px', fontSize: '1rem', textDecoration: 'none' }}>
            Join Us
          </a>
        </section>
        <section style={{ marginTop: '3rem', padding: '3rem 2rem', backgroundColor: '#222', color: '#fff' }}>
          <h2>Our Mission</h2>
          <p>We are dedicated to creating a better and more transparent world. Join us as we work together to fight for privacy and control.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}