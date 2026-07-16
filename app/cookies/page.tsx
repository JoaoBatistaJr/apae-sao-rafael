"use client";

import { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type CookiePrefs = {
  necessarios: true;
  analiticos: boolean;
  acessibilidade: boolean;
};

const STORAGE_KEY = "apae-cookie-prefs";

const DEFAULT_PREFS: CookiePrefs = {
  necessarios: true,
  analiticos: true,
  acessibilidade: true,
};

export default function ConfiguracoesCookiesPage() {
  const [prefs, setPrefs] = useState<CookiePrefs>(DEFAULT_PREFS);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- sincronização legítima com localStorage no mount
      if (stored) setPrefs(JSON.parse(stored));
    } catch {
      // localStorage indisponível (modo privado, etc.) — mantém defaults
    }
  }, []);

  function toggle(key: "analiticos" | "acessibilidade") {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  }

  function salvar() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setSaved(true);
    setTimeout(() => window.location.reload(), 600);
  }

  function aceitarTudo() {
    const all: CookiePrefs = {
      necessarios: true,
      analiticos: true,
      acessibilidade: true,
    };
    setPrefs(all);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    setSaved(true);
    setTimeout(() => window.location.reload(), 600);
  }

  function rejeitarOpcionais() {
    const minimal: CookiePrefs = {
      necessarios: true,
      analiticos: false,
      acessibilidade: false,
    };
    setPrefs(minimal);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(minimal));
    setSaved(true);
    setTimeout(() => window.location.reload(), 600);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="w-full bg-[#003F8A]">
        <TopBar />
        <Header />
        <div
          className="container-site flex flex-col items-center text-center"
          style={{ paddingBlock: "48px" }}
        >
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Configurações de cookies
          </h1>
          <p
            className="mt-4 text-sm text-white/80"
            style={{ maxWidth: "520px" }}
          >
            Escolha quais tipos de cookies você permite neste site.
          </p>
        </div>
      </div>

      <main className="flex-1 bg-warm">
        <section className="w-full" style={{ paddingBlock: "60px" }}>
          <div className="container-site">
            <div className="mx-auto" style={{ maxWidth: "760px" }}>
              <p className="mb-8 text-base leading-7 text-gray-700">
                Usamos cookies e tecnologias semelhantes para o funcionamento do
                site, medição de uso e recursos de acessibilidade. Você pode
                ajustar suas preferências abaixo a qualquer momento.
              </p>

              <div className="flex flex-col gap-4">
                {/* Necessários */}
                <div
                  className="border border-gray-200 bg-white"
                  style={{ borderRadius: "16px", padding: "24px" }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-gray-900">
                      Cookies necessários
                    </h3>
                    <span
                      className="text-xs font-bold text-white"
                      style={{
                        background: "#003F8A",
                        padding: "4px 12px",
                        borderRadius: "999px",
                      }}
                    >
                      Sempre ativo
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Essenciais para o funcionamento básico do site, navegação e
                    formulário de contato. Não podem ser desativados.
                  </p>
                </div>

                {/* Analíticos */}
                <div
                  className="border border-gray-200 bg-white"
                  style={{ borderRadius: "16px", padding: "24px" }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-gray-900">
                      Cookies analíticos
                    </h3>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={prefs.analiticos}
                      onClick={() => toggle("analiticos")}
                      style={{
                        width: "44px",
                        height: "24px",
                        borderRadius: "999px",
                        background: prefs.analiticos ? "#003F8A" : "#d1d5db",
                        position: "relative",
                        transition: "background 0.2s",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          top: "3px",
                          left: prefs.analiticos ? "23px" : "3px",
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          background: "white",
                          transition: "left 0.2s",
                        }}
                      />
                    </button>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Nos ajudam a entender como o site é utilizado (Vercel
                    Analytics), de forma agregada e anônima, sem identificação
                    individual.
                  </p>
                </div>

                {/* Acessibilidade */}
                <div
                  className="border border-gray-200 bg-white"
                  style={{ borderRadius: "16px", padding: "24px" }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-gray-900">
                      Recursos de acessibilidade
                    </h3>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={prefs.acessibilidade}
                      onClick={() => toggle("acessibilidade")}
                      style={{
                        width: "44px",
                        height: "24px",
                        borderRadius: "999px",
                        background: prefs.acessibilidade
                          ? "#003F8A"
                          : "#d1d5db",
                        position: "relative",
                        transition: "background 0.2s",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          top: "3px",
                          left: prefs.acessibilidade ? "23px" : "3px",
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          background: "white",
                          transition: "left 0.2s",
                        }}
                      />
                    </button>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Carrega os widgets de VLibras e o assistente de
                    acessibilidade, que podem armazenar preferências de exibição
                    no seu navegador.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={salvar}
                  className="btn btn-primary btn-md"
                >
                  Salvar preferências
                </button>
                <button
                  type="button"
                  onClick={aceitarTudo}
                  className="btn-radius border border-gray-300 font-bold text-gray-700 transition hover:bg-gray-50"
                  style={{ padding: "10px 24px" }}
                >
                  Aceitar todos
                </button>
                <button
                  type="button"
                  onClick={rejeitarOpcionais}
                  className="btn-radius border border-gray-300 font-bold text-gray-700 transition hover:bg-gray-50"
                  style={{ padding: "10px 24px" }}
                >
                  Rejeitar opcionais
                </button>
              </div>

              {saved && (
                <p className="mt-4 text-sm font-semibold text-green-700">
                  Preferências salvas com sucesso.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
