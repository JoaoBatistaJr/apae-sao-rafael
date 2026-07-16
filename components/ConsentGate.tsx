"use client";

import { useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "apae-cookie-prefs";

type CookiePrefs = {
  necessarios: true;
  analiticos: boolean;
  acessibilidade: boolean;
};

export default function ConsentGate({
  analytics,
  accessibility,
}: {
  analytics: ReactNode;
  accessibility: ReactNode;
}) {
  const [prefs, setPrefs] = useState<CookiePrefs | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronização legítima com localStorage no mount
        setPrefs(JSON.parse(stored));
      }
    } catch {
      // localStorage indisponível — nada opcional carrega
    }
  }, []);

  return (
    <>
      {prefs?.analiticos ? analytics : null}
      {prefs?.acessibilidade === false ? null : accessibility}
    </>
  );
}
