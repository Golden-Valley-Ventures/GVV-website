"use client";

import { COLORS, FONTS } from "@/lib/tokens";

const COLUMNS = [
  { title: "Platform", links: ["Ecosystem", "Ventures", "Products", "Impact"] },
  { title: "Company", links: ["Philosophy", "Leadership", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Disclosures"] },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: COLORS.navyDark,
        padding: "64px 32px 40px",
        borderTop: `1px solid ${COLORS.borderDark}`,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand block */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  width: 30, height: 30, borderRadius: 4,
                  background: "rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: FONTS.serif, fontWeight: 700,
                  fontSize: 12, color: "rgba(255,255,255,0.6)",
                }}
              >GV</div>
              <span style={{
                fontFamily: FONTS.serif, fontWeight: 600, fontSize: 14,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
              }}>Golden Valley Ventures</span>
            </div>
            <p style={{
              fontFamily: FONTS.sans, fontSize: 12,
              color: "rgba(255,255,255,0.25)", lineHeight: 1.6, maxWidth: 300,
            }}>
              Building capital, products, and impact.<br />
              Based in the heartland. Built for the long term.
            </p>
          </div>

          {/* Nav columns */}
          <div style={{ display: "flex", gap: "clamp(32px, 5vw, 64px)", flexWrap: "wrap" }}>
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div style={{
                  fontFamily: FONTS.sans, fontSize: 10, fontWeight: 600,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)", marginBottom: 14,
                }}>{col.title}</div>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      display: "block", fontFamily: FONTS.sans,
                      fontSize: 13, color: "rgba(255,255,255,0.4)",
                      textDecoration: "none", padding: "4px 0",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                  >{link}</a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span style={{
            fontFamily: FONTS.sans, fontSize: 11, color: "rgba(255,255,255,0.2)",
          }}>
            &copy; {new Date().getFullYear()} Golden Valley Ventures. All rights reserved.
          </span>
          <div style={{
            width: 4, height: 4, borderRadius: "50%",
            background: COLORS.gold, opacity: 0.5,
          }} />
        </div>
      </div>
    </footer>
  );
}
