import { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImpactMetrics from "./components/ImpactMetrics";
import SelectedWork from "./components/SelectedWork";
import Expertise from "./components/Expertise";
import CareerJourney from "./components/CareerJourney";
import ClientWall from "./components/ClientWall";
import About from "./components/About";
import CreativeProcess from "./components/CreativeProcess";
import Tools from "./components/Tools";
import ModernPractice from "./components/ModernPractice";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="font-body">
      <Preloader onDone={() => setLoaded(true)} />
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] bg-signal text-paper px-4 py-2 font-mono text-sm"
      >
        Skip to content
      </a>
      <Navbar />
      <main className={loaded ? "" : "invisible"}>
        <Hero />
        <ImpactMetrics />
        <SelectedWork />
        <Expertise />
        <CareerJourney />
        <ClientWall />
        <About />
        <CreativeProcess />
        <Tools />
        <ModernPractice />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
