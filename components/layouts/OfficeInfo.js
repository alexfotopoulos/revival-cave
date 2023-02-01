import styles from "./OfficeInfo.module.scss";
import OfficeHours from "../utilities/OfficeHours";
import Map from "../utilities/Map";

export default function OfficeInfo() {
    return (
        <div className={styles.officeInfo}>
            <div className={styles.officeInfoSection}>
                <Map />
                {/* <p>placeholder for map during dev</p> */}
            </div>
            <div className={styles.officeInfoSection}>
                <OfficeHours />
            </div>
        </div>
    )
}
