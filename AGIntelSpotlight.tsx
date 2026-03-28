"use client";

import { COLORS, FONTS } from "@/lib/tokens";
import { Reveal, SectionLabel, GoldRule } from "@/components/ui";

const CAPABILITIES = [
  "Structured data analysis & synthesis",
  "AI-augmented research workflows",
  "Real-time intelligence monitoring",
  "Decision-support architecture",
];

const META = [
  { label: "Domain", value: "Applied Intelligence" },
  { label: "Type", value: "SaaS Platform" },
  { label: "Stage", value: "Active Development" },
  { label: "Status", value: "GVV Flagship" },
];

export default function AGIntelSpotlight() {
  return (
    <section
      style={{
        background: COLORS.navy,
        padding: "clamp(80px, 10vw, 140px) 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", right: "-10%", top: "10%",
        width: "50vw", height: "50vw", maxWidth: 500, maxHeight: 500,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${COLORS.blue}12 0%, transparent 70%)`,
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <Reveal><SectionLabel light>Featured Venture</SectionLabel></Reveal>

        <div className="spotlight-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 5vw, 80px)", alignItems: "center", marginTop: 32,
        }}>
          {/* Narrative */}
          <Reveal delay={0.1}>
            <div>
              <div style={{
                fontFamily: FONTS.serif, fontWeight: 700,
                fontSize: "clamp(32px, 4.5vw, 52px)", lineHeight: 1.15,
                color: COLORS.white, marginBottom: 8,
              }}>AGIntel</div>
              <div style={{
                fontFamily: FONTS.sans, fontSize: 11, fontWeight: 600,
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: COLORS.goldLight, marginBottom: 28,
              }}>Intelligence Platform</div>
              <GoldRule width={40} style={{ marginBottom: 28 }} />
              <p style={{
                fontFamily: FONTS.sans, fontSize: 15,
                color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 20,
              }}>
                AGIntel is a practical intelligence platform built to transform how organizations process, analyze, and act on complex information. It sits at the intersection of applied AI, structured data, and real-world decision-making — designed for operators, analysts, and leaders who need signal, not noise.
              </p>
              <p style={{
                fontFamily: FONTS.sans, fontSize: 15,
                color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 32,
              }}>
                Built by Golden Valley Ventures as a flagship product, AGIntel represents our thesis in action: technology should serve judgment, not replace it.
              </p>
              <a
                href="#connect"
                onClick={(e) => { e.preventDefault(); document.querySelector("#connect")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  fontFamily: FONTS.sans, fontSize: 12, fontWeight: 600,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: COLORS.gold, textDecoration: "none",
                  borderBottom: `1px solid ${COLORS.gold}40`,
                  paddingBottom: 4, transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.gold)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${COLORS.gold}40`)}
              >
                Learn More →
              </a>
            </div>
          </Reveal>

          {/* Data card */}
          <Reveal delay={0.25} direction="left">
            <div style={{
              background: `linear-gradient(135deg, ${COLORS.navyLight}, ${COLORS.navy})`,
              border: `1px solid ${COLORS.borderDark}`,
              borderRadius: 4, padding: "clamp(32px, 4vw, 48px)",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                {META.map((m) => (
                  <div key={m.label}>
                    <div style={{
                      fontFamily: FONTS.sans, fontSize: 9, fontWeight: 600,
                      letterSpacing: "0.15em", textTransform: "uppercase",
                      color: "rgba(255,255,255,0.3)", marginBottom: 4,
                    }}>{m.label}</div>
                    <div style={{
                      fontFamily: FONTS.serif, fontWeight: 600, fontSize: 16, color: COLORS.white,
                    }}>{m.value}</div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 32, paddingTop: 24,
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}>
                <div style={{
                  fontFamily: FONTS.sans, fontSize: 9, fontWeight: 600,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)", marginBottom: 12,
                }}>Core Capabilities</div>
                {CAPABILITIES.map((c, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "8px 0",
                    borderBottom: i < CAPABILITIES.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: COLORS.gold, flexShrink: 0 }} />
                    <span style={{ fontFamily: FONTS.sans, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .spotlight-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
