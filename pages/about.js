import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import OfficeInfo from "@/components/layouts/OfficeInfo";
import styles from "../styles/pageStyles/about.module.scss";

export default function about() {
    return (
        <div>
            <Navbar />
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
                        Theragun, trigger point release, sports streching, and
                        an optional hot/cold therapy finishing treatment with
                        the use of a 40 degree cold plunge!
                    </p>
                    <h3 className={styles.aboutSectionHeading}>About Adam</h3>
                    <p>
                        An Ocala native, Adam began his fitness journey at the
                        age of 13 after discovering his love for weight
                        training. He competed in weightlifting competitions in
                        high school and became a certified personal trainer
                        while attending Florida State University.
                    </p>
                    <p>
                        Throughout his fitness journey, Adam incurred numerous
                        injuries including herniated discs, tendinitis, and a
                        ruptured pectoral muscle. Though these injuries were
                        mentally frustrating, Adam came to learn that receiving
                        regular massage and body work would help prevent injury,
                        improve muscle growth and healing, and help him get back
                        to what he loved best - training.
                    </p>
                    <p>
                        After competing in a bodybuilding show in 2015, Adam
                        broadened his fitness routine, incorporating yoga,
                        Pilates, cycling, and circuit training. Each program
                        taught him a little bit more about the body, its true
                        biomechanical function, and most importantly, the need
                        to rest, recover and heal.
                    </p>
                    <p>
                        With this vast amount of knowledge and experience in the
                        fitness industry, Adam became a licensed massage
                        therapist and opened the Revival Cave to help others
                        heal and perform at their best.
                    </p>
                </div>
            </div>
            <OfficeInfo />
            <Footer />
        </div>
    );
}
