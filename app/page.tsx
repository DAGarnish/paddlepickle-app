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
              <div className={styles.cardTitle}>Florida Keys Resort</div>
              <div className="wireframe-text"></div>
              <div className="wireframe-text" style={{ width: '80%' }}></div>
              <div className="wireframe-text" style={{ width: '60%' }}></div>
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
                  "url('https://img.b2bpic.net/premium-photo/coconut-palm-tree-sandy-beach_109800-14617.jpg') center/cover",
              }}
            ></div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Costa del Sol, Spain</div>
              <div className="wireframe-text"></div>
              <div className="wireframe-text" style={{ width: '80%' }}></div>
              <div className="wireframe-text" style={{ width: '60%' }}></div>
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
              <div className="wireframe-text"></div>
              <div className="wireframe-text" style={{ width: '80%' }}></div>
              <div className="wireframe-text" style={{ width: '60%' }}></div>
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
              <div className="wireframe-text"></div>
              <div className="wireframe-text" style={{ width: '90%' }}></div>
              <div className="wireframe-text" style={{ width: '80%' }}></div>
              <div style={{ marginTop: '20px' }}>
                <div
                  className={styles.productPrice}
                  style={{ padding: '10px 20px', fontSize: '20px' }}
                >
                  FROM $2,499
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
              <div className="wireframe-text"></div>
              <div className="wireframe-text" style={{ width: '90%' }}></div>
              <div className="wireframe-text" style={{ width: '80%' }}></div>
              <div style={{ marginTop: '20px' }}>
                <div
                  className={styles.productPrice}
                  style={{ padding: '10px 20px', fontSize: '20px' }}
                >
                  FROM $8,999
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
              <div className="wireframe-text" style={{ height: '15px', width: '80%' }}></div>
              <div className={styles.productPrice} style={{ marginTop: '10px' }}>
                $89.99
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
              <div className="wireframe-text" style={{ height: '15px', width: '80%' }}></div>
              <div className={styles.productPrice} style={{ marginTop: '10px' }}>
                $49.99
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
              <div className="wireframe-text" style={{ height: '15px', width: '80%' }}></div>
              <div className={styles.productPrice} style={{ marginTop: '10px' }}>
                $299.99
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
              <div className="wireframe-text" style={{ height: '15px', width: '80%' }}></div>
              <div className={styles.productPrice} style={{ marginTop: '10px' }}>
                $129.99
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
            <div className="wireframe-text"></div>
            <div className="wireframe-text" style={{ width: '90%' }}></div>
            <div className="wireframe-text" style={{ width: '70%' }}></div>
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
            <div className="wireframe-text"></div>
            <div className="wireframe-text" style={{ width: '90%' }}></div>
            <div className="wireframe-text" style={{ width: '70%' }}></div>
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
            <div className="wireframe-text"></div>
            <div className="wireframe-text" style={{ width: '90%' }}></div>
            <div className="wireframe-text" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
