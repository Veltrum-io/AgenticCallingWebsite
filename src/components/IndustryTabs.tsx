"use client";

import { useState } from "react";

type ConvoLine = {
  role: "agent" | "caller";
  name: string;
  t: string;
};

type Industry = {
  name: string;
  icon: string;
  title: string;
  desc: string;
  benefits: string[];
  flow: string[];
  convo: ConvoLine[];
};

const INDUSTRIES: Industry[] = [
  {
    name: "Logistics & eCommerce",
    icon: '<rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2"/><circle cx="18.5" cy="18.5" r="2"/>',
    title: "Confirm deliveries before they leave the dock.",
    desc: "Automate COD verification and delivery confirmations at scale — reducing failed deliveries and protecting margins.",
    benefits: [
      "Cut failed deliveries with proactive COD checks",
      "Confirm address & timing automatically",
      "Reroute exceptions to a human instantly",
    ],
    flow: ["Trigger: order shipped", "Verify COD", "Confirm window", "Sync to OMS"],
    convo: [
      {
        role: "agent",
        name: "Converz AI",
        t: "Hi, calling to confirm your cash-on-delivery order arriving today. Will someone be available?",
      },
      { role: "caller", name: "Customer", t: "Yes, after 3pm works." },
    ],
  },
  {
    name: "Healthcare",
    icon: '<path d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z"/><path d="M12 8v5M9.5 10.5h5" stroke-width="1.5"/>',
    title: "Keep schedules full and patients informed.",
    desc: "Send appointment reminders and run follow-ups with empathy — lowering no-shows while staying HIPAA-aware.",
    benefits: [
      "Reduce no-shows with timely reminders",
      "Automate post-visit follow-ups",
      "Escalate clinical questions to staff",
    ],
    flow: ["Trigger: appt T-24h", "Confirm / reschedule", "Follow-up call", "Update EHR"],
    convo: [
      {
        role: "agent",
        name: "Converz AI",
        t: "Hi, this is a reminder for your appointment tomorrow at 10am. Should I confirm?",
      },
      { role: "caller", name: "Patient", t: "Can we move it to the afternoon?" },
    ],
  },
  {
    name: "Real Estate",
    icon: '<path d="M3 10l9-7 9 7v10a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z"/>',
    title: "Qualify every lead, book every viewing.",
    desc: "Respond to inbound interest in seconds, qualify intent, and schedule visits directly on your agents' calendars.",
    benefits: [
      "Engage leads within seconds, 24/7",
      "Qualify budget & timeline naturally",
      "Book viewings into agent calendars",
    ],
    flow: ["Trigger: new lead", "Qualify intent", "Schedule visit", "Sync to CRM"],
    convo: [
      {
        role: "agent",
        name: "Converz AI",
        t: "Thanks for your interest in the Riverside listing! Are you looking to buy or rent?",
      },
      { role: "caller", name: "Lead", t: "Buy — ideally within three months." },
    ],
  },
  {
    name: "Financial Services",
    icon: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/>',
    title: "Recover revenue with conversations that respect customers.",
    desc: "Run payment reminders and collections support that stay compliant, on-brand, and genuinely helpful.",
    benefits: [
      "Automate gentle payment reminders",
      "Offer compliant payment options",
      "Route disputes to specialists",
    ],
    flow: ["Trigger: due balance", "Remind & assist", "Capture intent", "Log to system"],
    convo: [
      {
        role: "agent",
        name: "Converz AI",
        t: "Hi, your statement balance is due Friday. Would you like to set up a payment now?",
      },
      { role: "caller", name: "Customer", t: "Sure, can I split it in two?" },
    ],
  },
  {
    name: "SMBs",
    icon: '<path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-6h6v6"/>',
    title: "An always-on front desk for growing teams.",
    desc: "Never miss a call. Capture leads, answer FAQs, and book appointments without adding headcount.",
    benefits: [
      "Answer every inbound call instantly",
      "Capture and qualify new leads",
      "Book jobs straight into your calendar",
    ],
    flow: ["Trigger: inbound call", "Answer & assist", "Capture details", "Book / notify"],
    convo: [
      {
        role: "agent",
        name: "Converz AI",
        t: "Thanks for calling Bright Plumbing! How can I help today?",
      },
      { role: "caller", name: "Caller", t: "My sink is leaking — can someone come tomorrow?" },
    ],
  },
  {
    name: "Enterprises",
    icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    title: "Conversational infrastructure for global operations.",
    desc: "Deploy thousands of concurrent agents across regions and languages with the governance large teams require.",
    benefits: [
      "Scale to thousands of concurrent calls",
      "Govern with RBAC & audit logs",
      "Deploy across regions & languages",
    ],
    flow: ["Trigger: campaign", "Route by region", "Run at scale", "Report & audit"],
    convo: [
      {
        role: "agent",
        name: "Converz AI",
        t: "Good afternoon — I'm calling on behalf of your account team about your renewal. Do you have a moment?",
      },
      { role: "caller", name: "Client", t: "Yes, go ahead." },
    ],
  },
];

