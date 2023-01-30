import styles from "../styles/pageStyles/schedule.module.scss";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export default function SchedulePage() {
  return (
    <div>
      <div className={styles.navBackground}>
        <Navbar />
      </div>
      <div className={styles.schedulePage}>
        <div className={styles.scheduleSection1}>
          <h1 className={styles.scheduleHeading1}>Schedule a Visit</h1>
          <p>Use the calendar below to book an appointment today!</p>
          {/* <h3 className={styles.scheduleSectionHeading}>Mission</h3>
          <p>Improve quality of life through routine and affordable wellness services.</p>
          <h3 className={styles.scheduleSectionHeading}>About The Revival Cave</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum aperiam cumque repellendus asperiores dolores vero explicabo enim eos corrupti necessitatibus facilis placeat, fuga corporis nam quod cum. Deleniti, adipisci!</p>
          <h3 className={styles.scheduleSectionHeading}>Did you know?</h3>
          <p>Error adipisci, voluptatibus optio modi iure hic laboriosam earum ab voluptatem rem quos cupiditate est beatae, autem suscipit consequatur.</p> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}