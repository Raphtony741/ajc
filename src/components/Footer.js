import { FaTwitter, FaDiscord, FaReddit } from 'react-icons/fa'; // Importer les icônes

export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#000', color: '#fff' }}>
      <p>&copy; 2025 Anti Jamf Club</p>
      <p>
        Suivez-nous: 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <FaTwitter size={20} style={{ verticalAlign: 'middle' }} /> Twitter
        </a> |
        <a href="https://discord.gg/Nhc2EWu8Af" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <FaDiscord size={20} style={{ verticalAlign: 'middle' }} /> Discord
        </a> |
        <a href="https://www.reddit.com/r/anti_jamf_club" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <FaReddit size={20} style={{ verticalAlign: 'middle' }} /> Reddit
        </a>
      </p>
    </footer>
  );
}