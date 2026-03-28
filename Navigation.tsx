"use client";

import { useState, useCallback } from "react";
import { COLORS, FONTS } from "@/lib/tokens";
import styles from "@/styles/nav.module.css";

const NAV_LINKS = [
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Ventures", href: "#ventures" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Impact", href: "#impact" },
  { label: "Connect", href: "#connect" },
];

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = useCallback((e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollToTop = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Gold accent bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 3,
          background: COLORS.gold,
        }}
      />

      <nav
        style={{
          position: "fixed",
          top: 3,
          left: 0,
          right: 0,
          zIndex: 999,
          background: scrolled ? "rgba(15,35,71,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? `1px solid ${COLORS.borderDark}`
            : "1px solid transparent",
          transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            height: 64,
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={scrollToTop}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 5,
                background: scrolled ? COLORS.white : "rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: FONTS.serif,
                fontWeight: 700,
                fontSize: 13,
                color: scrolled ? COLORS.navy : COLORS.white,
                letterSpacing: "0.04em",
                transition: "all 0.4s ease",
              }}
            >
              GV
            </div>
            <span
              style={{
                fontFamily: FONTS.serif,
                fontWeight: 600,
                fontSize: 15,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: COLORS.white,
                transition: "opacity 0.4s",
                opacity: scrolled ? 0.9 : 0.7,
              }}
            >
              Golden Valley Ventures
            </span>
          </a>

          {/* Desktop links */}
          <div className={styles.desktopNav}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className={styles.navLink}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={styles.mobileToggle}
            aria-label="Toggle navigation"
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              <path
                d={
                  mobileOpen
                    ? "M1 1L21 15M1 15L21 1"
                    : "M0 1h22M0 8h22M0 15h22"
                }
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              background: "rgba(15,35,71,0.98)",
              backdropFilter: "blur(20px)",
              padding: "24px 32px 32px",
              borderTop: `1px solid ${COLORS.borderDark}`,
            }}
          >
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                style={{
                  display: "block",
                  padding: "14px 0",
                  fontFamily: FONTS.serif,
                  fontSize: 20,
                  fontWeight: 600,
                  color: COLORS.white,
                  textDecoration: "none",
                  borderBottom:
                    i < NAV_LINKS.length - 1
                      ? `1px solid ${COLORS.borderDark}`
                      : "none",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
