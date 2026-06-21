"use client";

// Server component — decorative bars are generated at render time

const BETA_URL = "https://forms.cloud.microsoft/r/Fej2LMBkGy?origin=lprLink";

// Port of the original IIFE:
// Array.from({length:40},(_,i)=> (0.3+Math.abs(Math.sin(i*0.7))*0.7).toFixed(2))
const BAR_SCALES: string[] = Array.from({ length: 40 }, (_, i) =>
  (0.3 + Math.abs(Math.sin(i * 0.7)) * 0.7).toFixed(2)
);

export default function CTA() {
  return (
    <section
      id="cta"
      className="cta-section"
      style={{ position: "relative", zIndex: 1, padding: "40px 32px 96px" }}
    >
      <div
        style={{
          position: "relative",
          maxWidth: 1100,
          margin: "0 auto",
          borderRadius: 32,
          overflow: "hidden",
          background:
            "linear-gradient(150deg,#F3DAD1 0%,#EBC9BC 48%,#FAF7F5 100%)",
          border: "1px solid rgba(17,24,39,.08)",
          boxShadow: "0 30px 80px -40px rgba(17,24,39,.3)",
        }}
      >
        {/* Decorative bars background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            opacity: 0.22,
            pointerEvents: "none",
          }}
        >
          {BAR_SCALES.map((scale, i) => (
            <i
              key={i}
              style={{
                display: "block",
                width: 4,
                height: 140,
                borderRadius: 4,
                background: "#D9B3A3",
                transform: `scaleY(${scale})`,
                transformOrigin: "center",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div
          style={{
            position: "relative",
            textAlign: "center",
            padding: "80px 32px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 4.4vw, 56px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              fontWeight: 600,
              color: "#111827",
              maxWidth: "18ch",
              margin: "0 auto",
            }}
          >
            The future of customer conversations sounds human.
          </h2>
          <p
            style={{
              margin: "20px auto 0",
              fontSize: 17.5,
              lineHeight: 1.6,
              color: "#4B5563",
              maxWidth: "54ch",
            }}
          >
            Launch AI voice agents that communicate naturally, automate
            operations intelligently, and scale customer engagement effortlessly.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              justifyContent: "center",
              marginTop: 36,
            }}
          >
            {/* Primary CTA */}
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 15.5,
                fontWeight: 550,
                color: "#fff",
                background: "#1b1b1f",
                padding: "15px 26px",
                borderRadius: 14,
                boxShadow:
                  "0 1px 2px rgba(17,24,39,.18), 0 12px 28px -10px rgba(17,24,39,.45)",
                transition: "transform .2s, box-shadow .2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow =
                  "0 2px 4px rgba(17,24,39,.2), 0 20px 38px -12px rgba(17,24,39,.5)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow =
                  "0 1px 2px rgba(17,24,39,.18), 0 12px 28px -10px rgba(17,24,39,.45)";
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

            {/* Secondary CTA */}
            <a
              href={BETA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 15.5,
                fontWeight: 550,
                color: "#111827",
                background: "rgba(255,255,255,.85)",
                border: "1px solid rgba(17,24,39,.1)",
                padding: "15px 24px",
                borderRadius: 14,
                transition: "transform .2s, background .2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "translateY(-2px)";
                el.style.background = "#fff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "translateY(0)";
                el.style.background = "rgba(255,255,255,.85)";
              }}
            >
              Book Enterprise Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
