import Link from 'next/link'
import styles from './page.module.css'

export default function About() {
  const team = [
    { name: 'Aria Renault', role: 'Creative Director', since: '2012' },
    { name: 'Marcus Chen', role: 'Design Lead', since: '2015' },
    { name: 'Olivia Kast', role: 'Strategy Director', since: '2017' },
    { name: 'Daan Kowalski', role: 'Head of Technology', since: '2018' },
  ]

  const values = [
    { symbol: 'I', title: 'Intention', desc: 'Every decision we make is deliberate. Nothing is arbitrary. Everything serves a purpose.' },
    { symbol: 'II', title: 'Craft', desc: 'We obsess over details others overlook. The difference between good and extraordinary is in the margins.' },
    { symbol: 'III', title: 'Clarity', desc: 'Complex ideas deserve simple, elegant expression. We strip away the unnecessary until only truth remains.' },
    { symbol: 'IV', title: 'Partnership', desc: 'We don\'t work for clients — we work with them. Your success is inseparable from ours.' },
  ]

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>✦ Our Story</p>
          <h1 className={styles.heroTitle}>
            We are <em>Lumière</em>
          </h1>
          <p className={styles.heroSub}>
            Founded in 2012 with a simple belief: that thoughtful design has the power to change how people experience the world.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className={styles.story}>
        <div className={styles.storyInner}>
          <div className={styles.storyText}>
            <p className={styles.tag}>Our origin</p>
            <h2>Born from a desire for better</h2>
            <p>We started as a two-person studio in a small Parisian apartment, driven by the conviction that most design was settling for good when extraordinary was achievable.</p>
            <p>Twelve years later, we've grown into a team of twenty — but the conviction hasn't changed. We still believe that the gap between adequate and exceptional is where the most meaningful work lives.</p>
            <p>Our clients range from ambitious startups redefining their categories to heritage brands reimagining their futures. What they share is a belief that design is not decoration — it is thinking made visible.</p>
          </div>
          <div className={styles.storyVisual}>
            <div className={styles.storyCard}>
              <div className={styles.storyCardInner}>
                <span className={styles.bigNum}>12</span>
                <span className={styles.bigLabel}>Years</span>
              </div>
              <div className={styles.storyCardInner}>
                <span className={styles.bigNum}>3</span>
                <span className={styles.bigLabel}>Continents</span>
              </div>
              <div className={styles.storyCardInner}>
                <span className={styles.bigNum}>20</span>
                <span className={styles.bigLabel}>Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className={styles.valuesInner}>
          <p className={styles.tag}>What drives us</p>
          <h2 className={styles.sectionTitle}>Our values</h2>
          <div className={styles.valuesList}>
            {values.map(({ symbol, title, desc }) => (
              <div key={title} className={styles.valueItem}>
                <span className={styles.valueSymbol}>{symbol}</span>
                <div className={styles.valueBody}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.team}>
        <div className={styles.teamInner}>
          <p className={styles.tag}>The people</p>
          <h2 className={styles.sectionTitle}>Meet the studio</h2>
          <div className={styles.teamGrid}>
            {team.map(({ name, role, since }) => (
              <div key={name} className={styles.teamCard}>
                <div className={styles.teamAvatar}>
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className={styles.teamInfo}>
                  <h3>{name}</h3>
                  <p>{role}</p>
                  <span>Since {since}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Want to work with us?</h2>
          <p>We take on a limited number of projects each year to ensure each one receives our full attention.</p>
          <Link href="/contact" className={styles.btnPrimary}>Start a conversation</Link>
        </div>
      </section>
    </>
  )
}
