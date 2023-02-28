import styles from "./OfficeHours.module.scss";

export default function OfficeHours() {
    return (
        <div className={styles.officeHoursContainer}>
            <h3 className={styles.officeHoursHeading}>Office Hours</h3>
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
                    <div>8:00am - 8:00pm</div>
                    <div>8:00am - 5:00pm</div>
                    <div>8:00am - 8:00pm</div>
                    <div>8:00am - 5:00pm</div>
                    <div>8:00am - 8:00pm</div>
                    <div>Closed</div>
                    <div>Closed</div>
                </div>
            </div>
            <p className={styles.note}>* by appointment only</p>
        </div>
    )
}
