import Link from "next/link";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCursos } from "@/lib/notion-cursos";

export const metadata = { title: "Cursos - APAE São Rafael" };
export const revalidate = 3600;

const TAG_COLORS: Record<string, { background: string; color: string }> = {
  Educação: { background: "#dbeafe", color: "#1d4ed8" },
  Inclusão: { background: "#dcfce7", color: "#15803d" },
  Comunicação: { background: "#f3e8ff", color: "#7e22ce" },
  Família: { background: "#fce7f3", color: "#9d174d" },
  Oficina: { background: "#fef9c3", color: "#854d0e" },
  Saúde: { background: "#ffedd5", color: "#9a3412" },
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

export default async function CursosPage() {
  const cursos = await getCursos().catch(() => []);

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
            Cursos e Capacitações
          </h1>
          <p
            className="mt-3 text-sm text-white/80 sm:text-base"
            style={{ maxWidth: "520px" }}
          >
            Aprenda, cresça e contribua com a missão da APAE. Inscreva-se em
            nossos cursos gratuitos.
          </p>
        </div>
      </div>

      <main className="flex-1">
        <section className="section bg-warm w-full">
          <div className="container-site">
            {cursos.length === 0 ? (
              <div className="flex flex-col items-center text-center py-20">
                <p className="text-lg text-gray-500">
                  Nenhum curso disponível no momento.
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  Acompanhe nossas novidades para saber quando novos cursos
                  forem abertos.
                </p>
                <Link href="/novidades" className="btn btn-primary btn-md mt-6">
                  Ver novidades
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {cursos.map((curso) => {
                  const tagColor = TAG_COLORS[curso.tag] ?? DEFAULT_TAG;
                  return (
                    <div
                      key={curso.id}
                      className="card flex flex-col overflow-hidden"
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        {curso.imagem ? (
                          <Image
                            src={curso.imagem}
                            alt={curso.titulo}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        ) : (
                          <div className="h-full w-full bg-gray-200" />
                        )}
                      </div>
                      <div className="card-body flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span
                            className="text-xs font-bold"
                            style={{
                              ...tagColor,
                              borderRadius: "8px",
                              padding: "4px 10px",
                            }}
                          >
                            {curso.tag || "Geral"}
                          </span>
                          <div className="flex gap-3 text-xs text-gray-400">
                            {curso.duracao && <span>⏱ {curso.duracao}</span>}
                            {curso.vagas && <span>👥 {curso.vagas}</span>}
                          </div>
                        </div>
                        <h3 className="text-base font-extrabold leading-snug text-gray-900">
                          {curso.titulo}
                        </h3>
                        <p className="flex-1 text-sm leading-7 text-gray-500">
                          {curso.descricao}
                        </p>
                        {curso.dataInicio && (
                          <p className="text-xs text-gray-400">
                            📅 Início: {formatarData(curso.dataInicio)}
                          </p>
                        )}
                        <Link
                          href={`/cursos/${curso.slug}`}
                          className="btn btn-green btn-sm btn-full mt-2"
                        >
                          Saiba mais
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <section
          className="w-full"
          style={{
            background: "#003F8A",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <div className="container-site flex flex-col items-center text-center">
            <h2
              className="text-xl font-extrabold text-white sm:text-2xl"
              style={{ marginBottom: "16px" }}
            >
              Não encontrou o que procura?
            </h2>
            <p
              className="text-sm text-white/80 sm:text-base"
              style={{ maxWidth: "480px", marginBottom: "32px" }}
            >
              Entre em contato e nos conte o que você precisa. Estamos sempre
              desenvolvendo novos cursos.
            </p>
            <Link href="/contato" className="btn btn-outline-white btn-md">
              Fale conosco
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
