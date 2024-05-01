import Image from "next/image";
import InfoPage from "./components/InfoPage";
import LandingPage from "./components/LandingPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LandingPage></LandingPage>
      <InfoPage></InfoPage>
    </main>
  );
}
