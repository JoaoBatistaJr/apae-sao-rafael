// components/AssistiveScript.tsx
"use client";
import Script from "next/script";

export default function AssistiveScript() {
  return (
    <Script
      src="https://cdn.assistive.com.br/plugin/AssistiveWebPlugin.js"
      strategy="afterInteractive"
      onLoad={() => window.assistive?.init({btnShape: "rounded"})}
    />
  );
}