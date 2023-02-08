import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Modal from "../utilities/Modal";

export default function Navbar() {
  const [content, setContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  function handleShowModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  useEffect(() => {
    if (window.innerWidth > 900) {
      setContent(
        <div className={styles.linksGroup}>
          <Link href="https://squareup.com/appointments/book/t8rdc46kpe5ehn/LKFBNGP1JXAKV/services"><a>Schedule a Visit</a></Link>
          <Link href="/services"><a>Services Offered</a></Link>
          <Link href="/about"><a>About</a></Link>
        </div>
      )
    } else {
      setContent(
        <div className={styles.iconDiv} onClick={handleShowModal}>
          <span className={styles.navIcon}></span>
        </div>
      );
    }
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) {
        setContent(
          <div className={styles.linksGroup}>
            <Link href="https://squareup.com/appointments/book/t8rdc46kpe5ehn/LKFBNGP1JXAKV/services"><a>Schedule a Visit</a></Link>
            <Link href="/services"><a>Services Offered</a></Link>
            <Link href="/about"><a>About</a></Link>
          </div>
        )
      } else {
        setContent(
          <div className={styles.iconDiv} onClick={handleShowModal}>
            <span className={styles.navIcon}></span>
          </div>
        );
      }
    }

    window.addEventListener("resize", handleResize);
  }, [])


  return (
    <div className={styles.modalCatcher}>
      <nav className={router.pathname === "/" ? `${styles.nav} ${styles.transparent}` : `${styles.nav} ${styles.colorBackground}`}>
        <div className={styles.brand}><Link href="/"><img src="logos/gold-logo.png" alt="company logo" /></Link></div>
        {!showModal && content}
      </nav>
      {showModal && <Modal function={handleCloseModal} />}
    </div>
  )
}