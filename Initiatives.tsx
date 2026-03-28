"use client";

import { COLORS, FONTS } from "@/lib/tokens";
import { Reveal, SectionLabel } from "@/components/ui";

const PROJECTS = [
  { name: "AGIntel", domain: "Intelligence Platform", status: "Active", desc: "AI-augmented research and decision-support for operators and analysts." },
  { name: "Venture Fund I", domain: "Capital", status: "Deploying", desc: "Concentrated portfolio of high-conviction investments in technology and infrastructure." },
  { name: "GVV Media Lab", domain: "Media & Content", status: "In Development", desc: "Editorial and interactive content platforms focused on business intelligence and analysis." },
  { name: "Heartland Digital", domain: "Operating Business", status: "In Development", desc: "Digital infrastructure and services for underserved small and mid-market businesses." },
];

export default function Initiatives() {
  return (
    <section style={{ background: COLORS.ivory, padding: "clamp(80px, 10vw, 140px) 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <Reveal><SectionLabel>Select Initiatives</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 style={{
              fontFamily: FONTS.serif, fontWeight: 600,
              fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.25,
              color: COLORS.navy, margin: "0 0 12px",
            }}>What we&apos;re building now</h2>
          </Reveal>
        </div>

        <div style={{ borderTop: `1px solid ${COLORS.border}` }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className="initiative-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 140px 1fr 100px",
                  gap: 24,
                  alignItems: "center",
                  padding: "clamp(20px, 2.5vw, 28px) 0",
                  borderBottom: `1px solid ${COLORS.border}`,
                  transition: "background 0.3s, padding-left 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = "16px";
                  e.currentTarget.style.background = "rgba(255,255,255,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = "0";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div style={{
                  fontFamily: FONTS.serif, fontWeight: 600,
                  fontSize: 20, color: COLORS.navy,
                }}>{p.name}</div>
                <div style={{
                  fontFamily: FONTS.sans, fontSize: 11, fontWeight: 500,
                  color: COLORS.textMuted, letterSpacing: "0.04em",
                }}>{p.domain}</div>
                <div style={{
                  fontFamily: FONTS.sans, fontSize: 13,
                  color: COLORS.slateMid, lineHeight: 1.5,
                }}>{p.desc}</div>
                <div style={{
                  fontFamily: FONTS.sans, fontSize: 10, fontWeight: 600,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: p.status === "Active" ? COLORS.gold : COLORS.textMuted,
                  textAlign: "right",
                }}>{p.status}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .initiative-row {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
      `}</style>
    </section>
  );
}
