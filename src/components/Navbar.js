// File: components/Navbar.js
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher'; // Importer le composant LanguageSwitcher
import { useTranslation } from 'react-i18next'; // Importer le hook useTranslation
import styles from '../../styles/Home.module.css';

export default function Navbar() {
  const { t } = useTranslation(); // Initialiser le hook de traduction

  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link href="/">{t('home')}</Link></li> {/* Utiliser la clé de traduction pour Home */}
        <span className={styles.separator}></span> {/* Séparateur */}
        <li><Link href="/about">{t('about')}</Link></li> {/* Utiliser la clé de traduction pour About */}
        <span className={styles.separator}></span> {/* Séparateur */}
        <li><Link href="/techniques">{t('techniques')}</Link></li> {/* Utiliser la clé de traduction pour Techniques */}
      </ul>
      <LanguageSwitcher /> {/* Ajouter le composant LanguageSwitcher ici */}
    </nav>
  );
};