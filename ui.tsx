"use client";

import { ReactNode } from "react";
import { useInView } from "@/lib/useInView";
import { COLORS, FONTS } from "@/lib/tokens";

// ── Scroll-triggered reveal animation ──
interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

const TRANSFORMS: Record<string, string> = {
  up: "translateY(40px)",
  down: "translateY(-40px)",
  left: "translateX(40px)",
  right: "translateX(-40px)",
  none: "none",
};

export function Reveal({ children, delay = 0, direction = "up", className = "" }: RevealProps) {
  const [ref, visible] = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : TRANSFORMS[direction],
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ── Section label (gold eyebrow text) ──
interface SectionLabelProps {
  children: ReactNode;
  light?: boolean;
}

export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <div
      style={{
        fontFamily: FONTS.sans,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: light ? COLORS.goldLight : COLORS.gold,
        marginBottom: 12,
      }}
    >
      {children}
    </div>
  );
}

// ── Gold horizontal rule accent ──
interface GoldRuleProps {
  width?: number;
  style?: React.CSSProperties;
}

export function GoldRule({ width = 48, style = {} }: GoldRuleProps) {
  return <div style={{ width, height: 1, background: COLORS.gold, ...style }} />;
}
