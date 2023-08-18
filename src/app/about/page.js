import OfficeInfo from "@/src/components/layouts/OfficeInfo";
import styles from "../../../styles/pageStyles/about.module.scss";
import Image from "next/image";

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
                        Theragun, trigger point release, sports streching, and
                        an optional hot/cold therapy finishing treatment with
                        the use of a 40 degree cold plunge!
                    </p>
                    <h3 className={styles.aboutSectionHeading}>About Adam</h3>
                    <div className={styles.aboutIndividual}>
                        <Image
                            src="/AdamHeadshot.jpeg"
                            height={500}
                            width={500}
                            alt="photo of Adam"
                            className={styles.aboutImageAdam}
                        />
                        <div className={styles.aboutBio}>
                            <p className={styles.bioParagraph}>
                                An Ocala native, Adam began his fitness journey
                                at the age of 13 after discovering his love for
                                weight training. He competed in weightlifting
                                competitions in high school and became a
                                certified personal trainer while attending
                                Florida State University.
                            </p>
                            <p className={styles.bioParagraph}>
                                Throughout his fitness journey, Adam incurred
                                numerous injuries including herniated discs,
                                tendinitis, and a ruptured pectoral muscle.
                                Though these injuries were mentally frustrating,
                                Adam came to learn that receiving regular
                                massage and body work would help prevent injury,
                                improve muscle growth and healing, and help him
                                get back to what he loved best - training.
                            </p>
                            <p className={styles.bioParagraph}>
                                After competing in a bodybuilding show in 2015,
                                Adam broadened his fitness routine,
                                incorporating yoga, Pilates, cycling, and
                                circuit training. Each program taught him a
                                little bit more about the body, its true
                                biomechanical function, and most importantly,
                                the need to rest, recover and heal.
                            </p>
                            <p className={styles.bioParagraph}>
                                With this vast amount of knowledge and
                                experience in the fitness industry, Adam became
                                a licensed massage therapist and opened the
                                Revival Cave to help others heal and perform at
                                their best.
                            </p>
                        </div>
                    </div>
                    <h3 className={styles.aboutSectionHeading}>About Andy</h3>
                    <div className={styles.aboutIndividual}>
                        <Image
                            src="/AndyHeadshot.jpg"
                            height={500}
                            width={500}
                            alt="photo of Adam"
                            className={styles.aboutImageAndy}
                        />
                        <div className={styles.aboutBio}>
                            <p className={styles.bioParagraph}>
                                A 1st Generation American, Florida native from
                                Saint Petersburg, Andy began his fitness journey
                                growing up doing school sports such as soccer,
                                track, cross country, and volleyball. While
                                growing up Andy was a very active kid. He fell
                                in love with martial arts at a young age and
                                through the years has trained and competed in
                                disciplines such as Judo, Muay Thai, Boxing,
                                Tang Soo Do, Jiujitsu, Kungfu, Aikido, and
                                Hapkido.
                            </p>
                            <p className={styles.bioParagraph}>
                                Andy was in ROTC in high school and entered the
                                United States Marine Corps after graduation.
                                Joining the service tested his mental fortitude
                                and physical capabilities in stressful
                                conditions. While in the service, he was a
                                mortarman with 1/6 Weapons Company stationed in
                                Camp Lejeune in Jacksonville, North Carolina.
                            </p>
                            <p className={styles.bioParagraph}>
                                After his time in the service, he fell in love
                                with fitness, pushing his limits to see what his
                                peak performance was. He competed in various
                                Judo and Jiujitsu tournaments in his later
                                years. After sustaining many injuries from the
                                service and competitions, he switched gears and
                                decided to dedicate his purpose to healing others.
                            </p>
                            <p className={styles.bioParagraph}>
                                Nowadays, Andy spends his days educating,
                                healing, and changing lives one person at a
                                time. Outside of competitions, training, and
                                healing, you can find Andy outdoors, hitting
                                various trails or on the water kayaking, boating,
                                diving, tubing, and fishing.
                            </p>
                            <p className={styles.bioParagraph}>
                                With all his years of experience in the
                                military, martial arts, and healthcare, Andy is
                                here to provide the best attentive treatment for
                                his clients to help them on their wellness
                                journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <OfficeInfo />
        </div>
    );
}
