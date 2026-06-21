// Server component — static markup only

type HighlightRow = {
  title: string;
  desc: string;
  viz: "latency" | "voice" | "turns";
};

const HIGHLIGHTS_ROWS: HighlightRow[] = [
  {
    title: "Sub-600ms Latency",
    desc: "Responses land before the pause is noticeable — keeping conversations natural and fluid at any call volume.",
    viz: "latency",
  },
  {
    title: "Ultra-Realistic Voice",
    desc: "Built from curated human speech data and refined through guided training — indistinguishable from a skilled agent.",
    viz: "voice",
  },
  {
    title: "Intelligent Turn-Taking",
    desc: "A proprietary model that knows when to yield and when to speak — eliminating awkward overlaps and robotic silence.",
    viz: "turns",
  },
];

const VIZ: Record<HighlightRow["viz"], React.ReactNode> = {
  latency: (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            color: "#9CA3AF",
          }}
        >
          Avg response
        </span>
        <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.03em", color: "#111827" }}>
          512
          <span style={{ fontSize: 12, fontWeight: 500, color: "#9CA3AF" }}>ms</span>
        </span>
      </div>
      <div
        style={{
          background: "rgba(17,24,39,.07)",
          borderRadius: 999,
          height: 6,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background: "linear-gradient(90deg,#EBC9BC,#D9B3A3)",
            height: "100%",
            width: "34%",
            borderRadius: 999,
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: 10, color: "#9CA3AF" }}>0ms</span>
        <span style={{ fontSize: 10, color: "#5BB98C", fontWeight: 600 }}>Top 1% industry</span>
        <span style={{ fontSize: 10, color: "#9CA3AF" }}>1500ms</span>
      </div>
    </div>
  ),
  voice: (
    <div
      style={{
        position: "relative",
        width: 84,
        height: 84,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          border: "1.5px solid rgba(217,179,163,.15)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 14,
          borderRadius: "50%",
          border: "1.5px solid rgba(217,179,163,.3)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 28,
          borderRadius: "50%",
          border: "1.5px solid rgba(217,179,163,.5)",
        }}
      />
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "linear-gradient(140deg,#EBC9BC,#D9B3A3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
        >
          <path d="M12 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3z" />
          <path d="M5 11a7 7 0 0014 0" />
        </svg>
      </div>
    </div>
  ),
  turns: (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, width: "100%" }}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            background: "#1b1b1f",
            color: "#fff",
            fontSize: 11,
            padding: "7px 11px",
            borderRadius: "10px 10px 10px 2px",
            lineHeight: 1.4,
            maxWidth: "90%",
          }}
        >
          Hi, I&apos;d like to book an appointment.
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          style={{
            background: "linear-gradient(135deg,#F3DAD1,#EBC9BC)",
            color: "#1b1b1f",
            fontSize: 11,
            padding: "7px 11px",
            borderRadius: "10px 10px 2px 10px",
            lineHeight: 1.4,
            maxWidth: "90%",
          }}
        >
          Of course — what day works best?
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            background: "#1b1b1f",
            color: "#fff",
            fontSize: 11,
            padding: "7px 11px",
            borderRadius: "10px 10px 10px 2px",
            lineHeight: 1.4,
            maxWidth: "90%",
          }}
        >
          Thursday afternoon, please.
        </div>
      </div>
    </div>
  ),
};

