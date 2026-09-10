import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = "FineScale AI — Enterprise AI Systems & Software Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              backgroundColor: "#0066FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            FS
          </div>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 700, color: "#020617" }}>
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ display: "flex", fontSize: 58, fontWeight: 700, color: "#020617", lineHeight: 1.18 }}>
            We build AI systems that become part of how your business operates.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #E2E8F0",
            paddingTop: 24,
            fontSize: 22,
            color: "#334155",
          }}
        >
          <div style={{ display: "flex" }}>Enterprise AI Systems & Software Engineering</div>
          <div style={{ display: "flex" }}>finescaleai.com</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
