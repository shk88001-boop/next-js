'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setSent(true)
    setLoading(false)
  }

  const infos = [
    { icon: '◎', label: 'Email', value: 'hello@lumiere.studio' },
    { icon: '◈', label: 'Phone', value: '+1 (415) 555-0190' },
    { icon: '◉', label: 'Studio', value: '12 Rue du Louvre, Paris' },
    { icon: '◊', label: 'Hours', value: 'Mon–Fri, 9am–6pm CET' },
  ]

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>✦ Get in Touch</p>
          <h1 className={styles.heroTitle}>
            Let's start a <em>conversation</em>
          </h1>
          <p className={styles.heroSub}>
            We'd love to hear about your project. Reach out and we'll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.contactInner}>

          {/* Info column */}
          <div className={styles.infoCol}>
            <p className={styles.tag}>Contact details</p>
            <div className={styles.infoList}>
              {infos.map(({ icon, label, value }) => (
                <div key={label} className={styles.infoItem}>
                  <span className={styles.infoIcon}>{icon}</span>
                  <div>
                    <span className={styles.infoLabel}>{label}</span>
                    <span className={styles.infoValue}>{value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.divider} />

            <div className={styles.socialBlock}>
              <p className={styles.tag}>Find us online</p>
              <div className={styles.socials}>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">Dribbble</a>
                <a href="#">Instagram</a>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className={styles.formCol}>
            {sent ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✦</span>
                <h3>Message received</h3>
                <p>Thank you for reaching out. We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="subject">Project Type</label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="brand">Brand Strategy</option>
                    <option value="design">Digital Design</option>
                    <option value="direction">Creative Direction</option>
                    <option value="content">Content & Copy</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, timeline, and goals..."
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className={styles.submit} disabled={loading}>
                  {loading ? (
                    <span className={styles.loader} />
                  ) : (
                    <>Send Message <span>→</span></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
