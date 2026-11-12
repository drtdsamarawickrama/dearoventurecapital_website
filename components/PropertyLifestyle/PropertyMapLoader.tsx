
"use client";

import dynamic from "next/dynamic";

const SriLankaMap = dynamic(
  () => import("./SriLankaMap"),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          height: "450px",
          display: "grid",
          placeItems: "center",
          background: "#f5f7fa",
          color: "#071a3a"
        }}
      >
        Loading Sri Lanka destination map...
      </div>
    )
  }
);

export default function PropertyMapLoader() {
  return <SriLankaMap />;
}
