"use client";

import { useState, useEffect } from "react";
import { COLORS, FONTS } from "@/lib/tokens";

function scrollTo(selector: string) {
  document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const ease = "cubic-bezier(0.22,1,0.36,1)";

  return (
    <section
      style={{
        minHeight: "100vh",
        background: COLORS.navy,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Atmospheric grid */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04 }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`h${i}`}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: `${(i + 1) * 12.5}%`,
              height: 1,
              background: COLORS.white,
            }}
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`v${i}`}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${(i + 1) * 16.66}%`,
              width: 1,
              background: COLORS.white,
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          width: "60vw",
          height: "60vw",
          maxWidth: 800,
          maxHeight: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.blue}15 0%, transparent 70%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Orbit rings */}
      {[70, 90].map((size, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: `min(${size}vw, ${size * 8.5}px)`,
            height: `min(${size}vw, ${size * 8.5}px)`,
            border: `1px solid rgba(255,255,255,${i === 0 ? 0.04 : 0.025})`,
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 32px",
          maxWidth: 900,
        }}
      >
        {/* Monogram */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(20px)",
            transition: `all 1s ${ease} 0.2s`,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 7,
              border: "1.5px solid rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 36px",
              fontFamily: FONTS.serif,
              fontWeight: 600,
              fontSize: 20,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.04em",
            }}
          >
            GV
          </div>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: FONTS.serif,
            fontWeight: 300,
            fontSize: "clamp(36px, 6vw, 72px)",
            lineHeight: 1.1,
            color: COLORS.white,
            margin: "0 0 20px",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(30px)",
            transition: `all 1.2s ${ease} 0.4s`,
          }}
        >
          Building Capital, Products,
          <br />
          <span style={{ fontWeight: 600, fontStyle: "italic" }}>
            and Impact
          </span>
        </h1>

        {/* Gold rule */}
        <div
          style={{
            width: 48,
            height: 1,
            background: COLORS.gold,
            margin: "28px auto",
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease 0.8s",
          }}
        />

        {/* Subhead */}
        <p
          style={{
            fontFamily: FONTS.sans,
            fontSize: "clamp(14px, 1.8vw, 17px)",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto 40px",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(20px)",
            transition: `all 1s ${ease} 1s`,
          }}
        >
          Golden Valley Ventures is a full-stack venture platform — investing,
          building, and operating across technology, media, and applied
          intelligence.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "none" : "translateY(16px)",
            transition: `all 1s ${ease} 1.2s`,
          }}
        >
          <a
            href="#ecosystem"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#ecosystem");
            }}
            className="hero-cta-primary"
          >
            Explore the Ecosystem
          </a>
          <a
            href="#connect"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#connect");
            }}
            className="hero-cta-secondary"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: loaded ? 0.3 : 0,
          transition: "opacity 1.5s ease 2s",
        }}
      >
        <div className="scroll-pulse" style={{ width: 1, height: 32, background: "rgba(255,255,255,0.3)" }} />
      </div>
    </section>
  );
}