const CHART_BARS = [
  { height: "46%", day: "M" },
  { height: "62%", day: "T" },
  { height: "54%", day: "W" },
  { height: "78%", day: "T" },
  { height: "92%", day: "F" },
  { height: "40%", day: "S" },
  { height: "34%", day: "S" },
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
    style={{ marginTop: 2, flexShrink: 0 }}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

// Need React for JSX in this file
import React from "react";

export default function Analytics() {
  return (
    <>
      {/* ─── ANALYTICS ─────────────────────────────────────────────────────── */}
      <section
        className="analytics-section"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "104px 32px",
        }}
      >
        <div
          className="analytics-grid"
          style={{
            display: "grid",
            gap: 48,
            alignItems: "center",
          }}
        >
          {/* Left copy */}
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
              Analytics
            </div>
            <h2
              style={{
                fontSize: "clamp(30px, 3.6vw, 46px)",
                lineHeight: 1.07,
                letterSpacing: "-0.025em",
                fontWeight: 600,
                color: "#111827",
              }}
            >
              Every call, measured and understood.
            </h2>
            <p
              style={{
                marginTop: 18,
                fontSize: 17,
                lineHeight: 1.65,
                color: "#4B5563",
              }}
            >
              Real-time dashboards turn thousands of conversations into clear
              signal — success rates, sentiment, agent performance, and summaries
              you can act on.
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 28 }}
            >
              {[
                "Live success rate, call volume and agent performance in one view.",
                "Auto-generated summaries and full transcripts for every conversation.",
                "Sentiment scoring and campaign metrics you can pipe into your warehouse.",
              ].map((pt) => (
                <div
                  key={pt}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 11,
                    fontSize: 15,
                    lineHeight: 1.5,
                    color: "#4B5563",
                  }}
                >
                  <GreenCheck />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: dashboard mock */}
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(17,24,39,.08)",
              borderRadius: 22,
              boxShadow:
                "0 2px 6px rgba(17,24,39,.05), 0 30px 60px -30px rgba(17,24,39,.22)",
              overflow: "hidden",
            }}
          >
            {/* Dash head */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderBottom: "1px solid rgba(17,24,39,.06)",
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>
                Conversation analytics
              </span>
              <span
                style={{
                  fontSize: 11.5,
                  color: "#6B7280",
                  background: "#FAF7F5",
                  border: "1px solid rgba(17,24,39,.07)",
                  padding: "4px 10px",
                  borderRadius: 8,
                }}
              >
                Last 7 days
              </span>
            </div>

            {/* Dash body */}
            <div
              style={{
                padding: 20,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              {/* Calls handled */}
              <div
                style={{
                  background: "#FAF7F5",
                  border: "1px solid rgba(17,24,39,.06)",
                  borderRadius: 14,
                  padding: 16,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "#6B7280",
                    fontWeight: 550,
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                  }}
                >
                  Calls handled
                </div>
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "#111827",
                    marginTop: 6,
                  }}
                >
                  48,210
                </div>
                <div style={{ fontSize: 12, color: "#5BB98C", fontWeight: 600, marginTop: 2 }}>
                  ▲ 12.4% WoW
                </div>
              </div>

              {/* Success rate */}
              <div
                style={{
                  background: "#FAF7F5",
                  border: "1px solid rgba(17,24,39,.06)",
                  borderRadius: 14,
                  padding: 16,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "#6B7280",
                    fontWeight: 550,
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                  }}
                >
                  Success rate
                </div>
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "#111827",
                    marginTop: 6,
                  }}
                >
                  94.2%
                </div>
                <div style={{ fontSize: 12, color: "#5BB98C", fontWeight: 600, marginTop: 2 }}>
                  ▲ 6.1 pts
                </div>
              </div>

              {/* Calls by day — full width */}
              <div
                style={{
                  background: "#FAF7F5",
                  border: "1px solid rgba(17,24,39,.06)",
                  borderRadius: 14,
                  padding: 16,
                  gridColumn: "1 / 3",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 14,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      color: "#6B7280",
                      fontWeight: 550,
                      letterSpacing: "0.03em",
                      textTransform: "uppercase",
                    }}
                  >
                    Calls by day
                  </span>
                  <span style={{ fontSize: 11.5, color: "#9CA3AF" }}>mon–sun</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 9,
                    height: 84,
                  }}
                >
                  {CHART_BARS.map((bar, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 6,
                        height: "100%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: bar.height,
                          background: "linear-gradient(#D9B3A3,#EBC9BC)",
                          borderRadius: "6px 6px 3px 3px",
                        }}
                      />
                      <span style={{ fontSize: 10, color: "#9CA3AF" }}>{bar.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sentiment mix — full width */}
              <div
                style={{
                  background: "#FAF7F5",
                  border: "1px solid rgba(17,24,39,.06)",
                  borderRadius: 14,
                  padding: 16,
                  gridColumn: "1 / 3",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: "#6B7280",
                    fontWeight: 550,
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  Sentiment mix
                </div>
                <div
                  style={{
                    display: "flex",
                    height: 12,
                    borderRadius: 999,
                    overflow: "hidden",
                    gap: 2,
                  }}
                >
                  <div style={{ width: "68%", background: "#5BB98C" }} />
                  <div style={{ width: "24%", background: "#EBC9BC" }} />
                  <div style={{ width: "8%", background: "#D9B3A3" }} />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 18,
                    marginTop: 11,
                    fontSize: 12,
                    color: "#4B5563",
                  }}
                >
                  {[
                    { color: "#5BB98C", label: "Positive 68%" },
                    { color: "#EBC9BC", label: "Neutral 24%" },
                    { color: "#D9B3A3", label: "Negative 8%" },
                  ].map(({ color, label }) => (
                    <span
                      key={label}
                      style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 2,
                          background: color,
                          display: "inline-block",
                        }}
                      />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HIGHLIGHTS ────────────────────────────────────────────────────── */}
      <section
        id="highlights"
        className="highlights-section"
        style={{
          position: "relative",
          zIndex: 1,
          background: "#fff",
          padding: "120px 0",
        }}
      >
        <div
          className="highlights-inner"
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 64px" }}
        >
          {/* Hero row */}
          <div
            className="highlights-hero-row"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))",
              gap: 72,
              alignItems: "center",
              paddingBottom: 80,
              borderBottom: "1px solid rgba(17,24,39,.07)",
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
                Highlights
              </div>
              <h2
                style={{
                  fontSize: "clamp(32px, 3.8vw, 52px)",
                  lineHeight: 1.07,
                  letterSpacing: "-0.03em",
                  fontWeight: 600,
                  color: "#111827",
                  marginTop: 18,
                }}
              >
                Human-standard AI voice agent, out of the box.
              </h2>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "#4B5563",
                  maxWidth: "44ch",
                }}
              >
                Proprietary voice orchestration delivering human-quality,
                low-latency conversations — at any scale.
              </p>
            </div>

            {/* Live call card visual */}
            <div
              style={{
                background: "linear-gradient(145deg,#F7EDE8,#F0EBE8)",
                borderRadius: 24,
                overflow: "hidden",
                aspectRatio: "16 / 11",
                border: "1px solid rgba(217,179,163,.25)",
                boxShadow:
                  "0 2px 8px rgba(17,24,39,.05), 0 32px 64px -32px rgba(17,24,39,.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 28,
              }}
            >
              <div
                style={{
                  width: "100%",
                  background: "#fff",
                  borderRadius: 16,
                  border: "1px solid rgba(17,24,39,.07)",
                  boxShadow: "0 4px 20px -8px rgba(17,24,39,.2)",
                  overflow: "hidden",
                }}
              >
                {/* Card head */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    background: "#1b1b1f",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#EBC9BC",
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#5BB98C",
                        boxShadow: "0 0 0 3px rgba(91,185,140,.25)",
                        display: "inline-block",
                      }}
                    />
                    Live Call
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "rgba(235,201,188,.6)",
                      fontVariantNumeric: "tabular-nums",
                      letterSpacing: "0.05em",
                    }}
                  >
                    00:47
                  </span>
                </div>

                {/* Card body */}
                <div style={{ padding: "18px 18px 20px" }}>
                  <div
                    style={{
                      fontSize: 13.5,
                      fontWeight: 600,
                      color: "#111827",
                      marginBottom: 3,
                    }}
                  >
                    ASTRA — Healthcare Agent
                  </div>
                  <div
                    style={{
                      fontSize: 11.5,
                      color: "#9CA3AF",
                      marginBottom: 16,
                    }}
                  >
                    Inbound support · English
                  </div>

                  {/* Wave bars */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      height: 40,
                      marginBottom: 18,
                    }}
                  >
                    {Array.from({ length: 24 }, (_, i) => (
                      <div
                        key={i}
                        className="animate-hlwave"
                        style={{
                          flex: 1,
                          maxWidth: 5,
                          height: 28,
                          borderRadius: 2,
                          background: "linear-gradient(to top,#EBC9BC,#D9B3A3)",
                          animationDelay: `${(i * 0.07).toFixed(2)}s`,
                          transformOrigin: "center bottom",
                        }}
                      />
                    ))}
                  </div>

                  {/* Metrics */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3,1fr)",
                      gap: 8,
                    }}
                  >
                    {[
                      { lbl: "Latency", val: "512ms", sub: "▲ Top 1%" },
                      { lbl: "Sentiment", val: "Positive", sub: "92% score" },
                      { lbl: "Intent", val: "Booking", sub: "Confirmed" },
                    ].map(({ lbl, val, sub }) => (
                      <div
                        key={lbl}
                        style={{
                          background: "#FAF7F5",
                          borderRadius: 10,
                          padding: "10px 12px",
                          border: "1px solid rgba(17,24,39,.05)",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 10,
                            color: "#9CA3AF",
                            fontWeight: 550,
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            marginBottom: 4,
                          }}
                        >
                          {lbl}
                        </div>
                        <div
                          style={{
                            fontSize: 13.5,
                            fontWeight: 650,
                            color: "#111827",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {val}
                        </div>
                        <div
                          style={{
                            fontSize: 10,
                            color: "#5BB98C",
                            fontWeight: 600,
                            marginTop: 2,
                          }}
                        >
                          {sub}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight rows */}
          <div style={{ borderTop: "1px solid rgba(17,24,39,.07)" }}>
            {HIGHLIGHTS_ROWS.map((row, i) => (
              <div
                key={row.viz}
                className="highlights-row"
                style={{
                  display: "grid",
                  gap: 56,
                  alignItems: "center",
                  padding: "52px 0",
                  borderBottom: "1px solid rgba(17,24,39,.07)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#D9B3A3",
                      marginBottom: 10,
                    }}
                  >
                    0{i + 1}
                  </div>
                  <div
                    style={{
                      fontSize: 21,
                      fontWeight: 620,
                      letterSpacing: "-0.015em",
                      color: "#111827",
                      lineHeight: 1.2,
                    }}
                  >
                    {row.title}
                  </div>
                </div>
                <p
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.72,
                    color: "#4B5563",
                  }}
                >
                  {row.desc}
                </p>
                <div
                  style={{
                    background: "linear-gradient(145deg,#F8F4F1,#F3EDE9)",
                    borderRadius: 16,
                    padding: 24,
                    border: "1px solid rgba(217,179,163,.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 120,
                  }}
                >
                  {VIZ[row.viz]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
