"use client";

import React from "react";
import Image from "next/image";
import img0 from "../assets/images/0.png";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/whoop-cafe.webp";
import img3 from "../assets/images/harvard-steps.webp";
import gro from "../assets/images/gro.png";
import resolv from "../assets/images/resolv.png";
import { Twitter, Linkedin, Globe, Mail, Github } from "lucide-react";
import { Accordion } from "./Accordion";
import { AccordionTrigger } from "./Accordion";
import { AccordionItem } from "./Accordion";
import { AccordionContent } from "./Accordion";
import { useRef, useState, useEffect } from "react";
import Card from "./Card";
import Link from "next/link";

const workImages = {
  resolv: resolv,
  gro: gro,
};

const projectImages = {
  //   feynman: feynman,
  //   huberman: huberman,
  //   neelkhare: neelkhare,
  //   other: null,
};

const InfoPage = () => {
  const [trigger, setTrigger] = useState(false);
  const [currWorkImage, setcurrWorkImage] = useState("resolv");
  const [currProjectImage, setcurrProjectImage] = useState("feynman");

  const handleClick = () => {
    setTrigger(!trigger);
  };

  useEffect(() => {
    updateWorkImages();
  }, [trigger]);

  const updateWorkImages = () => {
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
    setcurrWorkImage(openItemValue);
  };

  return (
    <>
      <div className="bg-white w-full z-10 mt-[-5vh] rounded-t-[2rem] p-24 relative">
        <div className="animated section-one text-[5rem] mb-8">WHO AM I?</div>
        <div className="section-one text-2xl mb-[8rem] flex justify-end">
          <p className="inline-block w-[60%]">
            I’m a 21 y/o final-year computer science & psychology student at
            UIUC specializing in fullstack engineering. I’ve been building
            beautiful digital experiences for the last 4 years. I value
            curiosity, beauty, honesty, and optimism, and I’m deeply interested
            in the intersection of software and personal health.
          </p>
        </div>
        <Image src={img0} className="relative left-0 mb-[8rem]"></Image>
        <div className="section-one text-6xl mb-[8rem] leading-[1]">
          <p className="animated inline-block w-[60%] font-semibold">
            {`I WANT TO SPEND THE REST OF MY LIFE BUILDING SOFTWARE THAT ENHANCES
        PEOPLE'S HEALTH`}
          </p>
        </div>
        <div className="section-3 flex justify-between mb-[8rem]">
          <iframe
            className="w-1/2"
            src="https://drive.google.com/file/d/1pf0zSwgYH2oAd5o6n2qvPDXXx2xhVJBO/preview"
            allow="autoplay"
          ></iframe>
          {/* <Image className="w-1/2" src={img1}></Image> */}
          <div className="w-[41.6%] flex flex-col items-center justify-evenly gap-8">
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
                skills and interest in human behavior to build tools that can
                help people live healthier, more meaningful lives.
              </p>
              <br></br>
              <p className="text-2xl">
                Since WHOOP has been an integral part of my growth for the last
                2 years, it feels like the ideal place for me to start.
              </p>
            </div>
          </div>
        </div>
        <div className="section-4a text-5xl text-center mb-24">
          <span className="text-[#696969]">{`“A personal interest in WHOOP’s mission is great, but do you have the qualities needed to succeed in building a complex product in a high-stakes environment?”`}</span>
        </div>
        <div className="animated section-4b text-5xl text-center mb-[8rem] font-bold">
          {`I believe I do.`}
        </div>
        <div className="section-5-accordion flex">
          <Accordion collapsible className="w-1/2">
            <div className="py-16">
              <h className="text-5xl font-bold mb-16 inline-block">
                My Professional Experience
              </h>
              <AccordionItem value="resolv" onClick={handleClick}>
                <AccordionTrigger className="text-3xl" value="resolv">
                  01 Fullstack Engineer @ Resolv
                </AccordionTrigger>
                <AccordionContent>{`Building Resolv's website and the frontend infrastructure for their digital asset protection tool. Learning about web security, authentication, complex state management with context, and web3.
`}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="gro" onClick={handleClick}>
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
            </div>
          </Accordion>
          <div className="section-5-accordion-images flex items-center justify-center w-1/2 p-16">
            {currWorkImage && (
              <Image
                id="accordionImage"
                alt="accordion image"
                src={workImages[currWorkImage]}
                width={800}
                height={150}
              ></Image>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white w-full z-10 px-24 relative">
        <div className="section-5-accordion flex mb-24">
          <div className="section-5-accordion-images flex items-center justify-center w-1/2">
            {currProjectImage && (
              <Image
                id="accordionImage"
                alt="accordion image"
                src={projectImages[currProjectImage]}
                width={800}
                height={150}
              ></Image>
            )}
          </div>
          <Accordion collapsible className="w-1/2">
            <div className="py-16">
              <h className="text-5xl font-bold mb-8 inline-block">
                Personal Projects
              </h>
              <AccordionItem value="feynman" onClick={handleClick}>
                <AccordionTrigger className="text-3xl" value="resolv">
                  01 feynman - simplifying academic articles
                </AccordionTrigger>
                <AccordionContent>{`An AI tool that simplifies academic papers without loss of information so that anyone can extract relevant, actionable information from them. I built this mostly because I was getting tired of hearing conflicting opinions about nutrition data and was having a hard time understanding the statistical methods and industry-specific jargon used in the studies I was reading. Learning a lot about async requests, data streaming, and CSS.
`}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="neelkhare" onClick={handleClick}>
                <AccordionTrigger className="text-3xl">
                  02 neelkhare.com - my personal website
                </AccordionTrigger>
                <AccordionContent>{`it's more complicated than it should be, and that's only because I wanted to implement almost everything from scratch to teach myself the fundamentals of web architecture.

`}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="huberman" onClick={handleClick}>
                <AccordionTrigger className="text-3xl">
                  03 the library of life
                </AccordionTrigger>
                <AccordionContent>{`An iOS app that uses AI to answer questions you have about the podcasts you listen to. Started this project not only because I have a lot of unsanswered questions for podcast hosts, but also because I want to be able to quickly retrieve information from lengthy, information-dense episodes.
`}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="other" onClick={handleClick}>
                <AccordionTrigger className="text-3xl">
                  04 other stuff
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    <li>{`Built websites for Quant and Resolv`}</li>
                    <li>{`Taught as a CA for CS classes at UIUC`}</li>
                    <li>{`Participated in a few hackathons`}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
        </div>
        <div className="section-6 flex mb-24 px-6 py-12 bg-black text-white rounded-3xl items-center justify-center">
          <h className="section-6-text text-3xl w-[80%] inline-block">
            My tech stack mainly consists of React, Next.js, Python, Node, and
            TailwindCSS, and I&apos;ve worked with GraphQL, Postgres, AWS, and
            several other tools. I think my experience with these tools puts me
            in a great position to thrive as a Fullstack Engineer at WHOOP.
          </h>
        </div>
        <div className="section-6 flex gap-16 mb-24">
          <div className="animated section-6-heading text-5xl w-1/2">{`With that said, I can provide value in a lot of different ways, depending on where help is needed.`}</div>
          <div className="section-6-text text-xl w-1/2 flex flex-col gap-8">
            <p>{`I spend most of my time working on user interfaces, which is what I would prefer to do at WHOOP. I can help build, design and enhance WHOOP's website and web client. I also have some experience building in Swift and React Native, and I'm willing to help out with the iOS app as well.`}</p>
            <p>{`That's not all I can do, though. As a fullstack engineer, I also work quite a lot on the backend, writing algorithms and working with APIs and databases. Additionally, I have a strong mathematical and scientific background, so if need be, I would be more than happy to work on backend services. I've always wondered what goes on behind the scenes of WHOOP's performance calculations.`}</p>
            <p>{`If there are no full-time engineering or design positions available, I'd also be open to exploring internship options. I'm less concerned about the structure of my work than I am with doing whatever I can to help improve human performance.`}</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white z-10 relative px-24 pb-24">
        <div className="animated section-6 text-5xl mb-24">
          WHY HIRE <em className="font-bold underline">ME</em>?
        </div>
        <div className="section-6 flex justify-end mb-24">
          <h className=" text-3xl w-2/3 inline-block">{`I’m pretty proud of the work I’ve done in the past, but that’s only half of the story. I think you’ll find that I’m just as good of a colleague as I am an engineer - hopefully even better.`}</h>
        </div>
        <div className="section-7 flex gap-8 mb-24">
          <div className="section-7-left flex flex-col gap-8 w-1/2">
            <div className="flex flex-col gap-4 justify-center text-center bg-[#f3f5f9] rounded-3xl p-12 min-h-[300px]">
              <h className="text-4xl font-semibold">{`I'm high-agency`}</h>
              <p className="text-xl">{`If I need to get something done, I will find a way to do it. I believe the world is much more malleable than we think, and agency is more about persistence than it is about ability.`}</p>
            </div>
            <Image src={img2} className="rounded-3xl"></Image>
            <div className="flex flex-col gap-4 justify-center text-center bg-[#f3f5f9] rounded-3xl p-12 min-h-[300px]">
              <h className="text-4xl font-semibold">{`I'm an autonomous team player`}</h>
              <p className="text-xl">{`I’m fairly a independent and opinionated person. But working in a team is all about collaboration, compromise, and synergy, and I realize that not everything will always go my way.`}</p>
            </div>
            <div className="flex flex-col gap-4 justify-center text-center bg-[#f3f5f9] rounded-3xl p-12 min-h-[300px]">
              <h className="text-4xl font-semibold">{`I'm proactive`}</h>
              <p className="text-xl">{`I take responsibility for myself and others. If I’m done with my assigned work, I don’t sit around waiting for more assignments. I either identify and start working on challenge areas or try to help my colleagues and pick up some of their work.`}</p>
            </div>
            <div className="flex flex-col gap-4 justify-center text-center bg-[#f3f5f9] rounded-3xl p-12 min-h-[300px]">
              <h className="text-4xl font-semibold">{`I have taste`}</h>
            </div>
          </div>
          <div className="section-7-right flex flex-col gap-8 w-1/2">
            <div className="flex flex-col gap-4 text-center bg-[#f3f5f9] rounded-3xl p-12 min-h-[300px] justify-center">
              <h className="text-4xl font-semibold">{`I love learning`}</h>
              <p className="text-xl">{`I don’t know everything - far from it, in fact. I’m a naturally curious person, though, and I take every opportunity I can get to learn about the world from the people around me. `}</p>
            </div>
            <div className="flex flex-col gap-4 text-center bg-[#f3f5f9] rounded-3xl p-12 min-h-[300px] justify-center">
              <h className="text-4xl font-semibold">{`Jack of all trades`}</h>
              <p className="text-xl">{`My relative “lack” of experience coupled with my curiosity is actually a boon - it lets me wear many hats. Besides being a developer, I can help out with design, growth, and research.`}</p>
            </div>
            <div className=" flex flex-col gap-4 items-center text-center bg-[#f3f5f9] rounded-3xl p-12 min-h-[300px] justify-center">
              <h className="text-4xl font-semibold">{`...and master of communication`}</h>
              <p className="text-xl">{`People’s ability to listen to and share their opinions with their coworkers can make or break the gears of a firm. If there’s one thing I can confidently say I’m excellent at, it’s communication - articulating my thoughts clearly and asking the right questions.`}</p>
            </div>
            <Image src={img3} className="rounded-3xl"></Image>
            <div className=" flex flex-col gap-4 items-center text-center bg-[#f3f5f9] rounded-3xl p-12 min-h-[300px] justify-center">
              <h className="text-4xl font-semibold">{`I love talking to people`}</h>
              <p className="text-xl">{`You won’t find me just sitting at my desk buried in my screen. I love interacting with, learning from, and having fun with the people around me.`}</p>
            </div>
          </div>
        </div>
        <div
          id="contact"
          className="section-8-heading text-5xl text-[#696969] text-center mb-24 flex justify-center"
        >
          <h className="animated inline-block w-[60%]">
            I would love to hop on a call to explore how I can make a difference
            at WHOOP. Feel free to reach out to me through any of these
            channels!
          </h>
        </div>
        <div className="section-8-contact flex gap-8 overflow-x-scroll mb-24 justify-center">
          <Link href="https://twitter.com/Szplugz" target="_blank">
            <Card additionalStyles="hover:bg-white border">
              <Twitter />
              <p className="text-xl font-semibold">Twitter</p>
            </Card>
          </Link>
          <Link href="https://www.linkedin.com/in/neelkhare/" target="_blank">
            <Card additionalStyles="hover:bg-white border">
              <Linkedin />
              <p className="text-xl font-semibold">LinkedIn</p>
            </Card>
          </Link>
          <Link href="mailto:neelk2@illinois.edu" target="_blank">
            <Card additionalStyles="hover:bg-white border">
              <Mail />
              <p className="text-xl font-semibold">Email</p>
            </Card>
          </Link>
        </div>
        <div className="section-8-heading text-5xl text-[#696969] text-center mb-24 flex justify-center">
          <h className="animated inline-block w-[60%]">
            If you want to learn more about me, check out my website and github.
            Thanks for reading through this website, and I hope we can be in
            touch soon!
          </h>
        </div>
        <div className="section-8-contact flex gap-8 overflow-x-scroll justify-center">
          <Link href="https://neelkhare.com" target="_blank">
            <Card additionalStyles="hover:bg-white border">
              <Globe />
              <p className="text-xl font-semibold">Website</p>
            </Card>
          </Link>
          <Link href="https://github.com/szplugz" target="_blank">
            <Card additionalStyles="hover:bg-white border">
              <Github />
              <p className="text-xl font-semibold">Github</p>
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
};

export default InfoPage;
