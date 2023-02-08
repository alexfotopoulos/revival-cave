import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import OfficeInfo from "@/components/layouts/OfficeInfo";
import ScheduleNow from "@/components/utilities/ScheduleNow";
import styles from "../styles/pageStyles/about.module.scss";

export default function about() {
    return (
        <div>
            <Navbar />
            <div className={styles.aboutPage}>
                <div className={styles.aboutSection1}>
                    <h1 className={styles.aboutHeading1}>Our Story</h1>
                    <p>Adam fell in love with weight training at a young age of 13. By the time he attended college, he understood that receiving massage and body work regularly would help prevent injury, improve muscle growth and healing, and help deliver a better package when competing in bodybuilding.
                    </p>
                    <p>
                    Throughout his fitness career, he has obtained numerous injuries, including herniated discs, tendinitis, and a ruptured pectoral muscle. Though these injuries were mentally frustrating, Adam learned how to set goals and follow rehab and body work programs to get back to what he loved best - training. With this experience, he can now use what he learned by being a student of injury to help others get through theirs.
                    </p>
                    <p>
                    After competing in a bodybuilding show in 2015, Adam shortly after found another love through his injuries – yoga. Yoga broadened Adam’s fitness expertise which led to venturing into Pilates, cycling, and circuit training. With his vast amount of knowledge and experience in the fitness industry, Adam is in tune with what movements and patterns will optimize biomechanical function in your muscle tissue and joints.
                    </p>
                    <h3 className={styles.aboutSectionHeading}>Mission</h3>
                    <p>Improve quality of life through routine and affordable wellness services.</p>
                    <h3 className={styles.aboutSectionHeading}>About The Revival Cave</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum aperiam cumque repellendus asperiores dolores vero explicabo enim eos corrupti necessitatibus facilis placeat, fuga corporis nam quod cum. Deleniti, adipisci!</p>
                    <h3 className={styles.aboutSectionHeading}>Did you know?</h3>
                    <p>Error adipisci, voluptatibus optio modi iure hic laboriosam earum ab voluptatem rem quos cupiditate est beatae, autem suscipit consequatur.</p>
                </div>
                <div className={styles.aboutSection2}>
                    <ScheduleNow />
                </div>
            </div>
            <OfficeInfo />
            <Footer />
        </div>
    )
}
