"use client";

import styles from "@/styles/pageStyles/schedule.module.scss";
import { useEffect, useState } from "react";

export default function Schedule() {
    //state to set initial iframe height
    const [iframeHeight, setIframeHeight] = useState(1600);

    //check screen width of initial render to determine iframeHeight
    useEffect(() => {
        if (window.innerWidth > 700) {
            setIframeHeight(1150);
        }
    }, []);

    //track screen width to adjust iframeHeight as needed
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 700) {
                setIframeHeight(1150);
            } else {
                setIframeHeight(1600);
            }
        }
        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <div className={styles.schedulePage}>
                <iframe
                    src="https://www.massagebook.com/therapists/revival-cave/widget/services"
                    frameborder="0"
                    width="100%"
                    height={iframeHeight}
                ></iframe>
            </div>
        </div>
    );
}
