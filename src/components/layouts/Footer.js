import styles from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerSection1}>
                <img
                    className={styles.footerLogo}
                    src="/logos/new-logo.png"
                    alt="company logo"
                />
                <div className={styles.footerLinksGroup}>
                    <Link href="/about" className={styles.footerLink}>
                        About
                    </Link>
                    <a href="/schedule" className={styles.footerLink}>
                        Schedule a Visit
                    </a>
                </div>
                <p className={styles.contactUs}>Contact Us</p>
                <div className={styles.contactGroup}>
                    <div className={styles.phoneNumber}>
                        <span style={{fontWeight: "bold"}}>Phone: </span>
                        <span>(813) 695-4394</span>
                    </div>
                    <div>
                        <span style={{fontWeight: "bold"}}>Email: </span>
                        <span>revivalcavetampa@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className={styles.footerSection2}>
                <p>&copy; 2025 The Revival Cave</p>
                <p>License #MM44483</p>
            </div>
        </div>
    );
}
