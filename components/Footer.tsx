import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3>Holidays</h3>
          <div className={styles.footerLink}>USA Destinations</div>
          <div className={styles.footerLink}>European Resorts</div>
          <div className={styles.footerLink}>Package Deals</div>
          <div className={styles.footerLink}>Group Bookings</div>
        </div>

        <div className={styles.footerColumn}>
          <h3>Court Solutions</h3>
          <div className={styles.footerLink}>Pickleball Kits</div>
          <div className={styles.footerLink}>Padel Kits</div>
          <div className={styles.footerLink}>Surface Options</div>
          <div className={styles.footerLink}>Installation</div>
        </div>

        <div className={styles.footerColumn}>
          <h3>Shop</h3>
          <div className={styles.footerLink}>Paddles & Rackets</div>
          <div className={styles.footerLink}>Balls & Accessories</div>
          <div className={styles.footerLink}>Nets & Posts</div>
          <div className={styles.footerLink}>Apparel</div>
        </div>

        <div className={styles.footerColumn}>
          <h3>Company</h3>
          <div className={styles.footerLink}>About Us</div>
          <div className={styles.footerLink}>Contact</div>
          <div className={styles.footerLink}>Shipping Info</div>
          <div className={styles.footerLink}>Returns</div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p style={{ color: '#cbd5e0' }}>© 2025 PaddlePickle HQ. All rights reserved.</p>
      </div>
    </footer>
  )
}
