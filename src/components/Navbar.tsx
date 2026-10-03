import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} glass`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Computer<span className="text-gradient">Repair</span>1
        </Link>
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/locations">Locations</Link>
        </div>
        <div className={styles.actions}>
          <Link href="/contact" className="btn btn-primary">
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
