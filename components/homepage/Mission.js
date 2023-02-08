import styles from "./Mission.module.scss";

export default function Mission() {
    return (
        <div className={styles.mission}>
            <div className={styles.missionSection}>
                <h2>OUR MISSION</h2>
                <p className={styles.missionStatement}>We strive to create a personalized experience for each individual client by combining great body work with exceptional hospitality.</p>
                {/* <p>With you in mind, our goal is to create a personalized experience for each individual client combining great body work with exceptional hospitality</p> */}
            </div>
            <div className={styles.missionSection}>
                <h2>OUR COMMITMENT TO YOU</h2>
                <ul className={styles.missionList}>
                    <li><span>&#10004;</span> No Appointments - Walk-ins welcome</li>
                    <li><span>&#10004;</span> No Insurance Hassles - $0 Copays</li>
                    <li><span>&#10004;</span> Open Evenings & Weekends</li>
                    <li><span>&#10004;</span> Quality Care by Licensed Professionals</li>
                </ul>
            </div>
        </div>
    )
}
