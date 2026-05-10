import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Programmatic favicon. Navy square, "PL" in mono. Matches the nav logo. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1E3A5F",
          color: "white",
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: "-0.05em",
          fontFamily: "monospace",
          borderRadius: 6,
        }}
      >
        PL
      </div>
    ),
    { ...size }
  );
}
