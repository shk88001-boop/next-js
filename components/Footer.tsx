import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.mark}>✦</span>
          <span className={styles.name}>Lumière</span>
          <p className={styles.tagline}>Crafting extraordinary digital experiences with intention and artistry.</p>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h4>Navigate</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.col}>
            <h4>Services</h4>
            <Link href="#">Branding</Link>
            <Link href="#">Web Design</Link>
            <Link href="#">Strategy</Link>
          </div>
          <div className={styles.col}>
            <h4>Social</h4>
            <Link href="#">Twitter</Link>
            <Link href="#">LinkedIn</Link>
            <Link href="#">Dribbble</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 Lumière Studio. All rights reserved.</span>
        <span>Crafted with precision</span>
      </div>
    </footer>
  )
}
