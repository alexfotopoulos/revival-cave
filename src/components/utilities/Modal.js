import styles from "./Modal.module.scss";
import Link from "next/link";

export default function Modal(props) {
    function handleClick() {
        props.function();
    }
    return (
        <div className={styles.modalContainer}>
            <div className={styles.closeModal} onClick={handleClick}>&#x2715;</div>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <div className={styles.linksGroup}>
                    <Link href="/about" className={styles.modalLink} onClick={handleClick}>About</Link>
                    <Link href="/schedule" className={styles.modalLink} onClick={handleClick}>Schedule a Visit</Link>
                </div>
            </div>
        </div>
    )
}
