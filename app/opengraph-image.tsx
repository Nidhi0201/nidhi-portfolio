import { ImageResponse } from "next/og";

export const alt = "Nidhi Prajapati — Software/AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "60px 72px",
          background: "#F6F3EC",
          color: "#141311",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontFamily: "monospace",
            borderBottom: "1px solid #141311",
            paddingBottom: 16,
          }}
        >
          <span style={{ fontWeight: 700 }}>The Dispatch</span>
          <span>Vol 1 · Issue 10 · 2026</span>
        </div>
        <div
          style={{
            fontSize: 128,
            lineHeight: 1,
            marginTop: 40,
            fontWeight: 700,
            letterSpacing: -4,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <span>Software you can&nbsp;</span>
          <span style={{ fontStyle: "italic", color: "#D13B2E" }}>actually&nbsp;</span>
          <span>trust.</span>
        </div>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 22,
          }}
        >
          <span>Nidhi Prajapati · Software / AI Engineer</span>
          <span>nidhiprajapati.dev</span>
        </div>
      </div>
    ),
    size,
  );
}
