"use client";

import styles from "@/styles/pageStyles/therapist.module.scss";
import Image from "next/image";
import { therapists } from "@/helpers/therapists";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import LeftArrow from "@/src/components/utilities/LeftArrow";


export default function Therapist() {
  //hook to get params from URL
  const params = useParams();

  //empty variable for therapist selected
  let therapist = null;

  //check if "therapist" param from url matches a slug for a therapist
  for (let t of therapists) {
    //if param matches a slug, assign to empty "therapist" variable
    if (t.slug === params.therapist) {
      therapist = t;
    }
  }

  //initialize router for redirect if no therapist found
  const router = useRouter();
  //useEffect to handle redirect
  useEffect(() => {
    if (!therapist) {
      router.replace("/about");
    }
  }, []);

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
    <div className={styles.therapistPage}>
      <div className={styles.therapistSection1}>
        {!therapist && <h1 className={styles.therapistHeading}>Loading...</h1>}
        {therapist && <div>
          <div className={styles.therapistHeadingContainer}>
            <h1 className={styles.therapistHeading}>{therapist.name}</h1>
            <Link href="/about">
              <div style={{ display: "flex" }}>
                <LeftArrow />
                <span className={styles.backLink}>Back</span>
              </div>
            </Link>
          </div>
          <div className={styles.bioContainer}>
            <div className={styles.bioImageContainer}>
              <Image src={therapist.image}
                fill={true}
                objectFit="cover"
                className={styles.bioImage}
                alt={`photo of ${therapist.name}`}
                priority
              />
            </div>
            <div>{therapist.bio.map((b, idx) => <p key={idx} className={styles.bioParagraph}>{b}</p>)}</div>
          </div>
        </div>}
      </div>
    </div>
  );
}