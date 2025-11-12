'use client'

import { useState, FormEvent } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './contact.module.css'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    optIn: false,
    agreeToTerms: false,
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and privacy policy')
      return
    }

    console.log('Form submitted:', formData)
    alert('Thank you for contacting us! We will get back to you soon.')

    // Reset form
    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: '',
      optIn: false,
      agreeToTerms: false,
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <>
      <Header />

      <div className={styles.contactPage}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Get In <span>Touch</span>
            </h1>
            <p className={styles.subtitle}>
              Have questions about our products, holidays, or court installations? We'd love to
              hear from you!
            </p>
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.formSection}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Your full name"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="mobile" className={styles.label}>
                    Mobile <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={styles.textarea}
                    placeholder="Tell us about your inquiry..."
                    rows={6}
                  />
                </div>

                <div className={styles.checkboxGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="optIn"
                      checked={formData.optIn}
                      onChange={handleChange}
                      className={styles.checkbox}
                    />
                    <span>
                      I'd like to receive updates about new products, holidays, and special offers
                    </span>
                  </label>
                </div>

                <div className={styles.checkboxGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      required
                      className={styles.checkbox}
                    />
                    <span>
                      I agree to the <a href="/terms">Terms & Conditions</a> and{' '}
                      <a href="/privacy">Privacy Policy</a>{' '}
                      <span className={styles.required}>*</span>
                    </span>
                  </label>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoCard}>
                <div className={styles.icon}>📍</div>
                <h3>Visit Us</h3>
                <p>123 Padel Lane</p>
                <p>Sports Valley, CA 90210</p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>📧</div>
                <h3>Email Us</h3>
                <p>info@paddlepicklehq.com</p>
                <p>support@paddlepicklehq.com</p>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.icon}>📞</div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>Mon-Fri: 9AM - 6PM PST</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
