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
          <Link legacyBehavior href="/health-benefits"><a>Health Benefits</a></Link>
          <Link legacyBehavior href="/plans"><a>Plans & Pricing</a></Link>
          <Link legacyBehavior href="/about"><a>About</a></Link>
        </div>
      )
    } else {
      setContent(
        <span className={styles.navIcon} onClick={handleShowModal}></span>
      );
    }
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) {
        setContent(
          <div className={styles.linksGroup}>
            <Link legacyBehavior href="/about"><a>About</a></Link>
            <Link legacyBehavior href="/health-benefits"><a>Health Benefits</a></Link>
            <Link legacyBehavior href="/plans"><a>Plans & Pricing</a></Link>
          </div>
        )
      } else {
        setContent(
          <span className={styles.navIcon} onClick={handleShowModal}></span>
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
      {showModal && <Modal function={handleCloseModal}/>}
    </div>
  )
}