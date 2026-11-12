
"use client";

import dynamic from "next/dynamic";
import styles from "@/app/sectors/property-lifestyle-development/page.module.css";

const SriLankaMap = dynamic(
  () => import("@/components/PropertyLifestyle/SriLankaMap"),
  {
    ssr: false,
    loading: () => (
      <div className={styles.mapLoading}>
        Loading Sri Lanka destination map...
      </div>
    ),
  }
);

export default function SriLankaMapWrapper() {
  return <SriLankaMap />;
}
