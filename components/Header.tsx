'use client'

import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      {/* TOP BAR */}
      <div className={styles.topBar}>
        Your one-stop shop for all things Padel Tennis and Pickleball, from rackets,
        paddles & bats to nets and even holidays!
      </div>

      {/* HEADER / NAVIGATION */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>Padelpickle</div>
          <nav className={styles.nav}>
            <div className={styles.navItem}>Home</div>
            <div className={styles.navItem}>Shop</div>
            <div className={styles.navItem}>Blogs</div>
            <div className={styles.navItem}>About us</div>
            <div className={styles.navItem}>Travel</div>
            <div className={styles.navItem}>Contact us</div>
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
          <div className={styles.mobileNavItem}>Home</div>
          <div className={styles.mobileNavItem}>Shop</div>
          <div className={styles.mobileNavItem}>Blogs</div>
          <div className={styles.mobileNavItem}>About us</div>
          <div className={styles.mobileNavItem}>Travel</div>
          <div className={styles.mobileNavItem}>Contact us</div>
          <div className={styles.bookButton} style={{ margin: '20px 0' }}>
            Book A Court
          </div>
        </div>
      </header>
    </>
  )
}
