import styles from "./OfficeInfo.module.scss";
import OfficeHours from "../utilities/OfficeHours";

export default function OfficeInfo() {
    return (
        <div className={styles.officeInfo}>
            <div className={styles.officeInfoSection}>
                <h2>Map</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis qui ipsam ea placeat numquam, id tenetur ab temporibus omnis iusto nobis animi iste asperiores laudantium cupiditate maiores dolor quaerat.</p>
            </div>
            <div className={styles.officeInfoSection}>
                <OfficeHours />
            </div>
        </div>
    )
}
