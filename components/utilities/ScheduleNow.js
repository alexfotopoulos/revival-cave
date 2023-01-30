import styles from "./ScheduleNow.module.scss";
import Button from "./Button";
import Link from "next/link";

export default function ScheduleNow() {
  return (
    <div className={styles.scheduleNow}>
        <h3 className={styles.scheduleNowHeading}>Schedule an appointment today!</h3>
        <p className={styles.scheduleNowText}>Click below to view the calendar for availability</p>
        <Link href="/schedule"><a><Button text="View calendar"/></a></Link>
    </div>
  )
}