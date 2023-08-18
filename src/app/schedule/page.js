import styles from "../../../styles/pageStyles/schedule.module.scss";

export default function Schedule() {
    return (
        <div>
            <div className={styles.schedulePage}>
                <iframe
                    src="https://www.massagebook.com/therapists/revival-cave/widget/services"
                    frameborder="0"
                    width="100%"
                    height="925"
                ></iframe>
            </div>
        </div>
    );
}
