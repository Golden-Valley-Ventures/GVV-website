"use client";

import { COLORS, FONTS } from "@/lib/tokens";
import { Reveal, SectionLabel } from "@/components/ui";

const DOMAINS = [
  { num: "01", title: "Ventures & Capital", body: "Strategic investment and venture incubation — deploying capital with conviction into high-potential opportunities across technology, infrastructure, and emerging markets." },
  { num: "02", title: "Software & Platforms", body: "Building proprietary digital products, SaaS platforms, and intelligence tools designed for durability, real-world utility, and long-term defensibility." },
  { num: "03", title: "Media & Experiences", body: "Creating content platforms, interactive experiences, and editorial ventures that inform, engage, and shape how people understand complex systems." },
  { num: "04", title: "Intelligence & Research", body: "Applied intelligence, data-driven analysis, and research infrastructure that turns information into actionable insight across domains." },
  { num: "05", title: "Operating Businesses", body: "Acquiring, building, and managing real-world businesses with a focus on operational discipline, strong unit economics, and sustainable growth." },
  { num: "06", title: "Mission-Driven Initiatives", body: "Deploying capital and capability toward outcomes that matter — community development, workforce advancement, and systemic improvement in underserved areas." },
];

export default function CoreDomains() {
  return (
    <section id="ventures" style={{ background: COLORS.white, padding: "clamp(80px, 10vw, 140px) 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <Reveal><SectionLabel>Core Domains</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 style={{
              fontFamily: FONTS.serif, fontWeight: 600,
              fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.25,
              color: COLORS.navy, margin: "0 0 16px",
            }}>Where we build and operate</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{
              fontFamily: FONTS.sans, fontSize: 15,
              color: COLORS.textMuted, maxWidth: 540, lineHeight: 1.7,
            }}>
              Six interconnected verticals — each one a pillar of the GVV ecosystem, designed to create compound value across the platform.
            </p>
          </Reveal>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: 1, background: COLORS.border,
          border: `1px solid ${COLORS.border}`,
        }}>
          {DOMAINS.map((d, i) => (
            <Reveal key={d.num} delay={i * 0.06}>
              <DomainCard {...d} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DomainCard({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div
      className="domain-card"
      style={{
        background: COLORS.white,
        padding: "clamp(28px, 3vw, 40px)",
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        transition: "background 0.3s",
        cursor: "default",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.ivory)}
      onMouseLeave={(e) => (e.currentTarget.style.background = COLORS.white)}
    >
      <div style={{
        fontFamily: FONTS.sans, fontSize: 11, fontWeight: 600,
        color: COLORS.gold, letterSpacing: "0.1em", marginBottom: 12,
      }}>{num}</div>
      <h3 style={{
        fontFamily: FONTS.serif, fontWeight: 600,
        fontSize: "clamp(20px, 2.5vw, 24px)", color: COLORS.navy,
        marginBottom: 12, lineHeight: 1.3,
      }}>{title}</h3>
      <p style={{
        fontFamily: FONTS.sans, fontSize: 13,
        color: COLORS.textMuted, lineHeight: 1.7, flex: 1,
      }}>{body}</p>
    </div>
  );
}
