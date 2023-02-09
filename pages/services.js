import styles from "../styles/pageStyles/services.module.scss";
import Navbar from "@/components/layouts/Navbar";
import ScheduleNow from "@/components/utilities/ScheduleNow";
import Footer from "@/components/layouts/Footer";
import Service from "@/components/utilities/Service";
import services from "@/helpers/services";

export default function Services() {
    return (
        <div>
            <Navbar />
            <div className={styles.servicesPage}>
                <div className={styles.servicesSection1}>
                    <h1 className={styles.servicesHeading}>Services and Treatments</h1>
                    <div className={styles.services}>
                        {services.map(service => (
                            <div><Service title={service.title} description={service.description}
                            price={service.price}/></div>
                        ))}
                    </div>
                </div>
                <div className={styles.servicesSection2}>
                    <ScheduleNow />
                </div>
            </div>
            <Footer />
        </div>
    )
}
