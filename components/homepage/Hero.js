import styles from "./Hero.module.css";
import Button from "../utilities/Button";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.header}>
                <h1>
                <div>DON'T DO PAIN.</div>
                <div>DO YOU.</div>
                </h1>
                <h3>Whether you are seeking relief from everyday aches and pains or <br/> looking to maintain a healthy, active life, we can help.</h3>
                <div>
                    <Button text="Book an Appointment" />
                </div>
            </div>
        </div>
    )
}