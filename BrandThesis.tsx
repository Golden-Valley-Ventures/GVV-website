"use client";

import { COLORS, FONTS } from "@/lib/tokens";
import { Reveal, SectionLabel, GoldRule } from "@/components/ui";

export default function BrandThesis() {
  return (
    <section style={{ background: COLORS.ivory, padding: "clamp(80px, 10vw, 140px) 32px" }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <Reveal><SectionLabel>Who We Are</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h2 style={{
            fontFamily: FONTS.serif, fontWeight: 600,
            fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.25,
            color: COLORS.navy, margin: "0 0 32px",
          }}>
            Not a fund. Not an agency.<br />
            A platform for building what endures.
          </h2>
        </Reveal>
        <Reveal delay={0.2}><GoldRule width={48} style={{ marginBottom: 32 }} /></Reveal>
        <Reveal delay={0.25}>
          <p style={{
            fontFamily: FONTS.sans, fontSize: "clamp(15px, 1.6vw, 17px)",
            lineHeight: 1.8, color: COLORS.slateMid, marginBottom: 24,
          }}>
            Golden Valley Ventures exists at the intersection of capital, technology, and execution. We invest in, incubate, and operate ventures across software, media, intelligence platforms, and mission-driven business — not as a holding company collecting logos, but as an operating platform that builds with discipline and intention.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p style={{
            fontFamily: FONTS.sans, fontSize: "clamp(15px, 1.6vw, 17px)",
            lineHeight: 1.8, color: COLORS.slateMid,
          }}>
            Every initiative under our umbrella shares a common thread: substance over spectacle, long-term value over short-term extraction, and the belief that capital deployed with judgment creates outcomes that compound — in markets, in communities, and in capability.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
