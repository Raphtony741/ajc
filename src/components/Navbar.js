import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/technique">Technique</Link></li>
      </ul>
    </nav>
  );
}
