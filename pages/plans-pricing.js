import styles from "../styles/pageStyles/plansPricing.module.scss";
import Navbar from "@/components/layouts/Navbar";
import ScheduleNow from "@/components/utilities/ScheduleNow";
import Footer from "@/components/layouts/Footer";
import PricingDisplay from "@/components/plans/PricingDisplay";

export default function plansPricing() {
    return (
        <div>
            <div className={styles.navBackground}></div>
            <Navbar />
            <div className={styles.plansPage}>
                <div className={styles.plansSection1}>
                    <h1 className={styles.plansHeading1}>Wellness Plans & Pricing</h1>
                    <h3 className={styles.plansSectionHeading}>We make staying healthy affordable and convenient.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo distinctio sit velit officiis nobis natus in obcaecati facilis repellendus, maiores dolores aut amet, doloremque modi laboriosam perspiciatis. Mollitia, aliquam recusandae.
                        Molestiae rem hic vitae eum excepturi consectetur cumque. Maxime cupiditate omnis, corrupti numquam non, itaque repudiandae reprehenderit ab cum officiis quaerat. Natus deleniti ex ut fugiat quaerat, delectus explicabo vitae.
                        At soluta, fuga rem nemo consequuntur, recusandae obcaecati, minima alias ullam corporis itaque incidunt saepe eius totam amet maiores rerum quis. Omnis ratione iure, asperiores labore dolorem distinctio. Animi, sapiente.</p>
                    <h2 className={styles.plansHeading2}>Wellness Plans</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vel cumque rem, quibusdam animi harum perspiciatis deleniti et in soluta dolor error voluptatum eaque nemo.</p>
                    <div className={styles.pricingDisplayGrid}>
                        <PricingDisplay type="Adult" price="89/mo." bestValue={true} militaryPrice="79"/>
                        <PricingDisplay type="Youth" price="49/mo." bestValue={true} militaryPrice={false} />
                    </div>
                    <h2 className={styles.plansHeading2}>Packages</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi recusandae, deleniti cupiditate similique laudantium nihil.</p>
                    <div className={styles.pricingDisplayGrid}>
                        <PricingDisplay type="6 Visits" price="209" bestValue={false} militaryPrice="199"/>
                        <PricingDisplay type="10 Visits" price="299" bestValue={false} militaryPrice={269} />
                        <PricingDisplay type="20 Visits" price="499" bestValue={false} militaryPrice={449} />
                    </div>
                    <h2 className={styles.plansHeading2}>Initial Visits</h2>
                    <div className={styles.pricingDisplayGrid}>
                        <PricingDisplay type="Initial Visit" price="29" bestValue={false} militaryPrice="19"/>
                    </div>
                    <h2 className={styles.plansHeading2}>Single Visit</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className={styles.pricingDisplayGrid}>
                        <PricingDisplay type="Single Visit" price="45" bestValue={false} militaryPrice={false}/>
                    </div>
                </div>
                <div className={styles.plansSection2}>
                    <ScheduleNow />
                </div>
            </div>
            <Footer />
        </div>
    )
}
