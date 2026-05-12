import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name}. Websites for local businesses, $895 flat`;

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#FFFFFF",
          padding: 80,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo strip */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              background: "#1E3A5F",
              color: "white",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              fontFamily: "monospace",
              borderRadius: 10,
            }}
          >
            PL
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: "#0F172A",
            }}
          >
            Pro<span style={{ color: "#F26B1F" }}>Local</span>Builder
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            marginTop: 40,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              background: "#FDE7D9",
              color: "#F26B1F",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "8px 14px",
              borderRadius: 6,
              marginBottom: 24,
            }}
          >
            Now booking · 5 spots open
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: "#0F172A",
              maxWidth: 1000,
            }}
          >
            Websites for local businesses.
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: "#1E3A5F",
              marginTop: 8,
            }}
          >
            $895 flat.
          </div>
        </div>

        {/* Footer strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid #E2E8F0",
            color: "#475569",
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          <div>Done in 7 days · No monthly fees</div>
          <div style={{ color: "#1E3A5F", fontWeight: 600 }}>
            {site.domain}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
