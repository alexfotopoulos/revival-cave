"use client";

import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import Modal from "../utilities/Modal";

export default function Navbar() {
  //state to set content on right side of navbar
  const [content, setContent] = useState(null);
  //state to show/hide modal on mobile
  const [showModal, setShowModal] = useState(false);

  //function to toggle modal
  function toggleModal() {
    setShowModal(prev => !prev)
  }

  //useEffect to determine size of screen on initial render to determine if desktop or mobile navbar is needed
  useEffect(() => {
    if (window.innerWidth > 900) {
      setContent(
        <div className={styles.linksGroup}>
          <Link href="/about">About</Link>
          <a href="/schedule">Schedule a Visit</a>
        </div>
      )
    } else {
      setContent(
        <div className={styles.iconDiv} onClick={toggleModal}>
          <span className={styles.navIcon}></span>
        </div>
      );
    }
  }, [])

  //useEffect to monitor window size and change navbar as needed
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) {
        setContent(
          <div className={styles.linksGroup}>
            <Link href="/about">About</Link>
            <a href="/schedule">Schedule a Visit</a>
          </div>
        )
      } else {
        setContent(
          <div className={styles.iconDiv} onClick={toggleModal}>
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
        <div className={styles.brand}><Link href="/"><img src="/logos/new-logo.png" alt="company logo" /></Link></div>
        {!showModal && content}
      </nav>
      {showModal && <Modal function={toggleModal} />}
    </div>
  )
}