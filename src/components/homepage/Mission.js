import styles from "./Mission.module.scss";

export default function Mission() {
    return (
        <div className={styles.mission}>
            <div className={styles.missionSection}>
                <h2>OUR MISSION</h2>
                <p className={styles.missionStatement}>We strive to create a personalized experience for each individual client by combining great body work with exceptional hospitality.</p>
            </div>
        </div>
    )
}
