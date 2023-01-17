import styles from "./Modal.module.css";
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
                    <Link legacyBehavior href="/about"><a className={styles.modalLink}>About</a></Link>
                    <Link legacyBehavior href="/health-benefits"><a className={styles.modalLink}>Health Benefits</a></Link>
                    <Link legacyBehavior href="/plans"><a className={styles.modalLink}>Plans & Pricing</a></Link>
                </div>
            </div>
        </div>
    )
}
