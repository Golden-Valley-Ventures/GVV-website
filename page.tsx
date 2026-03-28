"use client";

import { useState, useEffect } from "react";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrandThesis from "@/components/BrandThesis";
import EcosystemOverview from "@/components/EcosystemOverview";
import CoreDomains from "@/components/CoreDomains";
import AGIntelSpotlight from "@/components/AGIntelSpotlight";
import OperatingModel from "@/components/OperatingModel";
import Philosophy from "@/components/Philosophy";
import Impact from "@/components/Impact";
import Initiatives from "@/components/Initiatives";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
