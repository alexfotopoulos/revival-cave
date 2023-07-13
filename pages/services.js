import { useState, useEffect } from "react";
import styles from "../styles/pageStyles/services.module.scss";
import Navbar from "@/components/layouts/Navbar";
import ScheduleNow from "@/components/utilities/ScheduleNow";
import Footer from "@/components/layouts/Footer";
import Service from "@/components/utilities/Service";
import servicesData from "@/helpers/servicesData";

export default function Services() {
    //initial state to determine which services should be rendered
    const [duration, setDuration] = useState(30);
    const [displayedServices, setDisplayedServices] = useState([]);

    //set initial displayedServices value
    useEffect(() => {
        //filter services by duration === 30 minutes
        let initialDisaplyedServices = servicesData.filter(
            (s) => s.duration === duration
        );
        setDisplayedServices(initialDisaplyedServices);
    }, [setDisplayedServices]);

    function durationHandler(value) {
        setDuration(value);
        let newDisaplyedServices = servicesData.filter(
            (s) => s.duration === value
        );
        setDisplayedServices(newDisaplyedServices);
    }

    return (
        <div>
            <Navbar />
            <div className={styles.servicesPage}>
                <div className={styles.servicesSection1}>
                    <h1 className={styles.servicesHeading}>
                        Services and Treatments
                    </h1>
                    <div className={styles.durationToggleContainer}>
                        <div
                            className={styles.duration}
                            onClick={() => durationHandler(30)}
                            style={
                                duration === 30
                                    ? {
                                          backgroundColor: "rgb(176, 150, 91)",
                                          color: "white",
                                      }
                                    : null
                            }
                        >
                            30 mins
                        </div>
                        <div
                            className={styles.duration}
                            onClick={() => durationHandler(60)}
                            style={
                                duration === 60
                                    ? {
                                          backgroundColor: "rgb(176, 150, 91)",
                                          color: "white",
                                      }
                                    : null
                            }
                        >
                            1 hour
                        </div>
                        <div
                            className={styles.duration}
                            onClick={() => durationHandler(90)}
                            style={
                                duration === 90
                                    ? {
                                          backgroundColor: "rgb(176, 150, 91)",
                                          color: "white",
                                      }
                                    : null
                            }
                        >
                            1.5 hours
                        </div>
                        <div
                            className={styles.duration}
                            onClick={() => durationHandler(120)}
                            style={
                                duration === 120
                                    ? {
                                          backgroundColor: "rgb(176, 150, 91)",
                                          color: "white",
                                      }
                                    : null
                            }
                        >
                            2 hours
                        </div>
                    </div>
                    <div className={styles.services}>
                        {displayedServices.map((service) => (
                            <div key={service.id}>
                                <Service
                                    title={service.title}
                                    description={service.description}
                                    price={service.price}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.servicesSection2}>
                    <ScheduleNow />
                </div>
            </div>
            <Footer />
        </div>
    );
}
