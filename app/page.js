"use client";

import Image from "next/image";
import InfoPage from "./components/InfoPage";
import LandingPage from "./components/LandingPage";
import { Parallax } from "react-scroll-parallax";
import FloatingButton from "./components/FloatingButton";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("float-up-fade-in");
        }
      });
    });

    const buttonObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("float-up-fade-in-button");
        }
      });
    });

    const elements = document.querySelectorAll(".animated");
    elements.forEach((element) => observer.observe(element));
    buttonObserver.observe(document.querySelector("#presentation-button"));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <FloatingButton />
      <Parallax speed={-100}>
        <LandingPage></LandingPage>
      </Parallax>
      <InfoPage></InfoPage>
    </main>
  );
}
