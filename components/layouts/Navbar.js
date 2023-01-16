import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>RVC</div>
      <div className={styles.linksGroup}>
        <Link legacyBehavior href="/plans"><a>Health Benefits</a></Link>
        <Link legacyBehavior href="/plans"><a>Plans & Pricing</a></Link>
        <Link legacyBehavior href="/plans"><a>About</a></Link>
      </div>
    </nav>
  )
}