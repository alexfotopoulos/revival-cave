import styles from "./Hero.module.scss";
import Button from "../utilities/Button";
import Link from "next/link";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.header}>
                <h1>
                <div>REST.</div>
                <div>RELAX.</div>
                <div>REVIVE.</div>
                </h1>
                <p>Book now and see how Revival Cave is more than your typical massage and body work experience.</p>
                <div>
                    <a href="https://clients.mindbodyonline.com/classic/ws?studioid=5742028&stype=-9" target="_blank"><Button text="Book an Appointment" /></a>
                </div>
                <div className={styles.iconContainer}>
                    <img src="/icons/phoneIcon.svg" alt="phone" />
                    <span>(813) 695-4394</span>
                </div>
            </div>
        </div>
    )
}