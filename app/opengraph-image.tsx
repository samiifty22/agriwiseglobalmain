import { ImageResponse } from "next/og";
import { seo } from "@/lib/content";

export const alt =
  "agriwise global — agri-trade & agricultural export company, bangladesh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0b2718",
          color: "#f7f5ef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 8,
              background: "#f7f5ef",
              color: "#1f5c37",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            aw
          </div>
          <div style={{ fontSize: 30, letterSpacing: -1 }}>agriwise global</div>
        </div>

        <div
          style={{
            fontSize: 68,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          agri-trade &amp; agricultural export, bangladesh to the world.
        </div>

        <div style={{ fontSize: 26, color: "#63c283" }}>
          {seo.keywords.slice(0, 4).join("  ·  ")}
        </div>
      </div>
    ),
    { ...size },
  );
}
