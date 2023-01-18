import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import ScheduleNow from "@/components/utilities/ScheduleNow";
import styles from "../styles/pageStyles/about.module.css";

export default function about() {
    return (
        <div>
            <div className={styles.navBackground}></div>
            <Navbar />
            <div className={styles.aboutPage}>
                <div className={styles.aboutSection1}>
                    <h1 className={styles.aboutHeading1}>Our Story</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo distinctio sit velit officiis nobis natus in obcaecati facilis repellendus, maiores dolores aut amet, doloremque modi laboriosam perspiciatis. Mollitia, aliquam recusandae.
                    Molestiae rem hic vitae eum excepturi consectetur cumque. Maxime cupiditate omnis, corrupti numquam non, itaque repudiandae reprehenderit ab cum officiis quaerat. Natus deleniti ex ut fugiat quaerat, delectus explicabo vitae.
                    At soluta, fuga rem nemo consequuntur, recusandae obcaecati, minima alias ullam corporis itaque incidunt saepe eius totam amet maiores rerum quis. Omnis ratione iure, asperiores labore dolorem distinctio. Animi, sapiente.</p>
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
            <Footer />
        </div>
    )
}
