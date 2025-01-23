// File: components/LanguageSwitcher.js
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ marginLeft: 'auto' }}>
      <button onClick={() => changeLanguage('en')} style={buttonStyle}>
        EN
      </button>
      <button onClick={() => changeLanguage('fr')} style={buttonStyle}>
        FR
      </button>
    </div>
  );
};

// Style pour les boutons de langue
const buttonStyle = {
  margin: '0 5px',
  padding: '0.5rem 1rem',
  backgroundColor: '#ff0000', // Couleur de fond
  color: '#fff', // Couleur du texte
  border: 'none', // Pas de bordure
  borderRadius: '5px', // Coins arrondis
  cursor: 'pointer', // Curseur en main
  transition: 'background-color 0.3s', // Transition douce
};

export default LanguageSwitcher;