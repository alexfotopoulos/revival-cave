import OfficeInfo from "@/src/components/layouts/OfficeInfo";
import styles from "../../../styles/pageStyles/about.module.scss";
import HeadShot from "@/src/components/about/HeadShot";
import {therapists} from "../../../helpers/therapists"

export default function about() {
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
                        massage and bodywork services and exceptional
                        hospitality. Whether you’re seeking chronic pain relief,
                        injury prevention/recovery, or general muscle tissue
                        maintenance, the Revival Cave is committed to providing
                        the highest quality service to address your needs.
                    </p>
                    <p>
                        We use a wide array of modalities including cupping,
                        instrument assisted soft tissue mobilization (IASTM),
                        Theragun, trigger point release, and sports stretching.
                    </p>
                    <h3 className={styles.aboutSectionHeading}>Meet our Massage Therapists</h3>
                    <div className={styles.headshotContainer}>
                      {therapists.map(t => <HeadShot key={t.name} {...t}/>)}
                    </div>
                </div>
            </div>
            <OfficeInfo />
        </div>
    );
}
