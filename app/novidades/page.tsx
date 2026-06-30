import Link from "next/link";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getNoticias } from "@/lib/notion";

export const metadata = { title: "Novidades - APAE São Rafael" };
export const revalidate = 3600;
export const dynamic = "force-dynamic";

const TAG_COLORS: Record<string, { background: string; color: string }> = {
  Evento: { background: "#dcfce7", color: "#15803d" },
  Notícia: { background: "#dbeafe", color: "#1d4ed8" },
  Conquista: { background: "#fef9c3", color: "#854d0e" },
  Projeto: { background: "#f3e8ff", color: "#7e22ce" },
  Campanha: { background: "#ffedd5", color: "#9a3412" },
};

const DEFAULT_TAG = { background: "#f3f4f6", color: "#374151" };

function formatarData(dataStr: string): string {
  if (!dataStr) return "";
  const data = new Date(dataStr + "T00:00:00");
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default async function NoticiasPage() {
  const noticias = await getNoticias().catch(() => []);
  const noticiaPrincipal = noticias[0];
  const noticiasSecundarias = noticias.slice(1);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="w-full bg-[#003F8A]">
        <TopBar />
        <Header />
        <div
          className="container-site flex flex-col items-center text-center"
          style={{ paddingBlock: "20px" }}
        >
          <h1 className="text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Novidades e Eventos
          </h1>
          <p
            className="mt-3 text-sm text-white/80 sm:text-base"
            style={{ maxWidth: "520px" }}
          >
            Fique por dentro de tudo que acontece na APAE São Rafael.
          </p>
        </div>
      </div>

      <main className="flex-1">
        <section className="section bg-warm w-full">
          <div className="container-site">
            {noticiaPrincipal && (
              <Link
                href={`/novidades/${noticiaPrincipal.slug}`}
                className="card mb-10 grid overflow-hidden lg:grid-cols-2"
                style={{ display: "grid", marginBottom: "40px" }}
              >
                <div className="relative h-64 lg:h-auto">
                  {noticiaPrincipal.imagem ? (
                    <Image
                      src={noticiaPrincipal.imagem}
                      alt={noticiaPrincipal.titulo}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-200" />
                  )}
                </div>
                <div className="card-body justify-center">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-bold"
                      style={{
                        ...(TAG_COLORS[noticiaPrincipal.tag] ?? DEFAULT_TAG),
                        borderRadius: "8px",
                        padding: "4px 10px",
                      }}
                    >
                      {noticiaPrincipal.tag || "Geral"}
                    </span>
                    <span className="text-xs text-gray-400">
                      {formatarData(noticiaPrincipal.data)}
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold leading-snug text-gray-900 sm:text-2xl">
                    {noticiaPrincipal.titulo}
                  </h2>
                  <p className="text-base leading-6 text-gray-500">
                    {noticiaPrincipal.descricao}
                  </p>
                  <span className="btn btn-green btn-sm w-fit">Leia mais</span>
                </div>
              </Link>
            )}

            {noticiasSecundarias.length > 0 && (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {noticiasSecundarias.map((item) => (
                  <Link
                    key={item.id}
                    href={`/novidades/${item.slug}`}
                    className="card flex flex-col overflow-hidden"
                  >
                    <div className="relative h-44">
                      {item.imagem ? (
                        <Image
                          src={item.imagem}
                          alt={item.titulo}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      ) : (
                        <div className="h-full w-full bg-gray-200" />
                      )}
                    </div>
                    <div className="card-body">
                      <div className="flex items-center justify-between">
                        <span
                          className="text-xs font-bold"
                          style={{
                            ...(TAG_COLORS[item.tag] ?? DEFAULT_TAG),
                            borderRadius: "8px",
                            padding: "4px 10px",
                          }}
                        >
                          {item.tag || "Geral"}
                        </span>
                        <span className="text-xs text-gray-400">
                          {formatarData(item.data)}
                        </span>
                      </div>
                      <h3 className="text-base font-extrabold leading-snug text-gray-900">
                        {item.titulo}
                      </h3>
                      <p className="flex-1 text-sm leading-6 text-gray-500">
                        {item.descricao}
                      </p>
                      <span
                        className="text-sm font-bold"
                        style={{ color: "#003F8A" }}
                      >
                        Leia mais →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {noticias.length === 0 && (
              <div className="flex flex-col items-center text-center py-20">
                <p className="text-lg text-gray-500">
                  Nenhuma novidade publicada ainda.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
