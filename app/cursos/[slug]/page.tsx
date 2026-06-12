import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCursos, getCurso, NotionBlock } from "@/lib/notion-cursos";

export const revalidate = 3600;
export const dynamicParams = true;
export const dynamic = "force-static";

export async function generateStaticParams() {
  const cursos = await getCursos();
  return cursos.map((c) => ({ slug: c.slug }));
}

function formatarData(dataStr: string): string {
  if (!dataStr) return "";
  const data = new Date(dataStr + "T00:00:00");
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const TAG_COLORS: Record<string, { bg: string; color: string }> = {
  Educação: { bg: "#dbeafe", color: "#1d4ed8" },
  Inclusão: { bg: "#dcfce7", color: "#15803d" },
  Comunicação: { bg: "#f3e8ff", color: "#7e22ce" },
  Família: { bg: "#fce7f3", color: "#9d174d" },
  Oficina: { bg: "#fef9c3", color: "#854d0e" },
  Saúde: { bg: "#ffedd5", color: "#9a3412" },
};

function RenderBlocos({ blocos }: { blocos: NotionBlock[] }) {
  return (
    <div className="flex flex-col" style={{ gap: "20px" }}>
      {blocos.map((bloco, i) => {
        switch (bloco.type) {
          case "paragraph":
            return (
              <p key={i} className="text-base leading-8 text-gray-600">
                {bloco.text}
              </p>
            );
          case "heading":
            if (bloco.level === 1)
              return (
                <h2
                  key={i}
                  className="text-2xl font-extrabold text-gray-900"
                  style={{ marginTop: "16px" }}
                >
                  {bloco.text}
                </h2>
              );
            if (bloco.level === 2)
              return (
                <h3
                  key={i}
                  className="text-xl font-extrabold text-gray-900"
                  style={{ marginTop: "12px" }}
                >
                  {bloco.text}
                </h3>
              );
            return (
              <h4
                key={i}
                className="text-lg font-bold text-gray-900"
                style={{ marginTop: "8px" }}
              >
                {bloco.text}
              </h4>
            );
          case "bullet":
            return (
              <li
                key={i}
                className="ml-6 list-disc text-base leading-8 text-gray-600"
              >
                {bloco.text}
              </li>
            );
          case "numbered":
            return (
              <li
                key={i}
                className="ml-6 list-decimal text-base leading-8 text-gray-600"
              >
                {bloco.text}
              </li>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-blue-400 pl-5 py-2 italic text-gray-500 bg-blue-50 rounded-r-lg"
              >
                {bloco.text}
              </blockquote>
            );
          case "divider":
            return (
              <hr
                key={i}
                className="border-gray-200"
                style={{ marginBlock: "8px" }}
              />
            );
          case "image":
            return (
              <div
                key={i}
                className="w-full overflow-hidden rounded-xl"
                style={{ marginBlock: "8px" }}
              >
                <Image
                  src={bloco.url!}
                  alt=""
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-xl"
                  unoptimized
                />
              </div>
            );
          case "video":
            const videoId = bloco.url?.match(
              /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/,
            )?.[1];
            if (!videoId) return null;
            return (
              <div
                key={i}
                className="relative w-full overflow-hidden rounded-xl"
                style={{
                  paddingBottom: "56.25%",
                  height: 0,
                  marginBlock: "8px",
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default async function CursoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [curso, todosCursos] = await Promise.all([getCurso(slug), getCursos()]);
  if (!curso) notFound();

  const relacionados = todosCursos.filter((c) => c.slug !== slug).slice(0, 3);
  const tagColors = TAG_COLORS[curso.tag] ?? {
    bg: "#f3f4f6",
    color: "#374151",
  };

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
            {curso.titulo}
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <section className="section bg-warm w-full">
          <div className="container-site" style={{ maxWidth: "800px" }}>
            <div className="mb-8 flex items-center justify-between" style={{paddingBottom: "20px"}}>
              <Link
                href="/cursos"
                className="text-sm font-bold"
                style={{ color: "#003F8A" }}
              >
                ← Voltar para cursos
              </Link>
              <div className="flex items-center gap-2">
                {curso.tag && (
                  <span
                    className="text-xs font-bold"
                    style={{
                      background: tagColors.bg,
                      color: tagColors.color,
                      borderRadius: "8px",
                      padding: "4px 10px",
                    }}
                  >
                    {curso.tag}
                  </span>
                )}
              </div>
            </div>

            {curso.imagem && (
              <div className="relative mb-8 h-80 w-full overflow-hidden rounded-2xl">
                <Image
                  src={curso.imagem}
                  alt={curso.titulo}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            )}

            {/* Informações do curso */}
            <div
              className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
              style={{
                paddingBottom: "24px",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              {curso.duracao && (
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400">Duração</span>
                  <span className="text-sm font-bold text-gray-700">
                    ⏱ {curso.duracao}
                  </span>
                </div>
              )}
              {curso.vagas && (
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400">Vagas</span>
                  <span className="text-sm font-bold text-gray-700">
                    👥 {curso.vagas}
                  </span>
                </div>
              )}
              {curso.custo && (
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400">Investimento</span>
                  <span className="text-sm font-bold text-gray-700">
                    💰 {curso.custo}
                  </span>
                </div>
              )}
              {curso.dataInicio && (
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400">Início</span>
                  <span className="text-sm font-bold text-gray-700">
                    📅 {formatarData(curso.dataInicio)}
                  </span>
                </div>
              )}
            </div>

            {curso.descricao && (
              <p
                className="text-sm leading-7 text-gray-500"
                style={{
                  marginBottom: "32px",
                  paddingBottom: "24px",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                {curso.descricao}
              </p>
            )}

            {curso.blocos && curso.blocos.length > 0 && (
              <RenderBlocos blocos={curso.blocos} />
            )}

            <div className="flex flex-wrap gap-4" style={{ marginTop: "48px" }}>
              {curso.linkInscricao && (
                <a
                  href={curso.linkInscricao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-green btn-md"
                >
                  Inscrever-se
                </a>
              )}
              <Link href="/cursos" className="btn btn-primary btn-md">
                ← Voltar para cursos
              </Link>
            </div>
          </div>
        </section>

        {relacionados.length > 0 && (
          <section
            className="section bg-warm w-full"
            style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div className="container-site">
              <h2 className="mb-8 text-xl font-extrabold text-gray-900" >
                Outros cursos
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relacionados.map((c) => {
                  const tc = TAG_COLORS[c.tag] ?? {
                    bg: "#f3f4f6",
                    color: "#374151",
                  };
                  return (
                    <Link
                      key={c.id}
                      href={`/cursos/${c.slug}`}
                      className="card flex flex-col overflow-hidden"
                    >
                      <div className="relative h-40">
                        {c.imagem ? (
                          <Image
                            src={c.imagem}
                            alt={c.titulo}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        ) : (
                          <div className="h-full w-full bg-gray-200" />
                        )}
                      </div>
                      <div className="card-body flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            className="text-xs font-bold"
                            style={{
                              background: tc.bg,
                              color: tc.color,
                              borderRadius: "8px",
                              padding: "3px 8px",
                            }}
                          >
                            {c.tag || "Geral"}
                          </span>
                        </div>
                        <h3 className="text-sm font-extrabold text-gray-900 line-clamp-2">
                          {c.titulo}
                        </h3>
                        <span
                          className="text-xs font-bold"
                          style={{ color: "#003F8A" }}
                        >
                          Saiba mais →
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
