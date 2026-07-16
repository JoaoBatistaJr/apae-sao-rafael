"use client";

import AssistiveScript from "@/components/AssistiveScript";
import VLibras from "react-vlibras";

export default function AccessibilityWidgets() {
  return (
    <>
      <AssistiveScript />
      <VLibras safeInit />
    </>
  );
}
