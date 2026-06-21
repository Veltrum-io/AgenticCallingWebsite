"use client";

// Server component — no state or effects needed

type Feature = {
  title: string;
  icon: string;
  items: string[];
};

const FEATURES: Feature[] = [
  {
    title: "Voice Intelligence",
    icon: '<path d="M12 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3z"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>',
    items: [
      "Human-like voice agents",
      "Real-time STT / TTS",
      "Natural interruption handling",
      "Emotion-aware responses",
      "Automatic language switching",
    ],
  },
  {
    title: "Call Automation",
    icon: '<path d="M3 5a2 2 0 012-2h2.6a1 1 0 011 .75l1 4a1 1 0 01-.5 1.1l-2 1.2a13 13 0 006 6l1.2-2a1 1 0 011.1-.5l4 1a1 1 0 01.75 1V19a2 2 0 01-2 2A16 16 0 013 5z"/>',
    items: [
      "Lead qualification",
      "Appointment booking",
      "Customer support",
      "Payment reminders",
      "Order verification",
    ],
  },
  {
    title: "AI Intelligence Layer",
    icon: '<path d="M12 3a4 4 0 00-4 4 4 4 0 00-2 7 4 4 0 004 6 3 3 0 002 1 3 3 0 002-1 4 4 0 004-6 4 4 0 00-2-7 4 4 0 00-4-4z"/><path d="M12 7v12"/>',
    items: [
      "RAG knowledge retrieval",
      "Context memory",
      "Intent detection",
      "Sentiment analysis",
      "Dynamic prompts",
    ],
  },
  {
    title: "Enterprise Infrastructure",
    icon: '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/>',
    items: [
      "SIP trunking",
      "BYO carrier support",
      "API integrations",
      "Real-time dashboards",
      "White-label platform support",
    ],
  },
];

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#D9B3A3"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function Features() {
  return (
    <section
      id="features"
      className="features-section"
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 1200,
        margin: "0 auto",
        padding: "96px 32px",
      }}
    >
      {/* Section header — left/right two-column */}
      <div
        className="features-header"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))",
          gap: 48,
          alignItems: "end",
          marginBottom: 56,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#D9B3A3",
              fontWeight: 600,
              marginBottom: 14,
            }}
          >
            Platform
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 50px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              fontWeight: 600,
              color: "#111827",
            }}
          >
            Built for conversations that feel natural.
          </h2>
        </div>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: "#4B5563",
            marginTop: 18,
          }}
        >
          Every layer of the stack — voice, automation, intelligence,
          infrastructure — engineered to sound human and run at enterprise scale.
        </p>
      </div>

      {/* 2×2 card grid */}
      <div
        className="features-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(480px, 100%), 1fr))",
          gap: 20,
        }}
      >
        {FEATURES.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <div
      className="feature-card-root"
      style={{
        position: "relative",
        background: "#fff",
        border: "1px solid rgba(17,24,39,.08)",
        borderRadius: 24,
        padding: 32,
        boxShadow:
          "0 1px 3px rgba(17,24,39,.04), 0 4px 14px -4px rgba(17,24,39,.07)",
        overflow: "hidden",
        transition:
          "transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s, border-color .3s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-3px)";
        el.style.boxShadow =
          "0 2px 6px rgba(17,24,39,.06), 0 22px 48px -22px rgba(17,24,39,.24)";
        el.style.borderColor = "rgba(217,179,163,.35)";
        const before = el.querySelector<HTMLSpanElement>(".fc-before");
        const after = el.querySelector<HTMLSpanElement>(".fc-after");
        if (before) before.style.opacity = "1";
        if (after) after.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow =
          "0 1px 3px rgba(17,24,39,.04), 0 4px 14px -4px rgba(17,24,39,.07)";
        el.style.borderColor = "rgba(17,24,39,.08)";
        const before = el.querySelector<HTMLSpanElement>(".fc-before");
        const after = el.querySelector<HTMLSpanElement>(".fc-after");
        if (before) before.style.opacity = "0";
        if (after) after.style.opacity = "0";
      }}
    >
      {/* Left accent bar (pseudo-element equivalent) */}
      <span
        className="fc-before"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: 3,
          background:
            "linear-gradient(180deg,#EBC9BC,#D9B3A3,transparent)",
          opacity: 0,
          transition: "opacity .28s",
          pointerEvents: "none",
        }}
      />
      {/* Top accent line (pseudo-element equivalent) */}
      <span
        className="fc-after"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg,transparent,#EBC9BC 40%,#D9B3A3 60%,transparent)",
          opacity: 0,
          transition: "opacity .28s",
          pointerEvents: "none",
        }}
      />

      {/* Card number badge */}
      <span
        style={{
          position: "absolute",
          top: 28,
          right: 28,
          fontSize: 11,
          fontWeight: 650,
          letterSpacing: "0.12em",
          color: "#EBC9BC",
        }}
      >
        0{index + 1}
      </span>

      {/* Icon + title */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginBottom: 24 }}>
        <span
          style={{
            display: "inline-flex",
            width: 52,
            height: 52,
            borderRadius: 16,
            background: "linear-gradient(145deg,#F3DAD1,#FAF7F5)",
            border: "1px solid rgba(17,24,39,.06)",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginBottom: 18,
            boxShadow: "0 2px 8px -4px rgba(201,96,58,.1)",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1b1b1f"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            dangerouslySetInnerHTML={{ __html: feature.icon }}
          />
        </span>
        <h3
          style={{
            fontSize: 20,
            fontWeight: 650,
            letterSpacing: "-0.02em",
            color: "#111827",
          }}
        >
          {feature.title}
        </h3>
      </div>

      {/* Bullet list */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderTop: "1px solid rgba(17,24,39,.06)",
          paddingTop: 4,
        }}
      >
        {feature.items.map((item, j) => (
          <div
            key={j}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 0",
              borderBottom:
                j < feature.items.length - 1
                  ? "1px solid rgba(17,24,39,.04)"
                  : "none",
              fontSize: 14,
              color: "#4B5563",
              fontWeight: 450,
              lineHeight: 1.45,
            }}
          >
            <CheckIcon />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
