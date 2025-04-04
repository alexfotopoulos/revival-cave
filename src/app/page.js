"use client";

import Hero from "../components/homepage/Hero";
import Mission from "../components/homepage/Mission";
import OfficeInfo from "../components/layouts/OfficeInfo";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

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
      <Hero />
      <Mission />
      <OfficeInfo />
    </div>
  );
}
