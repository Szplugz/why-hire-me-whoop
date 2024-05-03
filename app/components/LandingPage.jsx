"use client";

import React from "react";
import Image from "next/image";
import landingImage from "../assets/images/landing.webp";
import mobileImage from "../assets/images/landing-mobile.jpg";
import Header from "./Header";
import { useEffect } from "react";

const LandingPage = () => {
  return (
    <div className="landing-screen h-screen w-full z-0">
      <Header></Header>
      <Image
        className="w-full hidden sm:block h-screen sm:h-auto absolute z-[-10] translate-y-[-8rem]"
        src={landingImage}
        alt="hero-or-whatever"
      ></Image>
      <Image
        className="w-full sm:hidden h-screen sm:h-auto absolute z-[-10] translate-y-[-8rem]"
        src={mobileImage}
        alt="hero-or-whatever"
      ></Image>
      <h1 className="animated sm:text-7xl text-2xl inline-block w-1/2 relative top-[220px] left-8 sm:left-[4rem] text-white">
        I’M NEEL, AND I WANT TO HELP WHOOP BUILD THE FUTURE OF PERSONAL HEALTH
      </h1>
    </div>
  );
};

export default LandingPage;