const GreenCheck = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#5BB98C"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function IndustryTabs() {
  const [active, setActive] = useState(0);
  const d = INDUSTRIES[active];

  return (
    <section
      id="industries"
      className="industries-section"
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 1200,
        margin: "0 auto",
        padding: "104px 32px",
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: 0 }}>
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
          Solutions
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
          One platform, every conversation.
        </h2>
      </div>

      {/* Tabs */}
      <div
        className="ind-tabs-row"
        style={{
          marginTop: 44,
          marginBottom: 40,
        }}
      >
        {INDUSTRIES.map((ind, i) => (
          <button
            key={ind.name}
            onClick={() => setActive(i)}
            style={{
              fontSize: 13.5,
              fontWeight: 550,
              padding: "9px 17px",
              borderRadius: 999,
              cursor: "pointer",
              transition: "all .25s",
              background: i === active ? "#1b1b1f" : "rgba(255,255,255,.6)",
              color: i === active ? "#fff" : "#4B5563",
              border:
                i === active
                  ? "1px solid transparent"
                  : "1px solid rgba(17,24,39,.1)",
              boxShadow:
                i === active ? "0 8px 20px -10px rgba(17,24,39,.5)" : "none",
            }}
          >
            {ind.name}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div
        className="industry-panel"
        style={{
          background: "rgba(255,255,255,.78)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(17,24,39,.08)",
          borderRadius: 24,
          boxShadow:
            "0 2px 6px rgba(17,24,39,.04), 0 28px 56px -28px rgba(17,24,39,.18)",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))",
        }}
      >
        {/* Left: details */}
        <div style={{ padding: 40 }}>
          {/* Badge */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "#FAF7F5",
              border: "1px solid rgba(17,24,39,.07)",
              padding: "6px 13px",
              borderRadius: 999,
              marginBottom: 20,
              fontSize: 13,
              fontWeight: 600,
              color: "#111827",
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D9B3A3"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              dangerouslySetInnerHTML={{ __html: d.icon }}
            />
            {d.name}
          </span>

          <h3
            style={{
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#111827",
              lineHeight: 1.15,
            }}
          >
            {d.title}
          </h3>

          <p
            style={{
              marginTop: 14,
              fontSize: 15.5,
              lineHeight: 1.6,
              color: "#4B5563",
            }}
          >
            {d.desc}
          </p>

          {/* Benefits */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 13,
              marginTop: 26,
            }}
          >
            {d.benefits.map((b) => (
              <div
                key={b}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 11,
                  fontSize: 14.5,
                  color: "#111827",
                  fontWeight: 450,
                }}
              >
                <GreenCheck />
                <span>{b}</span>
              </div>
            ))}
          </div>

          {/* Flow chips */}
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 28 }}
          >
            {d.flow.map((f) => (
              <span
                key={f}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "#F5F1EE",
                  border: "1px solid rgba(17,24,39,.07)",
                  padding: "7px 12px",
                  borderRadius: 10,
                  fontSize: 12.5,
                  fontWeight: 500,
                  color: "#4B5563",
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Right: conversation sample */}
        <div
          className="industry-panel-right"
          style={{
            background: "linear-gradient(160deg,#F3DAD1,#FAF7F5)",
            borderLeft: "1px solid rgba(17,24,39,.06)",
            padding: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#6B7280",
              fontWeight: 600,
              marginBottom: 2,
            }}
          >
            Conversation sample
          </div>

          {d.convo.map((c, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent: c.role === "caller" ? "flex-end" : "flex-start",
              }}
            >
              <div
                style={{
                  maxWidth: "86%",
                  padding: "11px 15px",
                  borderRadius: 15,
                  fontSize: 14,
                  lineHeight: 1.5,
                  border: "1px solid rgba(17,24,39,.06)",
                  boxShadow: "0 8px 20px -14px rgba(17,24,39,.3)",
                  background: c.role === "agent" ? "#1b1b1f" : "#fff",
                  color: c.role === "agent" ? "#fff" : "#111827",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    opacity: 0.5,
                    marginBottom: 3,
                  }}
                >
                  {c.name}
                </span>
                {c.t}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
