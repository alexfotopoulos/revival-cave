import styles from "./Service.module.scss";

export default function Service(props) {

    return (
        <div className={styles.service}>
            <div className={styles.serviceDescription}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className={styles.servicePricing}>
                <span>${props.price}</span>
            </div>
        </div>
    )
}
