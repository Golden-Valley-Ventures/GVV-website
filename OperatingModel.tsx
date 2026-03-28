"use client";

import { COLORS, FONTS } from "@/lib/tokens";
import { Reveal, SectionLabel } from "@/components/ui";

const STEPS = [
  { num: "I", title: "Identify", body: "We look for meaningful problems, underserved markets, and opportunities where disciplined capital and intelligent execution can create lasting value." },
  { num: "II", title: "Architect", body: "Every initiative begins with clear structure — defined thesis, honest assessment, rigorous planning, and alignment between vision and operational reality." },
  { num: "III", title: "Build", body: "We build with our own hands. Whether software, media, or operating businesses — we are not passive. We design, develop, ship, and iterate." },
  { num: "IV", title: "Operate", body: "Long-term ownership means long-term commitment. We manage what we build, refine what we launch, and stay accountable to the outcomes we set." },
  { num: "V", title: "Compound", body: "Each venture strengthens the platform. Shared infrastructure, cross-pollinated insight, and accumulated capability create value that grows over time." },
];

export default function OperatingModel() {
  return (
    <section style={{ background: COLORS.ivory, padding: "clamp(80px, 10vw, 140px) 32px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Reveal><SectionLabel>How We Operate</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 style={{
              fontFamily: FONTS.serif, fontWeight: 600,
              fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.25,
              color: COLORS.navy, margin: "0 0 16px",
            }}>Discipline is the method</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{
              fontFamily: FONTS.sans, fontSize: 15,
              color: COLORS.textMuted, maxWidth: 480, margin: "0 auto", lineHeight: 1.7,
            }}>
              We don&apos;t chase deals or trends. We follow a repeatable process designed to turn conviction into durable outcomes.
            </p>
          </Reveal>
        </div>

        {STEPS.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.08}>
            <div style={{
              display: "grid", gridTemplateColumns: "60px 1fr",
              gap: "clamp(16px, 2vw, 32px)",
              padding: "clamp(24px, 3vw, 36px) 0",
              borderBottom: i < STEPS.length - 1 ? `1px solid ${COLORS.border}` : "none",
              alignItems: "start",
            }}>
              <div style={{
                fontFamily: FONTS.serif, fontWeight: 300,
                fontSize: 28, color: COLORS.gold, lineHeight: 1, paddingTop: 4,
              }}>{s.num}</div>
              <div>
                <h3 style={{
                  fontFamily: FONTS.serif, fontWeight: 600,
                  fontSize: "clamp(20px, 2.5vw, 26px)", color: COLORS.navy, marginBottom: 8,
                }}>{s.title}</h3>
                <p style={{
                  fontFamily: FONTS.sans, fontSize: 14,
                  color: COLORS.textMuted, lineHeight: 1.7, maxWidth: 580,
                }}>{s.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
