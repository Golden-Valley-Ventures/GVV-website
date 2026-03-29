"use client";

import { useState, useEffect } from "react";

import Navigation from "../Navigation";
import Hero from "../Hero";
import BrandThesis from "../BrandThesis";
import EcosystemOverview from "../EcosystemOverview";
import CoreDomains from "../CoreDomains";
import AGIntelSpotlight from "../AGIntelSpotlight";
import OperatingModel from "../OperatingModel";
import Philosophy from "../Philosophy";
import Impact from "../Impact";
import Initiatives from "../Initiatives";
import Contact from "../Contact";
import Footer from "../Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navigation scrolled={scrolled} />
      <main>
        <Hero />
        <BrandThesis />
        <EcosystemOverview />
        <CoreDomains />
        <AGIntelSpotlight />
        <OperatingModel />
        <Philosophy />
        <Impact />
        <Initiatives />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
