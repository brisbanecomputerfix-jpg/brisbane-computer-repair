import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logoLink}>
          <Image src="/logo.jpg" alt="Computer Repair 1 Logo" width={32} height={32} className={styles.logoMark} />
          <span className={styles.logoText}>Computer Repair 1</span>
        </Link>
        
        <nav className={styles.navCenter}>
          <Link href="/" className={`${styles.navItem} ${styles.active}`}>Home</Link>
          <Link href="/services" className={styles.navItem}>Services</Link>
          <Link href="/locations" className={styles.navItem}>Locations</Link>
          <Link href="/about" className={styles.navItem}>About Us</Link>
          <Link href="/contact" className={styles.navItem}>Contact</Link>
        </nav>

        <div className={styles.rightNav}>
          <div className={styles.searchBox}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.searchIcon}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <Link href="/contact" className="btn btn-primary">Book Repair</Link>
        </div>
      </div>
    </header>
  );
}
