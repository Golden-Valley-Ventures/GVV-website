"use client";

import { COLORS, FONTS } from "@/lib/tokens";
import { Reveal, SectionLabel, GoldRule } from "@/components/ui";

const PATHS = [
  { label: "Discuss an Opportunity", sub: "Investment, partnership, or venture" },
  { label: "Explore a Product", sub: "AGIntel and platform access" },
];

export default function Contact() {
  return (
    <section
      id="connect"
      style={{
        background: COLORS.navy,
        padding: "clamp(80px, 10vw, 140px) 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        width: "min(80vw, 600px)", height: "min(80vw, 600px)",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.03)",
      }} />

      <div style={{
        maxWidth: 680, margin: "0 auto", textAlign: "center",
        position: "relative", zIndex: 2,
      }}>
        <Reveal><SectionLabel light>Connect</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h2 style={{
            fontFamily: FONTS.serif, fontWeight: 600,
            fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.25,
            color: COLORS.white, margin: "0 0 20px",
          }}>
            The right conversation<br />starts with the right question
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <GoldRule width={48} style={{ margin: "0 auto 28px" }} />
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{
            fontFamily: FONTS.sans, fontSize: 15,
            color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 40,
          }}>
            Whether you&apos;re exploring a partnership, evaluating an investment opportunity, or building something that could benefit from the GVV ecosystem — we&apos;re interested in serious conversations with serious people.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div
            className="cta-grid"
            style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: 16, maxWidth: 440, margin: "0 auto 48px",
            }}
          >
            {PATHS.map((cta) => (
              <div
                key={cta.label}
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 2, padding: "24px 20px",
                  cursor: "pointer", transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = COLORS.gold;
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div style={{
                  fontFamily: FONTS.serif, fontWeight: 600,
                  fontSize: 16, color: COLORS.white, marginBottom: 6,
                }}>{cta.label}</div>
                <div style={{
                  fontFamily: FONTS.sans, fontSize: 11,
                  color: "rgba(255,255,255,0.35)",
                }}>{cta.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <div style={{ fontFamily: FONTS.sans, fontSize: 14, color: "rgba(255,255,255,0.45)" }}>
            <a
              href="mailto:hello@goldenvalleyventures.com"
              style={{
                color: COLORS.goldLight, textDecoration: "none",
                borderBottom: `1px solid ${COLORS.gold}30`,
                paddingBottom: 2, transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${COLORS.gold}30`)}
            >
              hello@goldenvalleyventures.com
            </a>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
