"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const VOICES_INDUSTRIES = ["Healthcare", "Food Ordering", "Finance", "Telecom"];

const VOICES_LIST = [
  { name: "ASTRA", tag: "HAPPY" },
  { name: "CUPOLA", tag: "PROFESSIONAL" },
  { name: "VESPERA", tag: "CASUAL" },
  { name: "ELIPHAS", tag: "CALM" },
];

// ─── Geometry helpers ──────────────────────────────────────────────────────────

type Point = [number, number];
type Curve = [Point, Point, Point, Point];

const TOP = 107;
const PITCH = 60;
const HALF = 23;
const ORB_Y = 220;

function yI(selInd: number): number {
  return TOP + selInd * PITCH + HALF;
}
function yV(selVoice: number): number {
  return TOP + selVoice * PITCH + HALF;
}

function getGeom(selInd: number, selVoice: number): { L: Curve; R: Curve } {
  const yi = yI(selInd);
  const yv = yV(selVoice);
  return {
    L: [
      [222, yi],
      [320, yi],
      [380, ORB_Y],
      [456, ORB_Y],
    ],
    R: [
      [644, ORB_Y],
      [730, ORB_Y],
      [760, yv],
      [860, yv],
    ],
  };
}

function bez(P: Curve, t: number): Point {
  const u = 1 - t;
  return [
    u * u * u * P[0][0] +
      3 * u * u * t * P[1][0] +
      3 * u * t * t * P[2][0] +
      t * t * t * P[3][0],
    u * u * u * P[0][1] +
      3 * u * u * t * P[1][1] +
      3 * u * t * t * P[2][1] +
      t * t * t * P[3][1],
  ];
}

