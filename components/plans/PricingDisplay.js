import styles from "./PricingDisplay.module.scss";

export default function PricingDisplay(props) {
    return (
        <div className={styles.pricingDisplay}>
            {props.bestValue && <div className={styles.valueDisplay}>Best Value</div>}
            <div className={styles.mainDisplay}>
                <span>{props.type}</span>
                <span>${props.price}</span>
            </div>
            {props.militaryPrice && (<div className={styles.militaryDisplay}>
                <div className={styles.militaryDisplaySection1}>Military</div>
                <div className={styles.militaryDisplaySection2}>$79/mo.</div>
            </div>)}
        </div>
    )
}
