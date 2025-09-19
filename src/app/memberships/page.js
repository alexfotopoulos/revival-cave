"use client";

import PricingTable from "@/src/components/utilities/PricingTable";
import styles from "@/styles/pageStyles/memberships.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Memberships() {

  //initialize router
  const router = useRouter();

  //useEffect to force hard reload if user navigates back to /schedule
  useEffect(() => {
    //function to catch the popstate event
    const handlePopState = (event) => {
      //if the new pathname is /schedule
      if (window.location.pathname === "/schedule") {
        //force hard reload
        window.location.assign("/schedule");
      }
    };

    window.addEventListener("popstate", handlePopState);
  }, []);
  return (
    <div>
      <div className={styles.membershipsPage}>
        <h1 className={styles.membershipsHeading}>Memberships</h1>
        <div className={styles.membershipsSection1}>
          <p>We’re excited to announce that Revival Cave is now offering exclusive memberships designed to give our clients more relaxation, more savings, and more wellness all year round. As a member, you'll enjoy 25% off all non-member rates and giftable credits that can be gifted to family and friends at any time during your active membership. <a className={styles.membershipLink} href="https://clients.mindbodyonline.com/classic/ws?studioid=5742028&stype=40" target="_blank">Sign up</a> today!</p>
        </div>
        <PricingTable />
        <ul className={styles.termsList}>
          <li><span className={styles.termsListHeading}>Pause Policy: </span>Memberships can be paused at any time</li>
          <li><span className={styles.termsListHeading}>Credit Expiration: </span>Monthly service credits expire 12 months after the date they are issued</li>
          <li><span className={styles.termsListHeading}>Non-refundable: </span>All membership charges and unused credits are non-refundable</li>
          <li><span className={styles.termsListHeading}>Recurring biling: </span>Memberships are billed monthly and will auto-renew unless cancelled or paused with proper notice</li>
          <li><span className={styles.termsListHeading}>Cancellation Policy: </span>To avoid being charged, cancellation requests must be submitted at least 7 days before the next billing cycle</li>
        </ul>
      </div>
    </div>
  );
}