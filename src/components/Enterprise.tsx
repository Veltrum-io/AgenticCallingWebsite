"use client";

// Server component — no state or effects needed

type EnterpriseCard = {
  title: string;
  desc: string;
  icon: string;
};

const ENTERPRISE_CARDS: EnterpriseCard[] = [
  {
    title: "RBAC",
    desc: "Role-based access across teams, workspaces and regions.",
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="2"/><path d="M9 16c0-1.7 1.3-3 3-3s3 1.3 3 3"/>',
  },
  {
    title: "Audit logs",
    desc: "Immutable, exportable records of every action and call.",
    icon: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>',
  },
  {
    title: "Usage billing",
    desc: "Transparent, metered pricing with per-team budgets.",
    icon: '<rect x="3" y="12" width="4" height="8"/><rect x="10" y="8" width="4" height="12"/><rect x="17" y="4" width="4" height="16"/>',
  },
  {
    title: "Compliance",
    desc: "SOC 2, HIPAA-aware workflows and data residency.",
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
  },
  {
    title: "API management",
    desc: "Scoped keys, rate limits and full webhook control.",
    icon: '<path d="M16 18l6-6-6-6M8 6L2 12l6 6"/>',
  },
  {
    title: "White-label",
    desc: "Ship the platform under your own brand and domain.",
    icon: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',
  },
];

const TRUST_ITEMS = [
  "SOC 2 Type II certified",
  "HIPAA-aware data handling",
  "99.99% uptime SLA",
];

const SmallCheck = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#EBC9BC"
    strokeWidth="2.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function Enterprise() {
  return (
    <section
      id="enterprise"
      className="enterprise-section"
      style={{
        position: "relative",
        zIndex: 1,
        background: "#F5F1EE",
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      {/* Decorative radial glow */}
      <div
        style={{
          content: "",
          position: "absolute",
          top: -100,
          right: -60,
          width: 540,
          height: 540,
          background:
            "radial-gradient(circle,rgba(235,201,188,.32) 0%,transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="enterprise-inner"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 64px",
          display: "grid",
          gap: 96,
          alignItems: "center",
        }}
      >
        {/* Left: copy */}
        <div>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#D9B3A3",
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            Enterprise
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 3.8vw, 50px)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              fontWeight: 600,
              color: "#111827",
            }}
          >
            Trusted with your most sensitive conversations.
          </h2>
          <p
            style={{
              marginTop: 28,
              fontSize: 17,
              lineHeight: 1.75,
              color: "#4B5563",
              maxWidth: "38ch",
            }}
          >
            Granular controls, full auditability, and compliance built into the
            platform — so security and operations teams can deploy with
            confidence.
          </p>

          {/* Trust items */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 32 }}
          >
            {TRUST_ITEMS.map((item) => (
              <span
                key={item}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 11,
                  fontSize: 14,
                  color: "#374151",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "linear-gradient(140deg,#1b1b1f,#2d2d33)",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <SmallCheck />
                </span>
                {item}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://forms.cloud.microsoft/r/Fej2LMBkGy?origin=lprLink"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginTop: 36,
              fontSize: 15,
              fontWeight: 600,
              color: "#111827",
              background: "#fff",
              border: "1.5px solid rgba(17,24,39,.13)",
              padding: "13px 22px",
              borderRadius: 14,
              transition:
                "background .25s, color .25s, border-color .25s, box-shadow .25s, gap .2s",
              boxShadow:
                "0 1px 3px rgba(17,24,39,.06), 0 4px 12px -4px rgba(17,24,39,.08)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#1b1b1f";
              el.style.color = "#fff";
              el.style.borderColor = "#1b1b1f";
              el.style.gap = "15px";
              el.style.boxShadow = "0 8px 28px -10px rgba(17,24,39,.38)";
              const arrow = el.querySelector<SVGElement>(".ent-arrow");
              if (arrow) arrow.setAttribute("stroke", "#EBC9BC");
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#fff";
              el.style.color = "#111827";
              el.style.borderColor = "rgba(17,24,39,.13)";
              el.style.gap = "10px";
              el.style.boxShadow =
                "0 1px 3px rgba(17,24,39,.06), 0 4px 12px -4px rgba(17,24,39,.08)";
              const arrow = el.querySelector<SVGElement>(".ent-arrow");
              if (arrow) arrow.setAttribute("stroke", "#111827");
            }}
          >
            Talk to our team
            <svg
              className="ent-arrow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: "stroke .25s" }}
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        {/* Right: cards grid */}
        <div
          className="enterprise-cards"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
            gap: 14,
          }}
        >
          {ENTERPRISE_CARDS.map((card) => (
            <EntCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EntCard({ card }: { card: EnterpriseCard }) {
  return (
    <div
      style={{
        position: "relative",
        background: "#fff",
        border: "1px solid rgba(17,24,39,.07)",
        borderRadius: 20,
        padding: "28px 24px",
        boxShadow:
          "0 1px 3px rgba(17,24,39,.05), 0 4px 12px -4px rgba(17,24,39,.06)",
        transition:
          "box-shadow .3s cubic-bezier(.16,1,.3,1), transform .3s cubic-bezier(.16,1,.3,1), border-color .3s",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow =
          "0 2px 4px rgba(17,24,39,.06), 0 22px 50px -22px rgba(17,24,39,.22)";
        el.style.transform = "translateY(-3px)";
        el.style.borderColor = "rgba(217,179,163,.35)";
        const topBar = el.querySelector<HTMLSpanElement>(".ent-top-bar");
        if (topBar) topBar.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow =
          "0 1px 3px rgba(17,24,39,.05), 0 4px 12px -4px rgba(17,24,39,.06)";
        el.style.transform = "translateY(0)";
        el.style.borderColor = "rgba(17,24,39,.07)";
        const topBar = el.querySelector<HTMLSpanElement>(".ent-top-bar");
        if (topBar) topBar.style.opacity = "0";
      }}
    >
      {/* Top accent bar (pseudo ::after equivalent) */}
      <span
        className="ent-top-bar"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          borderRadius: "20px 20px 0 0",
          background: "linear-gradient(90deg,#EBC9BC,#D9B3A3)",
          opacity: 0,
          transition: "opacity .3s",
          pointerEvents: "none",
        }}
      />

      {/* Icon */}
      <span
        style={{
          display: "inline-flex",
          width: 48,
          height: 48,
          borderRadius: 14,
          background: "linear-gradient(145deg,#F3DAD1,#FAF7F5)",
          border: "1px solid rgba(17,24,39,.06)",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 18,
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1b1b1f"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          dangerouslySetInnerHTML={{ __html: card.icon }}
        />
      </span>

      <h3
        style={{
          fontSize: 16,
          fontWeight: 650,
          letterSpacing: "-0.01em",
          color: "#111827",
          marginBottom: 7,
        }}
      >
        {card.title}
      </h3>
      <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "#6B7280" }}>
        {card.desc}
      </p>
    </div>
  );
}
