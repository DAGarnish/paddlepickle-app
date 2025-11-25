import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function Home() {
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
          <div className={styles.card}>
            <div
              className={styles.cardImage}
              style={{
                background:
                  "url('https://img.b2bpic.net/premium-photo/beautiful-clearwater-beach-with-white-sand-florida-usa_130111-8563.jpg') center/cover",
              }}
            ></div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Florida Keys</div>
              <p style={{ color: '#718096', margin: '10px 0' }}>
                7-night beachfront pickleball resort with daily clinics
              </p>
              <div className={styles.productPrice} style={{ marginTop: '15px' }}>
                $1,899 / €1,749 / £1,499
              </div>
              <div
                className={styles.ctaButton}
                style={{ marginTop: '20px', padding: '10px 20px', fontSize: '14px' }}
              >
                View Package
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div
              className={styles.cardImage}
              style={{
                background:
                  "url('/images/southern-california.jpg') center/cover",
              }}
            ></div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Southern California</div>
              <p style={{ color: '#718096', margin: '10px 0' }}>
                5-night coastal pickleball getaway with pro coaching
              </p>
              <div className={styles.productPrice} style={{ marginTop: '15px' }}>
                $2,099 / €1,929 / £1,659
              </div>
              <div
                className={styles.ctaButton}
                style={{ marginTop: '20px', padding: '10px 20px', fontSize: '14px' }}
              >
                View Package
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div
              className={styles.cardImage}
              style={{
                background:
                  "url('https://img.b2bpic.net/premium-photo/lounge-chairs-palm-tree-beach-against-blue-sky_1048944-2114022.jpg') center/cover",
              }}
            ></div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Algarve, Portugal</div>
              <p style={{ color: '#718096', margin: '10px 0' }}>
                6-night beachfront pickleball experience
              </p>
              <div className={styles.productPrice} style={{ marginTop: '15px' }}>
                $1,649 / €1,519 / £1,299
              </div>
              <div
                className={styles.ctaButton}
                style={{ marginTop: '20px', padding: '10px 20px', fontSize: '14px' }}
              >
                View Package
              </div>
            </div>
          </div>
        </div>

        {/* PADEL HOLIDAYS */}
        <h3 style={{ fontSize: '28px', fontWeight: 600, color: '#2d3748', marginBottom: '30px', marginTop: '60px' }}>
          Padel Holidays
        </h3>
        <div className={styles.threeColumn}>
          <div className={styles.card}>
            <div
              className={styles.cardImage}
              style={{
                background:
                  "url('https://img.b2bpic.net/premium-photo/coconut-palm-tree-sandy-beach_109800-14617.jpg') center/cover",
              }}
            ></div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Costa del Sol, Spain</div>
              <p style={{ color: '#718096', margin: '10px 0' }}>
                5-night luxury padel resort with training sessions
              </p>
              <div className={styles.productPrice} style={{ marginTop: '15px' }}>
                $2,299 / €2,119 / £1,815
              </div>
              <div
                className={styles.ctaButton}
                style={{ marginTop: '20px', padding: '10px 20px', fontSize: '14px' }}
              >
                View Package
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div
              className={styles.cardImage}
              style={{
                background:
                  "url('/images/costa-blanca.jpg') center/cover",
              }}
            ></div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Costa Blanca, Spain</div>
              <p style={{ color: '#718096', margin: '10px 0' }}>
                6-night Mediterranean padel holiday with expert instruction
              </p>
              <div className={styles.productPrice} style={{ marginTop: '15px' }}>
                $1,999 / €1,839 / £1,579
              </div>
              <div
                className={styles.ctaButton}
                style={{ marginTop: '20px', padding: '10px 20px', fontSize: '14px' }}
              >
                View Package
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div
              className={styles.cardImage}
              style={{
                background:
                  "url('/images/southern-california.jpg') center/cover",
              }}
            ></div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Southern California</div>
              <p style={{ color: '#718096', margin: '10px 0' }}>
                5-night premium padel retreat at exclusive facilities
              </p>
              <div className={styles.productPrice} style={{ marginTop: '15px' }}>
                $2,399 / €2,209 / £1,895
              </div>
              <div
                className={styles.ctaButton}
                style={{ marginTop: '20px', padding: '10px 20px', fontSize: '14px' }}
              >
                View Package
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COURT KITS SECTION */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          Build Your <span>Own Court</span>
        </div>

        <div className={styles.twoColumn}>
          <div className={styles.card}>
            <div
              className={styles.cardImage}
              style={{
                height: '300px',
                background:
                  "url('https://img.b2bpic.net/premium-photo/topdown-aerial-drone-view-pickleball-courts-with-vibrant-blue-green-colors-showing-geometric-lines-net-shadows-ideal-sports-recreation-abstract-visual-themes_213438-21041.jpg') center/cover",
              }}
            ></div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Pickleball Court Kit</div>
              <p style={{ color: '#718096', margin: '10px 0', lineHeight: '1.6' }}>
                Complete court installation kit including professional-grade surface,
                regulation net system, line marking, and installation guide. Perfect for
                backyard or commercial installations.
              </p>
              <div style={{ marginTop: '20px' }}>
                <div
                  className={styles.productPrice}
                  style={{ padding: '10px 20px', fontSize: '18px' }}
                >
                  FROM $2,499 / €2,299 / £1,975
                </div>
              </div>
              <div className={styles.ctaButton} style={{ marginTop: '20px' }}>
                Configure Kit
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div
              className={styles.cardImage}
              style={{
                height: '300px',
                background:
                  "url('https://img.b2bpic.net/free-photo/high-angle-empty-paddle-tennis-field_23-2149458994.jpg') center/cover",
              }}
            ></div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Padel Court Kit</div>
              <p style={{ color: '#718096', margin: '10px 0', lineHeight: '1.6' }}>
                Premium padel court package with tempered glass walls, artificial turf,
                LED lighting system, and professional fencing. Includes full installation
                service and 5-year warranty.
              </p>
              <div style={{ marginTop: '20px' }}>
                <div
                  className={styles.productPrice}
                  style={{ padding: '10px 20px', fontSize: '18px' }}
                >
                  FROM $8,999 / €8,279 / £7,109
                </div>
              </div>
              <div className={styles.ctaButton} style={{ marginTop: '20px' }}>
                Configure Kit
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EQUIPMENT SECTION */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          Equipment & <span>Accessories</span>
        </div>

        <div className={styles.productGrid}>
          <div className={styles.productCard}>
            <div
              className={styles.productImage}
              style={{
                background:
                  "url('https://img.b2bpic.net/premium-photo/paddle-pickleball-ball-isolated-white-background_1294013-10.jpg') center/cover",
              }}
            ></div>
            <div className={styles.productInfo}>
              <div className={styles.productName}>Paddle Racket Pro</div>
              <p style={{ color: '#718096', fontSize: '14px', margin: '8px 0' }}>
                Professional grade carbon fiber paddle
              </p>
              <div className={styles.productPrice} style={{ marginTop: '10px', fontSize: '15px' }}>
                $89.99 / €82.79 / £71.09
              </div>
            </div>
          </div>

          <div className={styles.productCard}>
            <div
              className={styles.productImage}
              style={{
                background:
                  "url('https://img.b2bpic.net/premium-photo/image-from-some-pickleball-paddles-with-some-balls-them-blue-background_163068-1998.jpg') center/cover",
              }}
            ></div>
            <div className={styles.productInfo}>
              <div className={styles.productName}>Pickleball Set</div>
              <p style={{ color: '#718096', fontSize: '14px', margin: '8px 0' }}>
                Starter set with 2 paddles and 4 balls
              </p>
              <div className={styles.productPrice} style={{ marginTop: '10px', fontSize: '15px' }}>
                $49.99 / €45.99 / £39.49
              </div>
            </div>
          </div>

          <div className={styles.productCard}>
            <div
              className={styles.productImage}
              style={{
                background:
                  "url('https://img.b2bpic.net/premium-photo/dynamic-paddles-vibrant-court-surface_1266792-4656.jpg') center/cover",
              }}
            ></div>
            <div className={styles.productInfo}>
              <div className={styles.productName}>Court Net System</div>
              <p style={{ color: '#718096', fontSize: '14px', margin: '8px 0' }}>
                Professional regulation height net
              </p>
              <div className={styles.productPrice} style={{ marginTop: '10px', fontSize: '15px' }}>
                $299.99 / €275.99 / £236.99
              </div>
            </div>
          </div>

          <div className={styles.productCard}>
            <div
              className={styles.productImage}
              style={{
                background:
                  "url('https://img.b2bpic.net/premium-photo/blue-red-paddle-tennis-rackets-white-wooden-table-top-view_123827-7527.jpg') center/cover",
              }}
            ></div>
            <div className={styles.productInfo}>
              <div className={styles.productName}>Court Marking Kit</div>
              <p style={{ color: '#718096', fontSize: '14px', margin: '8px 0' }}>
                Complete line marking system
              </p>
              <div className={styles.productPrice} style={{ marginTop: '10px', fontSize: '15px' }}>
                $129.99 / €119.59 / £102.69
              </div>
            </div>
          </div>
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
