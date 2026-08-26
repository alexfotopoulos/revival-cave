"use client";

import styles from "@/styles/pageStyles/schedule.module.scss";
import { useEffect, useState } from "react";
import Script from "next/script";


export default function Schedule() {
    //state to set initial iframe height
    // const [iframeHeight, setIframeHeight] = useState(2850);

    //check screen width of initial render to determine iframeHeight
    // useEffect(() => {
    //     if (window.innerWidth > 700) {
    //         setIframeHeight(1930);
    //     }
    // }, []);

    //track screen width to adjust iframeHeight as needed
    // useEffect(() => {
    //     function handleResize() {
    //         if (window.innerWidth > 700) {
    //             setIframeHeight(1930);
    //         } else {
    //             setIframeHeight(2850);
    //         }
    //     }
    //     window.addEventListener("resize", handleResize);
    // }, []);

    const [showIframe, setShowIframe] = useState(false);

    useEffect(() => {
        setShowIframe(true);
    }, []);

    return (
        <div>
            <div className={styles.schedulePage}>
                {/* <iframe
                    src="https://www.massagebook.com/therapists/revival-cave/widget/services"
                    frameborder="0"
                    width="100%"
                    height={iframeHeight}
                ></iframe> */}
                {showIframe && (<><div className="mindbody-widget" data-widget-type="Appointments" data-widget-id="e8198349255"></div><Script async src="https://brandedweb.mindbodyonline.com/embed/widget.js"></Script></>)}
            </div>
        </div>
    );
}