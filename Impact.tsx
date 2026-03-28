"use client";

import { COLORS, FONTS } from "@/lib/tokens";
import { Reveal, SectionLabel, GoldRule } from "@/components/ui";

const AREAS = [
  { title: "Economic Development", body: "Investing in infrastructure, workforce capability, and business creation in communities where capital has historically been absent or extractive." },
  { title: "Technology Access", body: "Building tools and platforms that democratize access to intelligence, information, and operational capability — not just for the well-resourced." },
  { title: "Sustainable Operations", body: "Running every venture with a commitment to durability — environmental responsibility, fair labor, transparent governance, and long-term community benefit." },
];

export default function Impact() {
  return (
    <section id="impact" style={{ background: COLORS.white, padding: "clamp(80px, 10vw, 140px) 32px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div className="impact-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 5vw, 80px)", alignItems: "start",
        }}>
          <Reveal>
            <div>
              <SectionLabel>Impact</SectionLabel>
              <h2 style={{
                fontFamily: FONTS.serif, fontWeight: 600,
                fontSize: "clamp(28px, 3.5vw, 38px)", lineHeight: 1.25,
                color: COLORS.navy, margin: "0 0 20px",
              }}>Capital directed<br />with purpose</h2>
              <GoldRule width={40} style={{ marginBottom: 24 }} />
              <p style={{
                fontFamily: FONTS.sans, fontSize: 15,
                color: COLORS.textMuted, lineHeight: 1.8,
              }}>
                Impact is not a department at Golden Valley Ventures. It is a lens applied to every decision. We believe that building profitable, well-run ventures and directing resources toward meaningful outcomes are not competing goals — they are the same goal, expressed through different time horizons.
              </p>
            </div>
          </Reveal>

          <div>
            {AREAS.map((item, i) => (
              <Reveal key={item.title} delay={0.15 + i * 0.1}>
                <div style={{
                  padding: "clamp(20px, 2.5vw, 28px) 0",
                  borderBottom: i < AREAS.length - 1 ? `1px solid ${COLORS.border}` : "none",
                }}>
                  <h3 style={{
                    fontFamily: FONTS.serif, fontWeight: 600,
                    fontSize: 20, color: COLORS.navy, marginBottom: 8,
                  }}>{item.title}</h3>
                  <p style={{
                    fontFamily: FONTS.sans, fontSize: 13,
                    color: COLORS.textMuted, lineHeight: 1.7,
                  }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .impact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
