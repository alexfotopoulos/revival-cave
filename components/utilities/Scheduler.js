import styles from "./Scheduler.module.css";
import Button from "./Button";

export default function Scheduler() {
  return (
    <div className={styles.scheduler}>
        <h3 className={styles.schedulerHeading}>Schedule an appointment today!</h3>
        <p className={styles.schedulerText}>Click below to view the calendar for availability</p>
        <Button text="View calendar"/>
    </div>
  )
}
