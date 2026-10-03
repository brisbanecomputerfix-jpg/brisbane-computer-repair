import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.column}>
          <Link href="/" className="flex items-center gap-3 group mb-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-black flex items-center justify-center">
              <Image src="/logo.jpg" alt="Computer Repair 1 Logo" width={48} height={48} className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-white text-xl tracking-tight">Computer Repair 1</span>
          </Link>
          <p className={styles.description}>
            Fixing your computer worry free. Fast Computer Repair Brisbane. Transparent Fee. Data recovery. Same-Day Fix.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.column}>
          <h4>Services</h4>
          <Link href="/services/laptop-repair">Laptop Repair</Link>
          <Link href="/services/apple-mac-repair">Mac Repair</Link>
          <Link href="/services/data-recovery">Data Recovery</Link>
          <Link href="/services/hardware-update">Hardware Update</Link>
        </div>
        <div className={styles.column}>
          <h4>Contact</h4>
          <p>0468 991 300</p>
          <p>fix@computerrepair1.com</p>
          <p>5 Grosvenor Road, Indooroopilly</p>
        </div>
      </div>
      
      {/* SEO Local Service Network / Partner Links */}
      <div className="container mt-12 pt-8 border-t border-white/10">
        <h5 className="text-white/40 text-xs uppercase tracking-wider mb-4 font-semibold">Our Local Service Network</h5>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/30">
          <a href="https://brisbanecomputerrepair.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Brisbane Computer Repair</a>
          <a href="https://brisbanecomputerfix.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Brisbane Computer Fix</a>
          <a href="https://brisbanecomputerrepair.au" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Brisbane Computer Repair AU</a>
          <a href="https://computerfixindooroopilly.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Computer Fix Indooroopilly</a>
          <a href="https://compterrepairindooroopilly.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Computer Repair Indooroopilly</a>
          <a href="https://computerrepairnewfarm.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Computer Repair New Farm</a>
          <a href="https://computerrepaireastbrisbane.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Computer Repair East Brisbane</a>
          <a href="https://computerrepairtoowong.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Computer Repair Toowong</a>
          <a href="https://computerrepairnewstead.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Computer Repair Newstead</a>
          <a href="https://computerrepairtaringa.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Computer Repair Taringa</a>
          <a href="https://macbooking.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">MacBooking</a>
          <a href="https://digitalsecurityreport.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Digital Security Report AU</a>
          <a href="https://digitalsecuritycheck.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Digital Security Check AU</a>
          <a href="https://digitalsecurityreport.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Digital Security Report</a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Computer Repair 1 ABN 98 288 669 674. All rights reserved.</p>
      </div>
    </footer>
  );
}
