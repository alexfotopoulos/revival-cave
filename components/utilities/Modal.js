import styles from "./Modal.module.scss";
import Link from "next/link";

export default function Modal(props) {
    function handleClick() {
        props.function();
    }
    return (
        <div>
            <div className={styles.closeModal} onClick={handleClick}>&#x2715;</div>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <div className={styles.linksGroup}>
                    <Link href="/schedule"><a className={styles.modalLink}>Schedule a Visit</a></Link>
                    <Link href="/plans-pricing"><a className={styles.modalLink}>Plans & Pricing</a></Link>
                    <Link href="/about"><a className={styles.modalLink}>About</a></Link>
                </div>
            </div>
        </div>
    )
}
