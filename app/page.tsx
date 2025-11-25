import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import styles from './page.module.css'
import { db } from '@/db'
import { holidays, products } from '@/db/schema'
import { eq } from 'drizzle-orm'

export default async function Home() {
  // Fetch holidays and products from database
  const pickleballHolidays = await db.select().from(holidays).where(eq(holidays.category, 'pickleball_holidays'))
  const padelHolidays = await db.select().from(holidays).where(eq(holidays.category, 'padel_holidays'))
  const courtKits = await db.select().from(products).where(eq(products.category, 'court_kits'))
  const equipment = await db.select().from(products).where(eq(products.category, 'equipment'))

  return (
    <>
      <Header />
      <Hero />

      {/* HOLIDAYS SECTION */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          Sunny <span>Escapes</span>
        </div>

        {/* PICKLEBALL HOLIDAYS */}
        <h3 style={{ fontSize: '28px', fontWeight: 600, color: '#2d3748', marginBottom: '30px', marginTop: '20px' }}>
          Pickleball Holidays
        </h3>
        <div className={styles.threeColumn}>
          {pickleballHolidays.map((holiday) => (
            <div key={holiday.id} className={styles.card}>
              <div
                className={styles.cardImage}
                style={{
                  background: `url('${holiday.imageUrl}') center/cover`,
                }}
              ></div>
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{holiday.title}</div>
                <p style={{ color: '#718096', margin: '10px 0' }}>
                  {holiday.description}
                </p>
                <div className={styles.productPrice} style={{ marginTop: '15px' }}>
                  ${holiday.priceUSD} / €{holiday.priceEUR} / £{holiday.priceGBP}
                </div>
                <div
                  className={styles.ctaButton}
                  style={{ marginTop: '20px', padding: '10px 20px', fontSize: '14px' }}
                >
                  View Package
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PADEL HOLIDAYS */}
        <h3 style={{ fontSize: '28px', fontWeight: 600, color: '#2d3748', marginBottom: '30px', marginTop: '60px' }}>
          Padel Holidays
        </h3>
        <div className={styles.threeColumn}>
          {padelHolidays.map((holiday) => (
            <div key={holiday.id} className={styles.card}>
              <div
                className={styles.cardImage}
                style={{
                  background: `url('${holiday.imageUrl}') center/cover`,
                }}
              ></div>
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{holiday.title}</div>
                <p style={{ color: '#718096', margin: '10px 0' }}>
                  {holiday.description}
                </p>
                <div className={styles.productPrice} style={{ marginTop: '15px' }}>
                  ${holiday.priceUSD} / €{holiday.priceEUR} / £{holiday.priceGBP}
                </div>
                <div
                  className={styles.ctaButton}
                  style={{ marginTop: '20px', padding: '10px 20px', fontSize: '14px' }}
                >
                  View Package
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COURT KITS SECTION */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          Build Your <span>Own Court</span>
        </div>

        <div className={styles.twoColumn}>
          {courtKits.map((kit) => (
            <div key={kit.id} className={styles.card}>
              <div
                className={styles.cardImage}
                style={{
                  height: '300px',
                  background: `url('${kit.imageUrl}') center/cover`,
                }}
              ></div>
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{kit.name}</div>
                <p style={{ color: '#718096', margin: '10px 0', lineHeight: '1.6' }}>
                  {kit.description}
                </p>
                <div style={{ marginTop: '20px' }}>
                  <div
                    className={styles.productPrice}
                    style={{ padding: '10px 20px', fontSize: '18px' }}
                  >
                    FROM ${kit.priceUSD} / €{kit.priceEUR} / £{kit.priceGBP}
                  </div>
                </div>
                <div className={styles.ctaButton} style={{ marginTop: '20px' }}>
                  Configure Kit
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EQUIPMENT SECTION */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          Equipment & <span>Accessories</span>
        </div>

        <div className={styles.productGrid}>
          {equipment.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div
                className={styles.productImage}
                style={{
                  background: `url('${product.imageUrl}') center/cover`,
                }}
              ></div>
              <div className={styles.productInfo}>
                <div className={styles.productName}>{product.name}</div>
                <p style={{ color: '#718096', fontSize: '14px', margin: '8px 0' }}>
                  {product.description}
                </p>
                <div className={styles.productPrice} style={{ marginTop: '10px', fontSize: '15px' }}>
                  ${product.priceUSD} / €{product.priceEUR} / £{product.priceGBP}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <div className={styles.ctaButton}>View All Products</div>
        </div>
      </div>

      {/* WHY CHOOSE US SECTION */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          Why <span>PaddlePickle HQ?</span>
        </div>

        <div className={styles.threeColumn}>
          <div className={styles.featureBox}>
            <div className={styles.featureIcon}>🏗️</div>
            <div
              style={{
                fontWeight: 600,
                fontSize: '18px',
                marginBottom: '15px',
                color: '#2d3748',
              }}
            >
              Expert Installation
            </div>
            <p style={{ color: '#718096', lineHeight: '1.6', textAlign: 'center' }}>
              Our certified team handles every aspect of court installation, from site
              preparation to final touches, ensuring professional results every time.
            </p>
          </div>

          <div className={styles.featureBox}>
            <div className={styles.featureIcon}>⭐</div>
            <div
              style={{
                fontWeight: 600,
                fontSize: '18px',
                marginBottom: '15px',
                color: '#2d3748',
              }}
            >
              Premium Materials
            </div>
            <p style={{ color: '#718096', lineHeight: '1.6', textAlign: 'center' }}>
              We use only the highest quality materials from trusted manufacturers,
              backed by comprehensive warranties for your peace of mind.
            </p>
          </div>

          <div className={styles.featureBox}>
            <div className={styles.featureIcon}>🏖️</div>
            <div
              style={{
                fontWeight: 600,
                fontSize: '18px',
                marginBottom: '15px',
                color: '#2d3748',
              }}
            >
              Holiday Packages
            </div>
            <p style={{ color: '#718096', lineHeight: '1.6', textAlign: 'center' }}>
              Experience world-class destinations with our curated sports holiday
              packages, combining play, relaxation, and unforgettable memories.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
