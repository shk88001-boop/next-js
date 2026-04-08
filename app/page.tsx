import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  const services = [
    { icon: '◈', title: 'Brand Strategy', desc: 'We craft identities that endure. From naming to visual systems, every touchpoint is considered.' },
    { icon: '◉', title: 'Digital Design', desc: 'Interfaces that are as functional as they are beautiful. Pixel-perfect execution, always.' },
    { icon: '◊', title: 'Creative Direction', desc: 'A guiding vision that unifies your communication across every medium and platform.' },
    { icon: '⬡', title: 'Content & Copy', desc: 'Words that work. Messaging rooted in clarity, with the poetry to make it memorable.' },
  ]

  const stats = [
    { num: '12+', label: 'Years of craft' },
    { num: '340', label: 'Projects delivered' },
    { num: '98%', label: 'Client satisfaction' },
    { num: '28', label: 'Industry awards' },
  ]

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.grid} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>✦ Premium Design Studio</p>
          <h1 className={styles.heroTitle}>
            We shape the
            <em> extraordinary</em>
          </h1>
          <p className={styles.heroSub}>
            Lumière is a boutique creative studio helping ambitious brands communicate with clarity, elegance, and lasting impact.
          </p>
          <div className={styles.heroActions}>
            <Link href="/about" className={styles.btnPrimary}>Discover our work</Link>
            <Link href="/contact" className={styles.btnGhost}>Start a project →</Link>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className={styles.statsInner}>
          {stats.map(({ num, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statNum}>{num}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.tag}>What we do</p>
            <h2 className={styles.sectionTitle}>Services built for the discerning</h2>
          </div>
          <div className={styles.serviceGrid}>
            {services.map(({ icon, title, desc }) => (
              <div key={title} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className={styles.manifesto}>
        <div className={styles.manifestoInner}>
          <p className={styles.tag}>Our philosophy</p>
          <blockquote className={styles.quote}>
            "Design is not what it looks like. Design is how it <em>works</em>, how it <em>feels</em>, and what it <em>means</em> to the people who encounter it."
          </blockquote>
          <cite className={styles.cite}>— The Lumière Manifesto</cite>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2>Ready to build something <em>remarkable</em>?</h2>
          <p>Let's talk about your vision. We'd love to hear what you're building.</p>
          <Link href="/contact" className={styles.btnPrimary}>Get in touch</Link>
        </div>
      </section>
    </>
  )
}
