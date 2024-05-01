import React from "react";
import Image from "next/image";
import img from "../assets/images/0.png";
import Header from "./Header";

const LandingPage = () => {
  return (
    <div className="landing-screen h-screen w-full fixed top-0 left-0 z-0">
      <Header></Header>
      <Image
        className="w-full absolute z-[-10]"
        src={img}
        alt="hero-or-whatever"
      ></Image>
      <h1 className="text-7xl inline-block w-1/2 relative top-[220px] left-[4rem] text-white">
        I’M NEEL, AND I WANT TO HELP WHOOP BUILD THE FUTURE OF PERSONAL HEALTH
      </h1>
    </div>
  );
};

export default LandingPage;