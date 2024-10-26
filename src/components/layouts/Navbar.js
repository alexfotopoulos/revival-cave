"use client";

import styles from "./Navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Modal from "../utilities/Modal";

export default function Navbar() {
  const [content, setContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const pathname = usePathname();

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
          <Link href="/about">About</Link>
          <Link href="/schedule">Schedule a Visit</Link>
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
            <Link href="/about">About</Link>
            <Link href="/schedule">Schedule a Visit</Link>
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
      <nav className={styles.permanentNav}>
        <div className={styles.newBrand}><Link href="/"><img src="/logos/gold-logo.png" alt="company logo" /></Link></div>
        {!showModal && content}
      </nav>
      {showModal && <Modal function={handleCloseModal} />}
    </div>
  )
}