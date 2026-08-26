"use client";

import styles from "@/styles/pageStyles/schedule.module.scss";
import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";

export default function Schedule() {

    //useEffect to force hard reload if user navigates back to /schedule
    useEffect(() => {
        //function to catch the popstate event
        const handlePopState = (event) => {
            //if the new pathname is /schedule
            if (window.location.pathname === "/schedule/hyde-park") {
                //force hard reload
                window.location.assign("/schedule/hyde-park");
            } else if (window.location.pathname === "/schedule/kodawari") {
                window.location.assign("/schedule/kodawari");
            }
        };

        window.addEventListener("popstate", handlePopState);
    }, []);

    return (
        <div className={styles.schedulePage}>
            <h1 className={styles.locationHeading}>Select Location</h1>
            <div className={styles.locationButtonContainer}>
                <Link className={styles.locationButton1} href={"/schedule/hyde-park"}>HYDE PARK</Link>
                <Link className={styles.locationButton2} href={"/schedule/kodawari"}>KODAWARI</Link>
            </div>
        </div>
    );
}


// export default function Schedule() {
//     //state to set initial iframe height
//     // const [iframeHeight, setIframeHeight] = useState(2850);

//     //check screen width of initial render to determine iframeHeight
//     // useEffect(() => {
//     //     if (window.innerWidth > 700) {
//     //         setIframeHeight(1930);
//     //     }
//     // }, []);

//     //track screen width to adjust iframeHeight as needed
//     // useEffect(() => {
//     //     function handleResize() {
//     //         if (window.innerWidth > 700) {
//     //             setIframeHeight(1930);
//     //         } else {
//     //             setIframeHeight(2850);
//     //         }
//     //     }
//     //     window.addEventListener("resize", handleResize);
//     // }, []);

//     const [showIframe, setShowIframe] = useState(false);

//     useEffect(() => {
//         setShowIframe(true);
//     }, []);

//     return (
//         <div>
//             <div className={styles.schedulePage}>
//                 {/* <iframe
//                     src="https://www.massagebook.com/therapists/revival-cave/widget/services"
//                     frameborder="0"
//                     width="100%"
//                     height={iframeHeight}
//                 ></iframe> */}
//                 {showIframe && (<><div className="mindbody-widget" data-widget-type="Appointments" data-widget-id="e8198349255"></div><Script async src="https://brandedweb.mindbodyonline.com/embed/widget.js"></Script></>)}
//             </div>
//         </div>
//     );
// }