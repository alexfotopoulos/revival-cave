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
                            src="/AdamHeadshotNew.jpeg"
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
                            src="/AndyHeadshot2.jpeg"
                            height={500}
                            width={500}
                            alt="photo of Andy"
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
                    <h3 className={styles.aboutSectionHeading}>About Tucker</h3>
                    <div className={styles.aboutIndividual}>
                        <Image
                            src="/TuckerHeadshot.jpeg"
                            height={500}
                            width={500}
                            alt="photo of Tucker"
                            className={styles.aboutImageAndy}
                        />
                        <div className={styles.aboutBio}>
                            <p className={styles.bioParagraph}>
                            Tucker’s adventure into the world of massage therapy began as a personal quest for healing. Struggling with chronic pain and stress, he sought alternative solutions to traditional medicine. In this pursuit, he discovered the profound therapeutic benefits of meditation, breath work and massage. It not only alleviated his physical discomfort but also provided a sanctuary for emotional and mental restoration. This transformative experience ignited a deep passion within him, leading him to embark on a remarkable journey of becoming a skilled and empathetic massage therapist.
                            </p>
                            <p className={styles.bioParagraph}>
                            Tucker’s training was extensive, including both traditional massage techniques and holistic approaches to wellness. He immersed himself in the study of anatomy and the intricacies of human musculature, understanding that the body's intricacies are like a puzzle waiting to be unlocked. Throughout his training, he developed a unique style that combines the art and science of massage, making each session a personalized and therapeutic experience.
                            </p>
                            <p className={styles.bioParagraph}>
                                
                            </p>
                            <p className={styles.bioParagraph}>
                            Today, as a licensed and certified massage therapist, Tucker is dedicated to helping others on their own healing journeys. His mission is to provide a safe and nurturing space for his clients to relax, rejuvenate, and release the tensions that weigh them down. With a kind and empathetic touch, Tucker not only relieves physical discomfort but also strives to create a holistic sense of well-being. He believes that true healing goes beyond the physical realm, encompassing the emotional and spiritual aspects of life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <OfficeInfo />
        </div>
    );
}
