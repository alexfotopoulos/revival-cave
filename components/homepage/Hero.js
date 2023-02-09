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
                <p>With you in mind, we strive to ensure your treatment is more than your typical massage and body work experience.</p>
                <div>
                    <Link href="/schedule"><a><Button text="Book an Appointment" /></a></Link>
                </div>
            </div>
        </div>
    )
}