import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroTagline}>
          Your Net Advantage in Padel Tennis & Pickleball!
        </div>
        <div className={styles.heroTitle}>Find Your Perfect Holiday</div>
        <p
          style={{
            color: '#cbd5e0',
            fontSize: '18px',
            marginBottom: '30px',
          }}
        >
          Play in paradise at world-class padel and pickleball destinations
        </p>

        {/* SEARCH BOX */}
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Where do you want to play?"
            />
            <button className={styles.searchButton}>Search</button>
          </div>

          {/* FILTERS */}
          <div className={styles.filters}>
            <select className={styles.filterSelect}>
              <option>Region</option>
              <option>USA</option>
              <option>Europe</option>
              <option>Spain</option>
              <option>Portugal</option>
              <option>Florida</option>
            </select>

            <select className={styles.filterSelect}>
              <option>Sport</option>
              <option>Padel Tennis</option>
              <option>Pickleball</option>
              <option>Both</option>
            </select>

            <select className={styles.filterSelect}>
              <option>Duration</option>
              <option>Weekend (2-3 days)</option>
              <option>Week (7 days)</option>
              <option>2 Weeks</option>
              <option>Month+</option>
            </select>

            <select className={styles.filterSelect}>
              <option>Budget</option>
              <option>Under $1,000</option>
              <option>$1,000 - $2,500</option>
              <option>$2,500 - $5,000</option>
              <option>$5,000+</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
