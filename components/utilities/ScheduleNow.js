import styles from "./ScheduleNow.module.scss";
import Button from "./Button";
import Link from "next/link";

export default function ScheduleNow() {
  return (
    <div className={styles.scheduleNow}>
        <h3 className={styles.scheduleNowHeading}>Schedule an appointment today!</h3>
        <p className={styles.scheduleNowText}>Click below to view the calendar for availability</p>
        <Link href="https://squareup.com/appointments/book/t8rdc46kpe5ehn/LKFBNGP1JXAKV/services"><a><Button text="Book an Appointment"/></a></Link>
    </div>
  )
}
