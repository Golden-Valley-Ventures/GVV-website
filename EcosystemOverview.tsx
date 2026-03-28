"use client";

import { COLORS, FONTS } from "@/lib/tokens";
import { Reveal, SectionLabel } from "@/components/ui";
import styles from "@/styles/ecosystem.module.css";

const PILLARS = [
  { label: "Capital", desc: "Strategic investment in high-conviction opportunities" },
  { label: "Ventures", desc: "Incubation and operation of new business lines" },
  { label: "Products", desc: "Software platforms and digital tools" },
  { label: "Intelligence", desc: "Applied research and data-driven insight" },
  { label: "Media", desc: "Content, experiences, and editorial platforms" },
  { label: "Impact", desc: "Mission-aligned initiatives with measurable outcomes" },
];

export default function EcosystemOverview() {
  return (
    <section
      id="ecosystem"
      style={{
        background: COLORS.navy,
        padding: "clamp(80px, 10vw, 140px) 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle horizontal lines */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.03 }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} style={{
            position: "absolute", left: 0, right: 0,
            top: `${i * 8.33}%`, height: 1, background: COLORS.white,
          }} />
        ))}
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <Reveal><SectionLabel light>The Ecosystem</SectionLabel></Reveal>
          <Reveal delay={0.1}>
            <h2 style={{
              fontFamily: FONTS.serif, fontWeight: 600,
              fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.25,
              color: COLORS.white, margin: "0 0 20px",
            }}>One platform. Six dimensions.</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{
              fontFamily: FONTS.sans, fontSize: 15,
              color: "rgba(255,255,255,0.5)", maxWidth: 520, margin: "0 auto",
              lineHeight: 1.7,
            }}>
              Golden Valley Ventures operates as an interconnected ecosystem — each pillar strengthening the others, creating compound value across the entire platform.
            </p>
          </Reveal>
        </div>

        {/* Orbit visualization — desktop */}
        <div className={styles.orbitContainer}>
          {/* Center mark */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)", textAlign: "center", zIndex: 3,
          }}>
            <div style={{
              width: 80, height: 80, borderRadius: 10,
              background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.navy})`,
              border: `1.5px solid ${COLORS.borderDark}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 10px",
              fontFamily: FONTS.serif, fontWeight: 700,
              fontSize: 28, color: COLORS.white, letterSpacing: "0.04em",
            }}>GV</div>
            <div style={{
              fontFamily: FONTS.sans, fontSize: 10,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)", fontWeight: 600,
            }}>Ventures</div>
          </div>

          {/* Orbit rings */}
          <div style={{
            position: "absolute", inset: "20%",
            border: "1px solid rgba(255,255,255,0.06)", borderRadius: "50%",
          }} />
          <div style={{
            position: "absolute", inset: "5%",
            border: "1px solid rgba(255,255,255,0.04)", borderRadius: "50%",
          }} />

          {/* Pillar nodes */}
          {PILLARS.map((p, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const radius = 42;
            const left = 50 + radius * Math.cos(angle);
            const top = 50 + radius * Math.sin(angle);
            return (
              <Reveal key={p.label} delay={0.2 + i * 0.08}>
                <div style={{
                  position: "absolute",
                  left: `${left}%`, top: `${top}%`,
                  transform: "translate(-50%, -50%)",
                  textAlign: "center", width: 120,
                }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: "50%",
                    background: COLORS.gold, margin: "0 auto 8px",
                    boxShadow: `0 0 20px ${COLORS.gold}40`,
                  }} />
                  <div style={{
                    fontFamily: FONTS.serif, fontWeight: 600,
                    fontSize: 15, color: COLORS.white, marginBottom: 2,
                  }}>{p.label}</div>
                  <div style={{
                    fontFamily: FONTS.sans, fontSize: 10,
                    color: "rgba(255,255,255,0.35)", lineHeight: 1.4,
                  }}>{p.desc}</div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Mobile fallback list */}
        <div className={styles.mobileGrid}>
          {PILLARS.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.06}>
              <div style={{
                padding: "24px 0",
                borderBottom: i < PILLARS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                display: "flex", alignItems: "flex-start", gap: 16,
              }}>
                <div style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: COLORS.gold, marginTop: 6, flexShrink: 0,
                }} />
                <div>
                  <div style={{
                    fontFamily: FONTS.serif, fontWeight: 600,
                    fontSize: 18, color: COLORS.white, marginBottom: 4,
                  }}>{p.label}</div>
                  <div style={{
                    fontFamily: FONTS.sans, fontSize: 13,
                    color: "rgba(255,255,255,0.4)", lineHeight: 1.5,
                  }}>{p.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
