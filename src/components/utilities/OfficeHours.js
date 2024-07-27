import styles from "./OfficeHours.module.scss";

export default function OfficeHours() {
    return (
        <div className={styles.officeHoursContainer}>
            <h3 className={styles.officeHoursHeading}>Business Hours</h3>
            <div className={styles.officeHours}>
                <div className={styles.officeHoursDay}>
                    <div>Monday:</div>
                    <div>Tuesday:</div>
                    <div>Wednesday:</div>
                    <div>Thursday:</div>
                    <div>Friday:</div>
                    <div>Saturday:</div>
                    <div>Sunday:</div>
                </div>
                <div className={styles.officeHoursTime}>
                    <div>9:00am - 10:00pm</div>
                    <div>9:00am - 10:00pm</div>
                    <div>9:00am - 10:00pm</div>
                    <div>9:00am - 10:00pm</div>
                    <div>9:00am - 10:00pm</div>
                    <div>9:00am - 10:00pm</div>
                    <div>Closed</div>
                </div>
            </div>
            <p className={styles.note}>* by appointment only</p>
        </div>
    )
}
