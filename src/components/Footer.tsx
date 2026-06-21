"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        background: "#27201A",
        color: "#fff",
        borderRadius: "20px 20px 0 0",
        padding: "72px 0 0",
        overflow: "hidden",
      }}
    >
      {/* Top section */}
      <div
        className="footer-top"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 64px 72px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {/* Brand / Logo */}
        <div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
            <Image
              src="/logo.png"
              alt="Converz"
              width={144}
              height={44}
              style={{
                height: 44,
                width: "auto",
                display: "block",
                filter: "brightness(0) invert(1)",
                opacity: 0.88,
              }}
            />
          </div>
        </div>

        {/* Nav columns */}
        <div className="footer-nav-cols" style={{ display: "flex", gap: 96 }}>
          {/* Column 1 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {["Company", "Pricing", "Resources", "Documentation", "Community Slack"].map(
              (label) => (
                <a
                  key={label}
                  href="#"
                  style={{
                    fontSize: 15,
                    color: "rgba(255,255,255,.72)",
                    transition: "color .2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#EBC9BC")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,.72)")
                  }
                >
                  {label}
                </a>
              )
            )}
          </div>

          {/* Column 2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {["Product", "Contact Sales"].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,.72)",
                  transition: "color .2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#EBC9BC")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,.72)")
                }
              >
                {label}
              </a>
            ))}

            {/* Social icons */}
            <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                style={{
                  display: "inline-flex",
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  background: "rgba(255,255,255,.08)",
                  border: "1px solid rgba(255,255,255,.14)",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background .2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(255,255,255,.14)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(255,255,255,.08)")
                }
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,.75)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X / Twitter"
                style={{
                  display: "inline-flex",
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  background: "rgba(255,255,255,.08)",
                  border: "1px solid rgba(255,255,255,.14)",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background .2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(255,255,255,.14)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(255,255,255,.08)")
                }
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,.75)">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.251 5.622 5.913-5.622z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="footer-bottom"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "22px 64px",
          borderTop: "1px solid rgba(255,255,255,.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 14,
        }}
      >
        {/* Left: copyright + legal */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <span style={{ fontSize: 13.5, color: "rgba(255,255,255,.45)" }}>
            © 2026 Converz
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Link
              href="/privacy"
              style={{
                fontSize: 13.5,
                color: "rgba(255,255,255,.45)",
                transition: "color .2s",
                textDecoration: "none",
              }}
            >
              Privacy
            </Link>
            <span style={{ color: "rgba(255,255,255,.2)", fontSize: 13 }}>·</span>
            <Link
              href="/terms"
              style={{
                fontSize: 13.5,
                color: "rgba(255,255,255,.45)",
                transition: "color .2s",
                textDecoration: "none",
              }}
            >
              Terms
            </Link>
          </div>
        </div>

        {/* Right: compliance badges */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {[
            { main: "SOC 2", sub: "Compliant" },
            { main: "HIPAA", sub: "Compliant" },
          ].map(({ main, sub }) => (
            <div
              key={main}
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "rgba(255,255,255,.06)",
                border: "1.5px solid rgba(255,255,255,.16)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <span
                style={{
                  fontSize: 9.5,
                  fontWeight: 700,
                  letterSpacing: ".04em",
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                {main}
              </span>
              <span
                style={{
                  fontSize: 7,
                  color: "rgba(255,255,255,.45)",
                  letterSpacing: ".03em",
                  lineHeight: 1,
                }}
              >
                {sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
