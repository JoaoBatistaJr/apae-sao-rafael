"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "apae-cookie-prefs";

type CookiePrefs = {
  necessarios: true;
  analiticos: boolean;
  acessibilidade: boolean;
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage indisponível — não mostra banner pra evitar quebra
    }
    if (!stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronização legítima com localStorage no mount
      setVisible(true);
    }
  }, []);

  function salvarEFechar(prefs: CookiePrefs) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // ignora falha de storage
    }
    setVisible(false);
    window.location.reload();
  }

  function aceitarTudo() {
    salvarEFechar({
      necessarios: true,
      analiticos: true,
      acessibilidade: true,
    });
  }

  function rejeitarOpcionais() {
    salvarEFechar({
      necessarios: true,
      analiticos: false,
      acessibilidade: false,
    });
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 w-full border-t border-gray-200 bg-white"
      style={{ padding: "20px", boxShadow: "0 -4px 20px rgba(0,0,0,0.08)" }}
    >
      <div className="container-site flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p
          className="text-sm leading-6 text-gray-700"
          style={{ maxWidth: "560px" }}
        >
          Usamos cookies para melhorar sua experiência e medir o uso do site.
          Você pode aceitar todos, rejeitar os opcionais ou{" "}
          <Link
            href="/cookies"
            className="font-semibold text-[#003F8A] underline"
          >
            personalizar suas preferências
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={rejeitarOpcionais}
            className="btn border border-gray-300 font-bold text-gray-700 transition hover:bg-gray-50"
            style={{ padding: "10px 20px", fontSize: "14px" }}
          >
            Rejeitar opcionais
          </button>
          <button
            type="button"
            onClick={aceitarTudo}
            className="btn btn-primary btn-md"
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
}
