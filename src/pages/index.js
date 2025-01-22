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
        {/* Hero Section */}
        <section
          style={{
            padding: '10rem 2rem',
            backgroundImage: 'linear-gradient(45deg, #8B0000, #000000)',
            color: '#fff',
            borderRadius: '10px',
            boxShadow: '0 0 20px #FF0000',
          }}
        >
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', textShadow: '2px 2px 4px #000' }}>Welcome to Anti Jamf Club</h1>
          <p style={{ fontSize: '1.5rem', margin: '1rem 0', textShadow: '1px 1px 3px #000' }}>
            Are you ready to escape control? Time is running out!
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
            Take Action Now
          </a>
        </section>

        {/* Fear Section */}
        <section style={{ marginTop: '3rem', padding: '3rem 2rem', backgroundColor: '#222', color: '#FF0000' }}>
          <h2 style={{ textShadow: '2px 2px 4px #000' }}>The Threat is Real</h2>
          <p>
            Every day, you are watched. Your actions are controlled. <strong>The time to act is now.</strong> Don't let your freedom be a memory.
          </p>
        </section>

        {/* Call to Arms */}
        <section style={{ marginTop: '3rem', padding: '3rem 2rem', backgroundColor: '#111', color: '#fff', border: '2px solid #FF0000' }}>
          <h2 style={{ color: '#FF0000', textShadow: '1px 1px 3px #000' }}>Join the Resistance</h2>
          <p>
            The fight for your privacy is not just a choice—it's a necessity. Stand with us, or stand aside.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}