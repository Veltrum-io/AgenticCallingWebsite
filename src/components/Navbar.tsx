"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Voice Demo", href: "/#experience" },
  { label: "Features", href: "/#features" },
  { label: "Industries", href: "/#industries" },
  { label: "Enterprise", href: "/#enterprise" },
];

const CTA_URL = "https://forms.cloud.microsoft/r/Fej2LMBkGy?origin=lprLink";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    function update() {
      if (!nav) return;
      const scrolled = window.scrollY > 16;
      nav.style.background = scrolled ? "rgba(245,241,238,.92)" : "transparent";
      nav.style.backdropFilter = scrolled ? "blur(12px)" : "none";
      nav.style.boxShadow = scrolled ? "0 1px 0 rgba(17,24,39,.07)" : "none";
      nav.style.borderBottomColor = scrolled ? "rgba(17,24,39,.07)" : "transparent";
    }

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => window.removeEventListener("scroll", update);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 768) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: "1px solid transparent",
        background: "transparent",
        transition: "background .35s, box-shadow .35s, border-color .35s",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image src="/logo.png" alt="Converz" width={120} height={34} priority />
        </Link>

        {/* Nav links — desktop */}
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              style={{
                fontSize: 14.5,
                color: "#4B5563",
                fontWeight: 450,
                transition: "color .2s",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#111827")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#4B5563")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA actions — desktop */}
        <div className="nav-cta-desktop" style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 14.5,
              color: "#111827",
              fontWeight: 500,
              whiteSpace: "nowrap",
              transition: "color .2s",
              textDecoration: "none",
            }}
          >
            Sign In
          </a>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 14.5,
              fontWeight: 550,
              color: "#fff",
              background: "#1b1b1f",
              padding: "10px 18px",
              borderRadius: 12,
              whiteSpace: "nowrap",
              boxShadow: "0 1px 2px rgba(17,24,39,.18), 0 8px 20px -8px rgba(17,24,39,.4)",
              transition: "transform .2s, box-shadow .2s",
              textDecoration: "none",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-1px)";
              el.style.boxShadow = "0 2px 4px rgba(17,24,39,.2), 0 14px 26px -8px rgba(17,24,39,.45)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 1px 2px rgba(17,24,39,.18), 0 8px 20px -8px rgba(17,24,39,.4)";
            }}
          >
            Join Beta Waitlist
          </a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="nav-mobile-cta">
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-mobile-btn"
              style={{
                color: "#111827",
                background: "#F5F1EE",
                border: "1px solid rgba(17,24,39,.12)",
              }}
            >
              Sign In
            </a>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-mobile-btn"
              style={{ color: "#fff", background: "#1b1b1f" }}
            >
              Join Beta Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
