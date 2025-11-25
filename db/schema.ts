import { pgTable, serial, text, decimal, timestamp, varchar, pgEnum } from 'drizzle-orm/pg-core'

// Enum for sport types
export const sportTypeEnum = pgEnum('sport_type', ['pickleball', 'padel', 'both'])

// Enum for holiday category
export const categoryEnum = pgEnum('category', ['pickleball_holidays', 'padel_holidays', 'equipment', 'court_kits'])

// Holidays table
export const holidays = pgTable('holidays', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  location: varchar('location', { length: 255 }).notNull(),
  description: text('description').notNull(),
  sportType: sportTypeEnum('sport_type').notNull(),
  priceUSD: decimal('price_usd', { precision: 10, scale: 2 }).notNull(),
  priceEUR: decimal('price_eur', { precision: 10, scale: 2 }).notNull(),
  priceGBP: decimal('price_gbp', { precision: 10, scale: 2 }).notNull(),
  imageUrl: text('image_url'),
  nights: varchar('nights', { length: 50 }),
  category: categoryEnum('category').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Products table
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description').notNull(),
  priceUSD: decimal('price_usd', { precision: 10, scale: 2 }).notNull(),
  priceEUR: decimal('price_eur', { precision: 10, scale: 2 }).notNull(),
  priceGBP: decimal('price_gbp', { precision: 10, scale: 2 }).notNull(),
  imageUrl: text('image_url'),
  category: categoryEnum('category').notNull(),
  isCourtKit: varchar('is_court_kit', { length: 10 }).default('false'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

// Contact form submissions table
export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  subject: varchar('subject', { length: 255 }).notNull(),
  message: text('message').notNull(),
  agreedToTerms: varchar('agreed_to_terms', { length: 10 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

// Export types
export type Holiday = typeof holidays.$inferSelect
export type NewHoliday = typeof holidays.$inferInsert
export type Product = typeof products.$inferSelect
export type NewProduct = typeof products.$inferInsert
export type ContactSubmission = typeof contactSubmissions.$inferSelect
export type NewContactSubmission = typeof contactSubmissions.$inferInsert
