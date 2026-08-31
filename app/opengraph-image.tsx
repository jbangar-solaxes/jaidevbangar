import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photo = await readFile(join(process.cwd(), "public/jaidev.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0b0d10",
          color: "#f3f4f6",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 280,
            height: "100%",
            marginRight: 56,
            border: "1px solid rgba(30, 200, 176, 0.45)",
            overflow: "hidden",
          }}
        >
          <img
            src={photoSrc}
            alt=""
            width={280}
            height={502}
            style={{
              width: 280,
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 18%",
              filter: "grayscale(1)",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              marginBottom: 28,
              background: "#0b0d10",
              border: "1px solid #1ec8b0",
              color: "#1ec8b0",
              fontSize: 24,
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            JB
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 16,
              color: "#1ec8b0",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {site.title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              maxWidth: 680,
              color: "rgba(243, 244, 246, 0.72)",
              fontSize: 26,
              lineHeight: 1.45,
            }}
          >
            {site.intro}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 36,
              color: "rgba(243, 244, 246, 0.4)",
              fontSize: 20,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            jaidevbangar.info
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