function bezAng(P: Curve, t: number): number {
  const u = 1 - t;
  const dx =
    3 * u * u * (P[1][0] - P[0][0]) +
    6 * u * t * (P[2][0] - P[1][0]) +
    3 * t * t * (P[3][0] - P[2][0]);
  const dy =
    3 * u * u * (P[1][1] - P[0][1]) +
    6 * u * t * (P[2][1] - P[1][1]) +
    3 * t * t * (P[3][1] - P[2][1]);
  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

function placeNode(
  el: SVGRectElement,
  P: Curve,
  t: number,
  size: { w: number; h: number; padX: number; padY: number } = {
    w: 18,
    h: 7,
    padX: 9,
    padY: 3.5,
  }
) {
  const [px, py] = bez(P, t);
  const ang = bezAng(P, t);
  el.setAttribute("x", (px - size.padX).toFixed(1));
  el.setAttribute("y", (py - size.padY).toFixed(1));
  el.setAttribute("width", String(size.w));
  el.setAttribute("height", String(size.h));
  el.setAttribute(
    "transform",
    `rotate(${ang.toFixed(1)} ${px.toFixed(1)} ${py.toFixed(1)})`
  );
}

function curveToD(c: Curve): string {
  return `M${c[0][0]},${c[0][1]} C${c[1][0]},${c[1][1]} ${c[2][0]},${c[2][1]} ${c[3][0]},${c[3][1]}`;
}

function measureMobileGeom(
  stage: HTMLElement,
  ind: number,
  voice: number
): { L: Curve; R: Curve } | null {
  const indBtn = stage.querySelectorAll<HTMLButtonElement>(
    ".vl-m-industry-btns .vl-m-ind-btn"
  )[ind];
  const voiceBtn = stage.querySelectorAll<HTMLButtonElement>(
    ".vl-m-voice-btns .vl-m-voice-btn"
  )[voice];
  const orb = stage.querySelector<HTMLElement>(".vl-m-orb");
  if (!indBtn || !voiceBtn || !orb) return null;

  const stageRect = stage.getBoundingClientRect();
  const indR = indBtn.getBoundingClientRect();
  const voiceR = voiceBtn.getBoundingClientRect();
  const orbR = orb.getBoundingClientRect();

  const ix = indR.right - stageRect.left;
  const iy = indR.top + indR.height / 2 - stageRect.top;
  const vx = voiceR.left - stageRect.left;
  const yv = voiceR.top + voiceR.height / 2 - stageRect.top;
  const orbL = orbR.left - stageRect.left;
  const orbRight = orbR.right - stageRect.left;
  const orbCy = orbR.top + orbR.height / 2 - stageRect.top;

  const dxL = Math.min(56, Math.max(24, (orbL - ix) * 0.42));
  const dxR = Math.min(56, Math.max(24, (vx - orbRight) * 0.42));

  return {
    L: [
      [ix, iy],
      [ix + dxL, iy],
      [orbL - dxL * 0.45, orbCy],
      [orbL, orbCy],
    ],
    R: [
      [orbRight, orbCy],
      [orbRight + dxR * 0.45, orbCy],
      [vx - dxR, yv],
      [vx, yv],
    ],
  };
}

const MOBILE_NODE = { w: 14, h: 6, padX: 7, padY: 3 };

// ─── Component ─────────────────────────────────────────────────────────────────

export default function VoicesDemo() {
  const [selInd, setSelInd] = useState(1);
  const [selVoice, setSelVoice] = useState(3);
  const [playing, setPlaying] = useState(false);

  // Refs to SVG elements
  const leftPathRef = useRef<SVGPathElement>(null);
  const rightPathRef = useRef<SVGPathElement>(null);
  const leftNodeRef = useRef<SVGRectElement>(null);
  const rightNodeRef = useRef<SVGRectElement>(null);
  const orbPulseRef = useRef<HTMLDivElement>(null);
  const orbPulseRefMobile = useRef<HTMLDivElement>(null);
  const leftPathMRef = useRef<SVGPathElement>(null);
  const rightPathMRef = useRef<SVGPathElement>(null);
  const leftNodeMRef = useRef<SVGRectElement>(null);
  const rightNodeMRef = useRef<SVGRectElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const mobileSvgRef = useRef<SVGSVGElement>(null);
  const mobileGeomRef = useRef<{ L: Curve; R: Curve } | null>(null);

  // Animation state refs (mutable, not triggering renders)
  const rafRef = useRef<number>(0);
  const animStartRef = useRef<number | null>(null);
  const playTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const playingRef = useRef(false); // mirror of `playing` for RAF closure

  // Keep playingRef in sync
  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  // ── Path update ───────────────────────────────────────────────────────────

  const updatePaths = useCallback((ind: number, voice: number) => {
    const yi = yI(ind);
    const yv = yV(voice);
    leftPathRef.current?.setAttribute(
      "d",
      `M222,${yi} C320,${yi} 380,${ORB_Y} 456,${ORB_Y}`
    );
    rightPathRef.current?.setAttribute(
      "d",
      `M644,${ORB_Y} C730,${ORB_Y} 760,${yv} 860,${yv}`
    );
  }, []);

  const measureMobilePaths = useCallback((ind: number, voice: number) => {
    const stage = stageRef.current;
    if (!stage) return;

    const stageRect = stage.getBoundingClientRect();
    if (stageRect.width === 0 || stageRect.height === 0) return;

    mobileSvgRef.current?.setAttribute(
      "viewBox",
      `0 0 ${stageRect.width} ${stageRect.height}`
    );

    const geom = measureMobileGeom(stage, ind, voice);
    if (!geom) return;

    mobileGeomRef.current = geom;
    leftPathMRef.current?.setAttribute("d", curveToD(geom.L));
    rightPathMRef.current?.setAttribute("d", curveToD(geom.R));
  }, []);

  // ── Animation loop ────────────────────────────────────────────────────────

  const animLoop = useCallback(
    (now: number) => {
      if (animStartRef.current === null) animStartRef.current = now;
      const tt = ((now - animStartRef.current) % 1500) / 1500;
      const g = getGeom(selInd, selVoice);
      if (leftNodeRef.current) placeNode(leftNodeRef.current, g.L, tt);
      if (rightNodeRef.current) placeNode(rightNodeRef.current, g.R, 1 - tt);
      rafRef.current = requestAnimationFrame(animLoop);
    },
    [selInd, selVoice]
  );

  // ── Stop play ─────────────────────────────────────────────────────────────

  const stopPlay = useCallback(
    (ind: number, voice: number) => {
      setPlaying(false);
      playingRef.current = false;

      if (orbPulseRef.current) orbPulseRef.current.style.display = "none";
      if (orbPulseRefMobile.current) orbPulseRefMobile.current.style.display = "none";
      if (leftNodeRef.current)
        leftNodeRef.current.setAttribute("opacity", "0");
      if (rightNodeRef.current)
        rightNodeRef.current.setAttribute("opacity", "0");
      if (leftNodeMRef.current)
        leftNodeMRef.current.setAttribute("opacity", "0");
      if (rightNodeMRef.current)
        rightNodeMRef.current.setAttribute("opacity", "0");

      cancelAnimationFrame(rafRef.current);
      if (playTimerRef.current) {
        clearTimeout(playTimerRef.current);
        playTimerRef.current = null;
      }

      // Settle nodes to midpoint
      const g = getGeom(ind, voice);
      if (leftNodeRef.current) placeNode(leftNodeRef.current, g.L, 0.5);
      if (rightNodeRef.current) placeNode(rightNodeRef.current, g.R, 0.5);
      const gm = mobileGeomRef.current;
      if (gm && leftNodeMRef.current)
        placeNode(leftNodeMRef.current, gm.L, 0.5, MOBILE_NODE);
      if (gm && rightNodeMRef.current)
        placeNode(rightNodeMRef.current, gm.R, 0.5, MOBILE_NODE);
    },
    []
  );

  // ── Start play ────────────────────────────────────────────────────────────

  const startPlay = useCallback(
    (ind: number, voice: number) => {
      setPlaying(true);
      playingRef.current = true;

      if (orbPulseRef.current) orbPulseRef.current.style.display = "block";
      if (orbPulseRefMobile.current) orbPulseRefMobile.current.style.display = "block";
      if (leftNodeRef.current)
        leftNodeRef.current.setAttribute("opacity", "1");
      if (rightNodeRef.current)
        rightNodeRef.current.setAttribute("opacity", "1");
      if (leftNodeMRef.current)
        leftNodeMRef.current.setAttribute("opacity", "1");
      if (rightNodeMRef.current)
        rightNodeMRef.current.setAttribute("opacity", "1");

      animStartRef.current = null;
      cancelAnimationFrame(rafRef.current);

      // We need a stable loop with the current ind/voice captured
      function loop(now: number) {
        if (animStartRef.current === null) animStartRef.current = now;
        const tt = ((now - animStartRef.current) % 1500) / 1500;
        const g = getGeom(ind, voice);
        if (leftNodeRef.current) placeNode(leftNodeRef.current, g.L, tt);
        if (rightNodeRef.current) placeNode(rightNodeRef.current, g.R, 1 - tt);
        const gm = mobileGeomRef.current;
        if (gm && leftNodeMRef.current)
          placeNode(leftNodeMRef.current, gm.L, tt, MOBILE_NODE);
        if (gm && rightNodeMRef.current)
          placeNode(rightNodeMRef.current, gm.R, 1 - tt, MOBILE_NODE);
        rafRef.current = requestAnimationFrame(loop);
      }

      rafRef.current = requestAnimationFrame(loop);

      if (playTimerRef.current) clearTimeout(playTimerRef.current);
      playTimerRef.current = setTimeout(() => stopPlay(ind, voice), 5400);
    },
    [stopPlay]
  );

  // ── Initial setup ─────────────────────────────────────────────────────────

  useEffect(() => {
    updatePaths(selInd, selVoice);
    measureMobilePaths(selInd, selVoice);
    const g = getGeom(selInd, selVoice);
    if (leftNodeRef.current) placeNode(leftNodeRef.current, g.L, 0.5);
    if (rightNodeRef.current) placeNode(rightNodeRef.current, g.R, 0.5);
    const gm = mobileGeomRef.current;
    if (gm && leftNodeMRef.current)
      placeNode(leftNodeMRef.current, gm.L, 0.5, MOBILE_NODE);
    if (gm && rightNodeMRef.current)
      placeNode(rightNodeMRef.current, gm.R, 0.5, MOBILE_NODE);

    return () => {
      cancelAnimationFrame(rafRef.current);
      if (playTimerRef.current) clearTimeout(playTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update paths whenever selection changes
  useLayoutEffect(() => {
    updatePaths(selInd, selVoice);
    measureMobilePaths(selInd, selVoice);
    const gm = mobileGeomRef.current;
    if (gm && leftNodeMRef.current)
      placeNode(leftNodeMRef.current, gm.L, 0.5, MOBILE_NODE);
    if (gm && rightNodeMRef.current)
      placeNode(rightNodeMRef.current, gm.R, 0.5, MOBILE_NODE);
  }, [selInd, selVoice, updatePaths, measureMobilePaths]);

  // Re-measure mobile connector lines on resize
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const ro = new ResizeObserver(() => {
      measureMobilePaths(selInd, selVoice);
    });
    ro.observe(stage);
    return () => ro.disconnect();
  }, [selInd, selVoice, measureMobilePaths]);

  // ── Handlers ──────────────────────────────────────────────────────────────

  function handleOrbClick() {
    if (playingRef.current) {
      stopPlay(selInd, selVoice);
    } else {
      startPlay(selInd, selVoice);
    }
  }

  function handleIndClick(i: number) {
    const wasPlaying = playingRef.current;
    if (wasPlaying) stopPlay(i, selVoice);
    setSelInd(i);
    if (wasPlaying) {
      // Re-start after state update settles via a rAF tick
      requestAnimationFrame(() => startPlay(i, selVoice));
    }
  }

  function handleVoiceClick(i: number) {
    const wasPlaying = playingRef.current;
    if (wasPlaying) stopPlay(selInd, i);
    setSelVoice(i);
    if (wasPlaying) {
      requestAnimationFrame(() => startPlay(selInd, i));
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div id="experience">
      <section
        className="voices-section"
        style={{
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
          padding: "108px 32px 120px",
          background:
            "linear-gradient(105deg,#F3DAD1 0%,#F5F1EE 46%,#EDF0F4 100%)",
        }}
      >
        {/* Header */}
        <div
          className="voices-header"
          style={{ textAlign: "center", margin: "0 auto 64px" }}
        >
          <div
            style={{
              fontSize: 13,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "#D9663F",
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            Hear the difference
          </div>
          <h2
            style={{
              fontSize: "clamp(34px,4.4vw,56px)",
              lineHeight: 1.04,
              letterSpacing: "-.03em",
              fontWeight: 600,
              color: "#111827",
              maxWidth: "14ch",
              margin: "0 auto",
            }}
          >
            Try our enterprise voice models
          </h2>
          <p
            style={{
              margin: "18px auto 0",
              fontSize: 17,
              lineHeight: 1.6,
              color: "#4B5563",
              maxWidth: "52ch",
            }}
          >
            Pick an industry and a voice, then press play to hear exactly how
            Converz sounds in context.
          </p>
        </div>

        {/* ── Desktop layout ── */}
        <div className="voices-desktop-layout">
        <div
          style={{
            position: "relative",
            width: 1100,
            height: 440,
            margin: "0 auto",
          }}
        >
          {/* SVG connector */}
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: 1100,
              height: 440,
              pointerEvents: "none",
              overflow: "visible",
            }}
            viewBox="0 0 1100 440"
          >
            <path
              ref={leftPathRef}
              fill="none"
              stroke="rgba(17,24,39,.20)"
              strokeWidth="1.4"
            />
            <path
              ref={rightPathRef}
              fill="none"
              stroke="rgba(17,24,39,.20)"
              strokeWidth="1.4"
            />
            <rect
              ref={leftNodeRef}
              width="18"
              height="7"
              rx="3.5"
              fill="#C9603A"
              opacity="0"
              style={{ transition: "opacity .3s" }}
            />
            <rect
              ref={rightNodeRef}
              width="18"
              height="7"
              rx="3.5"
              fill="#5E86B8"
              opacity="0"
              style={{ transition: "opacity .3s" }}
            />
          </svg>

          {/* Industry column label */}
          <div
            style={{
              position: "absolute",
              fontSize: 12,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "#9A8E85",
              fontWeight: 600,
              top: 72,
              left: 0,
            }}
          >
            Industry
          </div>

          {/* Industry column */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 107,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {VOICES_INDUSTRIES.map((name, i) => (
              <button
                key={name}
                onClick={() => handleIndClick(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  width: 220,
                  height: 46,
                  padding: "0 18px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: ".02em",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background .25s, color .25s, box-shadow .25s",
                  border: i === selInd ? "1px solid #1b1b1f" : "1px solid rgba(17,24,39,.08)",
                  background: i === selInd ? "#1b1b1f" : "rgba(255,255,255,.72)",
                  color: i === selInd ? "#fff" : "#4B5563",
                  boxShadow:
                    i === selInd
                      ? "0 12px 26px -12px rgba(17,24,39,.5)"
                      : "none",
                }}
              >
                {i === selInd && (
                  <span
                    style={{
                      display: "inline-flex",
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "#C9603A",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#fff",
                      }}
                    />
                  </span>
                )}
                {name}
              </button>
            ))}
          </div>

          {/* Voice column label */}
          <div
            style={{
              position: "absolute",
              fontSize: 12,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "#9A8E85",
              fontWeight: 600,
              top: 72,
              right: 0,
              textAlign: "right",
              width: 260,
            }}
          >
            Voices
          </div>

          {/* Voice column */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 107,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              alignItems: "flex-end",
            }}
          >
            {VOICES_LIST.map((v, i) => (
              <button
                key={v.name}
                onClick={() => handleVoiceClick(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  width: 248,
                  height: 46,
                  padding: "0 20px",
                  borderRadius: 999,
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "background .25s, color .25s, box-shadow .25s",
                  border:
                    i === selVoice
                      ? "1px solid #1b1b1f"
                      : "1px solid rgba(17,24,39,.08)",
                  background:
                    i === selVoice ? "#1b1b1f" : "rgba(255,255,255,.72)",
                  color: i === selVoice ? "#fff" : "#1b1b1f",
                  boxShadow:
                    i === selVoice
                      ? "0 12px 26px -12px rgba(17,24,39,.5)"
                      : "none",
                }}
              >
                <span style={{ fontWeight: 700, letterSpacing: ".03em" }}>
                  {v.name}
                </span>
                <span style={{ opacity: 0.55, fontWeight: 500 }}>
                  / {v.tag}
                </span>
                {i === selVoice && (
                  <span
                    style={{
                      display: "inline-flex",
                      width: 22,
                      height: 14,
                      borderRadius: 999,
                      background: "rgba(94,134,184,.3)",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      padding: "0 2px",
                      flexShrink: 0,
                      marginLeft: "auto",
                    }}
                  >
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#5E86B8",
                      }}
                    />
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Orb */}
          <div
            style={{
              position: "absolute",
              left: 440,
              top: 110,
              width: 220,
              height: 220,
              animation: "czfloat 7s ease-in-out infinite",
            }}
          >
            {/* Spinning ring text */}
            <svg
              style={{
                position: "absolute",
                left: -20,
                top: -20,
                width: 260,
                height: 260,
                animation: "czspin 30s linear infinite",
              }}
              viewBox="0 0 260 260"
            >
              <defs>
                <path
                  id="cz-circ"
                  d="M130,130 m-104,0 a104,104 0 1,1 208,0 a104,104 0 1,1 -208,0"
                  fill="none"
                />
              </defs>
              <text
                fontSize="11"
                fill="#8A7F77"
                fontWeight="600"
                fontFamily="Geist, sans-serif"
              >
                <textPath
                  href="#cz-circ"
                  startOffset="0"
                  textLength="653"
                  lengthAdjust="spacing"
                >
                  {
                    "HEAR THE DIFFERENCE  •  HEAR THE DIFFERENCE  •  HEAR THE DIFFERENCE  •  "
                  }
                </textPath>
              </text>
            </svg>

            {/* Sphere */}
            <div
              style={{
                position: "absolute",
                inset: 16,
                borderRadius: "50%",
                background:
                  "linear-gradient(140deg,#EFCFC2 0%,#E3D1CC 42%,#BBD0DE 100%)",
                boxShadow:
                  "inset 0 6px 22px rgba(255,255,255,.55), inset 0 -10px 30px rgba(120,140,160,.25), 0 24px 54px -18px rgba(17,24,39,.34)",
              }}
            />

            {/* Pulse ring */}
            <div
              ref={orbPulseRef}
              style={{
                position: "absolute",
                inset: 16,
                borderRadius: "50%",
                border: "2px solid rgba(217,140,110,.55)",
                animation: "czpulse 1.7s ease-out infinite",
                display: "none",
              }}
            />

            {/* Play/pause button */}
            <button
              onClick={handleOrbClick}
              aria-label={playing ? "Pause sample" : "Play sample"}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 62,
                  height: 62,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,.55)",
                  backdropFilter: "blur(4px)",
                  boxShadow: "0 8px 20px -8px rgba(17,24,39,.3)",
                }}
              >
                {playing ? (
                  /* Pause icon */
                  <span style={{ display: "flex", gap: 6 }}>
                    <i
                      style={{
                        display: "block",
                        width: 5,
                        height: 20,
                        borderRadius: 2,
                        background: "#1b1b1f",
                      }}
                    />
                    <i
                      style={{
                        display: "block",
                        width: 5,
                        height: 20,
                        borderRadius: 2,
                        background: "#1b1b1f",
                      }}
                    />
                  </span>
                ) : (
                  /* Play icon */
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 6.5l10 5.5-10 5.5z" fill="#1b1b1f" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
        </div>{/* end voices-desktop-layout */}

        {/* ── Mobile layout (staggered: industry top-left, orb center, voices bottom-right) ── */}
        <div className="voices-mobile-layout">
          <div className="vl-m-stage" ref={stageRef}>
            <svg
              ref={mobileSvgRef}
              className="vl-m-svg"
              preserveAspectRatio="none"
            >
              <path
                ref={leftPathMRef}
                fill="none"
                stroke="rgba(17,24,39,.20)"
                strokeWidth="1.4"
              />
              <path
                ref={rightPathMRef}
                fill="none"
                stroke="rgba(17,24,39,.20)"
                strokeWidth="1.4"
              />
              <rect
                ref={leftNodeMRef}
                width="14"
                height="6"
                rx="3"
                fill="#C9603A"
                opacity="0"
                style={{ transition: "opacity .3s" }}
              />
              <rect
                ref={rightNodeMRef}
                width="14"
                height="6"
                rx="3"
                fill="#5E86B8"
                opacity="0"
                style={{ transition: "opacity .3s" }}
              />
            </svg>

            {/* Industry — top left */}
            <div className="vl-m-industry">
              <div className="vl-m-label">Industry</div>
              <div className="vl-m-industry-btns">
                {VOICES_INDUSTRIES.map((name, i) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => handleIndClick(i)}
                    className={`vl-m-ind-btn${i === selInd ? " on" : ""}`}
                  >
                    {i === selInd && (
                      <span className="vl-m-ind-dot">
                        <span />
                      </span>
                    )}
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Orb — center */}
            <div className="vl-m-orb-zone">
              <div className="vl-m-orb">
                <svg className="vl-m-orb-ring" viewBox="0 0 260 260">
                  <defs>
                    <path
                      id="cz-circ-m"
                      d="M130,130 m-104,0 a104,104 0 1,1 208,0 a104,104 0 1,1 -208,0"
                      fill="none"
                    />
                  </defs>
                  <text
                    fontSize="11"
                    fill="#8A7F77"
                    fontWeight="600"
                    fontFamily="Geist, sans-serif"
                  >
                    <textPath
                      href="#cz-circ-m"
                      startOffset="0"
                      textLength="653"
                      lengthAdjust="spacing"
                    >
                      {
                        "HEAR THE DIFFERENCE  •  HEAR THE DIFFERENCE  •  HEAR THE DIFFERENCE  •  "
                      }
                    </textPath>
                  </text>
                </svg>
                <div className="vl-m-orb-sphere" />
                <div ref={orbPulseRefMobile} className="vl-m-orb-pulse" />
                <button
                  type="button"
                  onClick={handleOrbClick}
                  aria-label={playing ? "Pause sample" : "Play sample"}
                  className="vl-m-orb-btn"
                >
                  <span className="vl-m-orb-play">
                    {playing ? (
                      <span className="vl-m-pause-icon">
                        <i />
                        <i />
                      </span>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24">
                        <path d="M8 6.5l10 5.5-10 5.5z" fill="#1b1b1f" />
                      </svg>
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Voices — bottom right */}
            <div className="vl-m-voices">
              <div className="vl-m-label vl-m-label-right">Voices</div>
              <div className="vl-m-voice-btns">
                {VOICES_LIST.map((v, i) => (
                  <button
                    key={v.name}
                    type="button"
                    onClick={() => handleVoiceClick(i)}
                    className={`vl-m-voice-btn${i === selVoice ? " on" : ""}`}
                  >
                    <span className="vl-m-voice-name">{v.name}</span>
                    <span className="vl-m-voice-tag">/ {v.tag}</span>
                    {i === selVoice && (
                      <span className="vl-m-voice-toggle">
                        <span />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
