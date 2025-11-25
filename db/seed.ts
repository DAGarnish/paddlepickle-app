import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import * as dotenv from 'dotenv'
import * as schema from './schema'

dotenv.config({ path: '.env.local' })

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set')
}

const sql = neon(process.env.DATABASE_URL)
const db = drizzle(sql, { schema })

async function seed() {
  console.log('🌱 Seeding database...')

  // Seed holidays
  console.log('Adding holidays...')
  await db.insert(schema.holidays).values([
    {
      title: 'Florida Keys',
      location: 'Florida, USA',
      description: '7-night beachfront pickleball resort with daily clinics',
      sportType: 'pickleball',
      priceUSD: '1899.00',
      priceEUR: '1749.00',
      priceGBP: '1499.00',
      imageUrl: 'https://img.b2bpic.net/premium-photo/beautiful-clearwater-beach-with-white-sand-florida-usa_130111-8563.jpg',
      nights: '7 nights',
      category: 'pickleball_holidays',
    },
    {
      title: 'Southern California',
      location: 'California, USA',
      description: '5-night coastal pickleball getaway with pro coaching',
      sportType: 'pickleball',
      priceUSD: '2099.00',
      priceEUR: '1929.00',
      priceGBP: '1659.00',
      imageUrl: '/images/southern-california.jpg',
      nights: '5 nights',
      category: 'pickleball_holidays',
    },
    {
      title: 'Algarve, Portugal',
      location: 'Algarve, Portugal',
      description: '6-night beachfront pickleball experience',
      sportType: 'pickleball',
      priceUSD: '1649.00',
      priceEUR: '1519.00',
      priceGBP: '1299.00',
      imageUrl: 'https://img.b2bpic.net/premium-photo/lounge-chairs-palm-tree-beach-against-blue-sky_1048944-2114022.jpg',
      nights: '6 nights',
      category: 'pickleball_holidays',
    },
    {
      title: 'Costa del Sol, Spain',
      location: 'Costa del Sol, Spain',
      description: '5-night luxury padel resort with training sessions',
      sportType: 'padel',
      priceUSD: '2299.00',
      priceEUR: '2119.00',
      priceGBP: '1815.00',
      imageUrl: 'https://img.b2bpic.net/premium-photo/coconut-palm-tree-sandy-beach_109800-14617.jpg',
      nights: '5 nights',
      category: 'padel_holidays',
    },
    {
      title: 'Costa Blanca, Spain',
      location: 'Costa Blanca, Spain',
      description: '6-night Mediterranean padel holiday with expert instruction',
      sportType: 'padel',
      priceUSD: '1999.00',
      priceEUR: '1839.00',
      priceGBP: '1579.00',
      imageUrl: '/images/costa-blanca.jpg',
      nights: '6 nights',
      category: 'padel_holidays',
    },
    {
      title: 'Southern California',
      location: 'California, USA',
      description: '5-night premium padel retreat at exclusive facilities',
      sportType: 'padel',
      priceUSD: '2399.00',
      priceEUR: '2209.00',
      priceGBP: '1895.00',
      imageUrl: '/images/southern-california.jpg',
      nights: '5 nights',
      category: 'padel_holidays',
    },
  ])

  // Seed products
  console.log('Adding products...')
  await db.insert(schema.products).values([
    {
      name: 'Pickleball Court Kit',
      description: 'Complete court installation kit including professional-grade surface, regulation net system, line marking, and installation guide. Perfect for backyard or commercial installations.',
      priceUSD: '2499.00',
      priceEUR: '2299.00',
      priceGBP: '1975.00',
      imageUrl: 'https://img.b2bpic.net/premium-photo/topdown-aerial-drone-view-pickleball-courts-with-vibrant-blue-green-colors-showing-geometric-lines-net-shadows-ideal-sports-recreation-abstract-visual-themes_213438-21041.jpg',
      category: 'court_kits',
      isCourtKit: 'true',
    },
    {
      name: 'Padel Court Kit',
      description: 'Premium padel court package with tempered glass walls, artificial turf, LED lighting system, and professional fencing. Includes full installation service and 5-year warranty.',
      priceUSD: '8999.00',
      priceEUR: '8279.00',
      priceGBP: '7109.00',
      imageUrl: 'https://img.b2bpic.net/free-photo/high-angle-empty-paddle-tennis-field_23-2149458994.jpg',
      category: 'court_kits',
      isCourtKit: 'true',
    },
    {
      name: 'Paddle Racket Pro',
      description: 'Professional grade carbon fiber paddle',
      priceUSD: '89.99',
      priceEUR: '82.79',
      priceGBP: '71.09',
      imageUrl: 'https://img.b2bpic.net/premium-photo/paddle-pickleball-ball-isolated-white-background_1294013-10.jpg',
      category: 'equipment',
      isCourtKit: 'false',
    },
    {
      name: 'Pickleball Set',
      description: 'Starter set with 2 paddles and 4 balls',
      priceUSD: '49.99',
      priceEUR: '45.99',
      priceGBP: '39.49',
      imageUrl: 'https://img.b2bpic.net/premium-photo/image-from-some-pickleball-paddles-with-some-balls-them-blue-background_163068-1998.jpg',
      category: 'equipment',
      isCourtKit: 'false',
    },
    {
      name: 'Court Net System',
      description: 'Professional regulation height net',
      priceUSD: '299.99',
      priceEUR: '275.99',
      priceGBP: '236.99',
      imageUrl: 'https://img.b2bpic.net/premium-photo/dynamic-paddles-vibrant-court-surface_1266792-4656.jpg',
      category: 'equipment',
      isCourtKit: 'false',
    },
    {
      name: 'Court Marking Kit',
      description: 'Complete line marking system',
      priceUSD: '129.99',
      priceEUR: '119.59',
      priceGBP: '102.69',
      imageUrl: 'https://img.b2bpic.net/premium-photo/blue-red-paddle-tennis-rackets-white-wooden-table-top-view_123827-7527.jpg',
      category: 'equipment',
      isCourtKit: 'false',
    },
  ])

  console.log('✅ Database seeded successfully!')
}

seed()
  .catch((error) => {
    console.error('Error seeding database:', error)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })
