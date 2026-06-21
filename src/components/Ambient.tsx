export default function Ambient() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* Blob 1 — top-right */}
      <div
        className="animate-floaty"
        style={{
          position: "absolute",
          top: "-12%",
          right: "-8%",
          width: "46vw",
          height: "46vw",
          background:
            "radial-gradient(circle at center, rgba(243,218,209,.9), rgba(243,218,209,0) 68%)",
          filter: "blur(8px)",
        }}
      />
      {/* Blob 2 — mid-left */}
      <div
        className="animate-floaty2"
        style={{
          position: "absolute",
          top: "34%",
          left: "-12%",
          width: "40vw",
          height: "40vw",
          background:
            "radial-gradient(circle at center, rgba(235,201,188,.55), rgba(235,201,188,0) 70%)",
          filter: "blur(8px)",
        }}
      />
    </div>
  );
}
