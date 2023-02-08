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
                    <Link href="https://squareup.com/appointments/book/t8rdc46kpe5ehn/LKFBNGP1JXAKV/services"><a className={styles.modalLink}>Schedule a Visit</a></Link>
                    <Link href="/services"><a className={styles.modalLink}>Services Offered</a></Link>
                    <Link href="/about"><a className={styles.modalLink}>About</a></Link>
                </div>
            </div>
        </div>
    )
}
