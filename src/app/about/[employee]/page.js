"use client";

import styles from "@/styles/pageStyles/employee.module.scss";
import Image from "next/image";
import { therapists } from "@/helpers/therapists";
import { estheticians } from "@/helpers/estheticians";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import LeftArrow from "@/src/components/utilities/LeftArrow";


export default function Therapist() {
  //hook to get params from URL
  const params = useParams();

  //empty variable for employee selected
  let employee = null;

  //check if "employee" param from url matches a slug for a therapist
  for (let t of therapists) {
    //if param matches a slug, assign to empty "employee" variable
    if (t.slug === params.employee) {
      employee = t;
    }
  }

  //check if "employee" param from url matches a slug for an esthetician
  for (let e of estheticians) {
    //if param matches a slug, assign to empty "employee" variable
    if (e.slug === params.employee) {
      employee = e;
    }
  }

  //initialize router for redirect if no therapist found
  const router = useRouter();
  //useEffect to handle redirect
  useEffect(() => {
    if (!employee) {
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
    <div className={styles.employeePage}>
      <div className={styles.employeeSection1}>
        {!employee && <h1 className={styles.employeeHeading}>Loading...</h1>}
        {employee && <div>
          <div className={styles.employeeHeadingContainer}>
            <h1 className={styles.employeeHeading}>{employee.name}</h1>
            <Link href="/about">
              <div style={{ display: "flex" }}>
                <LeftArrow />
                <span className={styles.backLink}>Back</span>
              </div>
            </Link>
          </div>
          <div className={styles.bioContainer}>
            <div className={styles.bioImageContainer}>
              <Image src={employee.image}
                fill={true}
                objectFit="cover"
                className={styles.bioImage}
                alt={`photo of ${employee.name}`}
                priority
              />
            </div>
            <div>{employee.bio.map((b, idx) => <p key={idx} className={styles.bioParagraph}>{b}</p>)}</div>
          </div>
        </div>}
      </div>
    </div>
  );
}