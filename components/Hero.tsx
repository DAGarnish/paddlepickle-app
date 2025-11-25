import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroTagline}>
          Your Net Advantage in Padel Tennis & Pickleball, from accessories, trips away, and even courts!
        </div>
      </div>
    </div>
  )
}
