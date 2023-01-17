import styles from "./Navbar.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Modal from "../utilities/Modal";

export default function Navbar() {
  const [content, setContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
          <Link legacyBehavior href="/schedule"><a>Schedule a Visit</a></Link>
          <Link legacyBehavior href="/plans-pricing"><a>Plans & Pricing</a></Link>
          <Link legacyBehavior href="/about"><a>About</a></Link>
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
            <Link legacyBehavior href="/schedule"><a>Schedule a Visit</a></Link>
            <Link legacyBehavior href="/plans-pricing"><a>Plans & Pricing</a></Link>
            <Link legacyBehavior href="/about"><a>About</a></Link>
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
      <nav className={styles.nav}>
        <div className={styles.brand}><Link href="/">RVC</Link></div>
        {!showModal && content}
      </nav>
      {showModal && <Modal function={handleCloseModal} />}
    </div>
  )
}