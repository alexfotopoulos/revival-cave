import styles from "../styles/pageStyles/schedule.module.scss";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export default function Schedule() {

    return (
        <div>
            <Navbar />
            <div className={styles.schedulePage}>
                <iframe
                    src="https://www.massagebook.com/therapists/revival-cave/widget/services"
                    frameborder="0"
                    width="100%"
                    height="925"
                ></iframe>
            </div>
            <Footer />
        </div>
    );
}