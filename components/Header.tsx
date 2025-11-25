'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      {/* HEADER / NAVIGATION */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>🎾</span>
            PaddlePickle HQ
            <span className={`${styles.logoIcon} ${styles.pickleballContainer}`}>
              <span className={styles.pickleball}></span>
            </span>
          </Link>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navItem}>
              Home
            </Link>
            <div className={styles.navItem}>Shop</div>
            <div className={styles.navItem}>Blogs</div>
            <div className={styles.navItem}>About us</div>
            <div className={styles.navItem}>Travel</div>
            <Link href="/contact-us" className={styles.navItem}>
              Contact us
            </Link>
            <div className={styles.bookButton}>Book A Court</div>
          </nav>
          <div
            className={`${styles.burgerMenu} ${mobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
          >
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
          </div>
        </div>
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.mobileNavItem} onClick={toggleMenu}>
            Home
          </Link>
          <div className={styles.mobileNavItem} onClick={toggleMenu}>Shop</div>
          <div className={styles.mobileNavItem} onClick={toggleMenu}>Blogs</div>
          <div className={styles.mobileNavItem} onClick={toggleMenu}>About us</div>
          <div className={styles.mobileNavItem} onClick={toggleMenu}>Travel</div>
          <Link href="/contact-us" className={styles.mobileNavItem} onClick={toggleMenu}>
            Contact us
          </Link>
          <div className={styles.bookButton} style={{ margin: '20px 0' }} onClick={toggleMenu}>
            Book A Court
          </div>
        </div>
      </header>
    </>
  )
}
