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
                    <Link href="/schedule"><Button text="Book an Appointment" /></Link>
                </div>
                <div className={styles.iconContainer}>
                    <img src="/icons/phoneIcon.svg" alt="phone" />
                    <span>(813) 695-4394</span>
                </div>
            </div>
        </div>
    )
}