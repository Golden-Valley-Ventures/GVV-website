"use client";

import { COLORS, FONTS } from "@/lib/tokens";
import { Reveal, SectionLabel, GoldRule } from "@/components/ui";

const TENETS = [
  { title: "Long-term ownership", body: "We build to hold. Our time horizon is measured in decades, not funding rounds. This changes every decision we make." },
  { title: "Substance over signal", body: "We don't optimize for optics. The work speaks, the numbers speak, the outcomes speak. Everything else is noise." },
  { title: "Stewardship of capital", body: "Every dollar deployed carries responsibility. We treat capital as a trust — to be invested wisely, managed carefully, and directed toward real value creation." },
  { title: "Grounded ambition", body: "We think big and build carefully. Vision without discipline is fantasy. Discipline without vision is bureaucracy. We hold both." },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      style={{ background: COLORS.navy, padding: "clamp(80px, 10vw, 140px) 32px", position: "relative" }}
    >
      <div style={{ maxWidth: 780, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <Reveal><SectionLabel light>Philosophy</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h2 style={{
            fontFamily: FONTS.serif, fontWeight: 400, fontStyle: "italic",
            fontSize: "clamp(26px, 4vw, 40px)", lineHeight: 1.35,
            color: COLORS.white, margin: "0 0 40px",
          }}>
            &ldquo;We believe the most valuable things are built slowly, owned patiently, and improved relentlessly. Capital is a tool, not a personality. Execution is the real edge.&rdquo;
          </h2>
        </Reveal>
        <Reveal delay={0.2}><GoldRule width={40} style={{ marginBottom: 40 }} /></Reveal>

        <div className="philosophy-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "clamp(32px, 4vw, 56px)",
        }}>
          {TENETS.map((p, i) => (
            <Reveal key={p.title} delay={0.25 + i * 0.08}>
              <div>
                <h3 style={{
                  fontFamily: FONTS.serif, fontWeight: 600,
                  fontSize: 19, color: COLORS.white, marginBottom: 8,
                }}>{p.title}</h3>
                <p style={{
                  fontFamily: FONTS.sans, fontSize: 13,
                  color: "rgba(255,255,255,0.45)", lineHeight: 1.7,
                }}>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .philosophy-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
