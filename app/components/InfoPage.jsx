"use client";

import React from "react";
import Image from "next/image";
import img0 from "../assets/images/0.png";
import img1 from "../assets/images/1.png";
import gro from "../assets/images/gro.png";
import resolv from "../assets/images/resolv.png";
import { Accordion } from "./Accordion";
import { AccordionTrigger } from "./Accordion";
import { AccordionItem } from "./Accordion";
import { AccordionContent } from "./Accordion";
import { useRef, useState, useEffect } from "react";

const images = {
  resolv: resolv,
  gro: gro,
};

const InfoPage = () => {
  const [trigger, setTrigger] = useState(false);
  const [currImage, setCurrImage] = useState("resolv");

  const handleClick = () => {
    setTrigger(!trigger);
  };

  useEffect(() => {
    updateImages();
  }, [trigger]);

  const updateImages = () => {
    const accordionItems = Array.from(
      document.getElementsByClassName("accordion-item")
    );
    let openItemValue = null;

    accordionItems.forEach((item) => {
      if (item.getAttribute("data-state") === "open") {
        openItemValue = item.getAttribute("id");
      }
    });

    // Update the image based on the openItemValue
    console.log("Updating image to ", openItemValue);
    setCurrImage(openItemValue);
  };

  return (
    <div className="bg-white w-full z-10 mt-[calc(95vh)] rounded-[2rem] p-24 relative">
      <div className="section-one text-[5rem] mb-8">WHO AM I?</div>
      <div className="section-one text-2xl mb-[8rem] flex justify-end">
        <p className="inline-block w-[60%]">
          I’m a 21 y/o final-year computer science & psychology student at UIUC
          specializing in fullstack engineering. I’ve been building beautiful
          digital experiences for the last 4 years. I deeply value curiosity,
          beauty, honesty, and optimism, and I’m deeply interested in the
          intersection of software and personal health.
        </p>
      </div>
      <Image src={img0} className="relative left-0 mb-[8rem]"></Image>
      <div className="section-one text-6xl mb-[8rem] leading-[1]">
        <p className="inline-block w-[60%] font-normal">
          {`I WANT TO SPEND THE REST OF MY LIFE BUILDING SOFTWARE THAT ENHANCES
        PEOPLE'S HEALTH`}
        </p>
      </div>
      <div className="section-3 flex justify-between mb-[8rem]">
        <Image className="w-1/2" src={img1}></Image>
        <div className="w-[41.6%] flex flex-col items-center justify-evenly">
          <h className="text-5xl font-semibold">
            And I believe I have the experience, background, and level of
            curiosity needed to do so successfully
          </h>
          <div>
            <p className="text-2xl">
              Two years ago, I overcame my lifelong battle with insomnia and
              anxiety after several months of CBT-i and daily behavioral and
              nutritional changes.
            </p>
            <br></br>
            <p className="text-2xl">
              That was when I decided that I want to leverage my programming
              skills and interest in human behavior to build tools that can help
              people live healthier, more meaningful lives.
            </p>
            <br></br>
            <p className="text-2xl">
              Since WHOOP has been an integral part of my growth for the last 2
              years, it feels like the ideal place for me to start.
            </p>
          </div>
        </div>
      </div>
      <div className="section-4 text-6xl mb-[8rem]">
        <span className="text-[#696969]">{`“A personal interest in WHOOP’s mission is great, but do you have the qualities needed to succeed in building a complex product in a high-stakes environment?” `}</span>
        I believe I do.
      </div>
      <div className="section-5-accordion flex">
        <Accordion collapsible className="w-1/2">
          <h className="text-5xl font-bold mb-8 inline-block">
            My Professional Experience
          </h>
          <AccordionItem value="resolv" onClick={handleClick}>
            <AccordionTrigger className="text-3xl" value="resolv">
              01 Fullstack Engineer @ Resolv
            </AccordionTrigger>
            <AccordionContent>{`Building Resolv's website and the frontend infrastructure for their digital asset protection tool. Learning about web security, authentication, complex state management with context, and web3.
`}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="gro" className="my-8" onClick={handleClick}>
            <AccordionTrigger className="text-3xl">
              02 Fullstack Analyst Intern @ Gro Intelligence
            </AccordionTrigger>
            <AccordionContent>{`As a fullstack intern on the special projects team, I designed & built Gro's global tradeflow visualisation tool and helped streamline their internal developer tools. Learned a lot about React's rendering cycle & Context API, web interactivity, and taking data apart in python.

`}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="mediaocean" onClick={handleClick}>
            <AccordionTrigger className="text-3xl">
              03 SWE Intern @ Mediaocean
            </AccordionTrigger>
            <AccordionContent>{`Helped the ad software team migrate their RESTful APIs to GraphQL, and built parts of their client-facing webapp. Learned how to design APIs and write custom build jobs.
`}</AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="section-5-accordion-images flex items-center justify-center w-1/2 p-16">
          <Image
            id="accordionImage"
            alt="accordion image"
            src={images[currImage]}
            width={800}
            height={150}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
