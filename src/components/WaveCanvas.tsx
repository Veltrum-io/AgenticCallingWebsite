"use client";

import { useEffect, useRef } from "react";

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas) return;
      const r = canvas.getBoundingClientRect();
      W = Math.max(1, r.width);
      H = Math.max(1, r.height);
      canvas.width = Math.round(W * DPR);
      canvas.height = Math.round(H * DPR);
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const N = 132;
    const PAD = 60;
    const STEP = 3;
    const AMP = 34;
    const TAU = Math.PI * 2;

    let rafId = 0;

    function frame(now: number) {
      if (!ctx) return;
      const t = now / 1000;
      const D = Math.max(W, H);

      ctx.fillStyle = "#F1E2D9";
      ctx.fillRect(0, 0, W, H);

      const g1 = ctx.createRadialGradient(
        W * 0.95, H * 0.95, 0,
        W * 0.95, H * 0.95, D * 1.05
      );
      g1.addColorStop(0, "rgba(229,194,176,0.95)");
      g1.addColorStop(1, "rgba(229,194,176,0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, W, H);

      const g3 = ctx.createRadialGradient(
        W * 0.42, H * 0.40, 0,
        W * 0.42, H * 0.40, D * 0.44
      );
      g3.addColorStop(0, "rgba(252,247,243,0.75)");
      g3.addColorStop(1, "rgba(252,247,243,0)");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, W, H);

      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      const total = W + PAD * 2;

      for (let i = 0; i <= N; i++) {
        const baseX = -PAD + (i / N) * total;
        const bnx = baseX / W;
        const envR = Math.exp(-Math.pow((bnx - 0.76) / 0.30, 2) / 2);
        ctx.beginPath();
        for (let y = -PAD; y <= H + PAD; y += STEP) {
          const ny = y / H;
          const flow =
            Math.sin(ny * TAU * 1.05 + bnx * 3.4 + t * 0.16 * TAU) +
            0.50 * Math.sin(ny * TAU * 0.55 - bnx * 2.1 - t * 0.11 * TAU) +
            0.28 * Math.sin(ny * TAU * 1.90 + bnx * 5.0 + t * 0.20 * TAU);
          const x = baseX + AMP * envR * flow;
          if (y === -PAD) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        const alpha =
          0.22 +
          0.70 * Math.exp(-Math.pow((bnx - 0.76) / 0.36, 2) / 2);
        ctx.strokeStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      rafId = requestAnimationFrame(frame);
    }

    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
