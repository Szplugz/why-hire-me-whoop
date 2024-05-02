"use client";

import Image from "next/image";
import InfoPage from "./components/InfoPage";
import LandingPage from "./components/LandingPage";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Parallax speed={-100}>
        <LandingPage></LandingPage>
      </Parallax>
      {/* <Parallax speed={5}> */}
      <InfoPage></InfoPage>
      {/* </Parallax> */}
    </main>
  );
}
