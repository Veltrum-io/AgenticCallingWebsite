"use client";

import { useEffect } from "react";
import WaveCanvas from "./WaveCanvas";

const CTA_URL = "https://forms.cloud.microsoft/r/Fej2LMBkGy?origin=lprLink";

const MARQUEE_ITEMS = [
  {
    name: "Logistics & eCommerce",
    icon: '<rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="18.5" cy="18.5" r="2"/>',
  },
  {
    name: "Healthcare",
    icon: '<path d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z"/>',
  },
  {
    name: "Real Estate",
    icon: '<path d="M3 10l9-7 9 7v10a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z"/>',
  },
  {
    name: "Financial Services",
    icon: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/>',
  },
  {
    name: "SMBs",
    icon: '<path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-6h6v6"/>',
  },
  {
    name: "Enterprises",
    icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  },
];

const TRUST_ITEMS: string[] = [];

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D9B3A3"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function Hero() {
  // Rise-in animations using Web Animations API
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    requestAnimationFrame(() => {
      const els = document.querySelectorAll<HTMLElement>("[data-rise]");
      els.forEach((el, i) => {
        const rawDelay = el.dataset.riseDelay;
        const delay = rawDelay != null ? parseFloat(rawDelay) * 1000 : i * 80;
        el.animate(
          [
            { transform: "translateY(16px)", opacity: "0" },
            { transform: "translateY(0)", opacity: "1" },
          ],
          {
            duration: 760,
            delay,
            easing: "cubic-bezier(.16,1,.3,1)",
            fill: "backwards",
          }
        );
      });
    });
  }, []);

  // Doubled items for seamless loop
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <header
      style={{
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* Wave canvas background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          width: "100%",
          height: "100%",
        }}
      >
        <WaveCanvas />
      </div>

      {/* Hero content */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "140px 32px 0",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Hero grid */}
        <div
          className="hero-grid"
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1.05fr .95fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          {/* Left column */}
          <div>
            {/* Badge */}
            <div
              data-rise
              data-rise-delay="0"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "rgba(255,255,255,.7)",
                border: "1px solid rgba(17,24,39,.08)",
                backdropFilter: "blur(8px)",
                padding: "7px 14px 7px 10px",
                borderRadius: 999,
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  background: "#1b1b1f",
                  color: "#F3DAD1",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: ".04em",
                  padding: "3px 8px",
                  borderRadius: 999,
                }}
              >
                NEW
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: "#4B5563",
                  fontWeight: 450,
                }}
              >
                Conversational voice models, now in private beta
              </span>
            </div>

            {/* Heading */}
            <h1
              data-rise
              data-rise-delay="0.06"
              style={{
                fontSize: "clamp(40px, 5.4vw, 68px)",
                lineHeight: 1.03,
                letterSpacing: "-.03em",
                fontWeight: 600,
                color: "#111827",
                maxWidth: "14ch",
              }}
            >
              Human-like{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#C9603A 0%,#D97C52 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI voice
              </span>{" "}
              <span style={{ color: "#5E86B8" }}>models</span> built for real
              conversations.
            </h1>

            {/* Paragraph */}
            <p
              data-rise
              data-rise-delay="0.14"
              style={{
                marginTop: 24,
                fontSize: 18,
                lineHeight: 1.65,
                color: "#4B5563",
                maxWidth: "50ch",
                fontWeight: 400,
              }}
            >
              Deploy natural AI voice agents for inbound and outbound calls —
              with interruption handling, multilingual conversations, contextual
              intelligence, and enterprise-grade infrastructure.
            </p>

            {/* CTAs */}
            <div
              data-rise
              data-rise-delay="0.22"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginTop: 34,
              }}
            >
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 15.5,
                  fontWeight: 550,
                  color: "#fff",
                  background: "#1b1b1f",
                  padding: "14px 24px",
                  borderRadius: 14,
                  boxShadow:
                    "0 1px 2px rgba(17,24,39,.18), 0 10px 24px -8px rgba(17,24,39,.4)",
                  transition: "transform .2s, box-shadow .2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow =
                    "0 2px 4px rgba(17,24,39,.2), 0 18px 34px -10px rgba(17,24,39,.45)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow =
                    "0 1px 2px rgba(17,24,39,.18), 0 10px 24px -8px rgba(17,24,39,.4)";
                }}
              >
                Join Beta Waitlist
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#EBC9BC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>

            {/* Trust items */}
            <div
              data-rise
              data-rise-delay="0.30"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 22,
                marginTop: 40,
              }}
            >
              {TRUST_ITEMS.map((item) => (
                <span
                  key={item}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13.5,
                    color: "#6B7280",
                    fontWeight: 450,
                  }}
                >
                  <CheckIcon />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — intentionally empty (decorative space) */}
          <div className="hero-right" aria-hidden="true" />
        </div>

        {/* Marquee strip */}
        <div
          data-rise
          data-rise-delay="0.34"
          style={{ marginTop: "auto", paddingBottom: 28 }}
        >
          {/* Mask wrapper */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              WebkitMaskImage:
                "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
              maskImage:
                "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 64,
                width: "max-content",
                animation: "marquee 32s linear infinite",
              }}
            >
              {marqueeItems.map((m, idx) => (
                <span
                  key={idx}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 18,
                    fontWeight: 550,
                    letterSpacing: "-.01em",
                    color: "#7c6f66",
                    whiteSpace: "nowrap",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A8968C"
                    strokeWidth="1.6"
                    dangerouslySetInnerHTML={{ __html: m.icon }}
                  />
                  {m.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
