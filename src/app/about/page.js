"use client";

import OfficeInfo from "@/src/components/layouts/OfficeInfo";
import styles from "@/styles/pageStyles/about.module.scss";
import HeadShot from "@/src/components/about/HeadShot";
import { therapists } from "@/helpers/therapists";
import {estheticians} from "@/helpers/estheticians"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function About() {
    
    //initialize router
    const router = useRouter();

    //useEffect to force hard reload if user navigates back to /schedule
    useEffect(() => {
        //function to catch the popstate event
        const handlePopState = (event) => {
            //if the new pathname is /schedule
            if (window.location.pathname === "/schedule") {
                //force hard reload
                window.location.assign("/schedule");
            }
        };

        window.addEventListener("popstate", handlePopState);
    }, []);
    return (
        <div>
            <div className={styles.aboutPage}>
                <div className={styles.aboutSection1}>
                    <h1 className={styles.aboutHeading}>Our Story</h1>
                    <h3 className={styles.aboutSectionHeading}>
                        About The Revival Cave
                    </h3>
                    <p>
                        The Revival Cave provides a highly personalized
                        experience for individuals seeking a full package of
                        massage and bodywork, facial services, and exceptional
                        hospitality. Whether you’re seeking chronic pain relief,
                        injury prevention/recovery, general muscle tissue
                        maintenance, or help with your skincare, the Revival Cave is committed to providing
                        the highest quality service to address your needs.
                    </p>
                    <p>
                        We use a wide array of modalities including cupping,
                        instrument assisted soft tissue mobilization (IASTM),
                        Theragun, trigger point release, and sports stretching.
                    </p>
                    <h3 className={styles.aboutSectionHeading}>Meet our Massage Therapists</h3>
                    <div className={styles.headshotContainer}>
                        {therapists.map(t => <HeadShot key={t.name} {...t} />)}
                    </div>
                    <h3 className={styles.aboutSectionHeading}>Meet our Massage Estheticians</h3>
                    <div className={styles.headshotContainer}>
                        {estheticians.map(t => <HeadShot key={t.name} {...t} />)}
                    </div>
                </div>
            </div>
            <OfficeInfo />
        </div>
    );
}
