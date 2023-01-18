import styles from "./Mission.module.scss";

export default function Mission() {
    return (
        <div className={styles.mission}>
            <div className={styles.missionSection}>
                <h2>OUR MISSION</h2>
                <p className={styles.missionStatement}>Improve quality of life through routine and affordable wellness services.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis qui ipsam ea placeat numquam, id tenetur ab temporibus omnis iusto nobis animi iste asperiores laudantium cupiditate maiores dolor quaerat.</p>
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
