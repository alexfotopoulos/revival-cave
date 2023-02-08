import styles from "./Hero.module.scss";
import Button from "../utilities/Button";
import Link from "next/link";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.header}>
                <h1>
                <div>DON'T DO PAIN.</div>
                <div>DO YOU.</div>
                </h1>
                <p>With you in mind, we strive to ensure your treatment is more than your typical massage and body work experience.</p>
                <div>
                    <Link href="/schedule"><a><Button text="Book an Appointment" /></a></Link>
                </div>
            </div>
        </div>
    )
}