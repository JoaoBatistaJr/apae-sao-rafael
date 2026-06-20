import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getNoticias, getNoticia, NotionBlock } from "@/lib/notion";

export const revalidate = 3600;
export const dynamicParams = true;

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
  Evento: { bg: "#dcfce7", color: "#15803d" },
  Notícia: { bg: "#dbeafe", color: "#1d4ed8" },
  Conquista: { bg: "#fef9c3", color: "#854d0e" },
  Projeto: { bg: "#f3e8ff", color: "#7e22ce" },
  Campanha: { bg: "#ffedd5", color: "#9a3412" },
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
              /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?\s]+)/,
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

export default async function NoticiaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [noticia, todasNoticias] = await Promise.all([
    getNoticia(slug),
    getNoticias(),
  ]);
  if (!noticia) notFound();

  const relacionadas = todasNoticias.filter((n) => n.slug !== slug).slice(0, 3);
  const tagColors = TAG_COLORS[noticia.tag] ?? {
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
            {noticia.titulo}
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <section className="section bg-warm w-full">
          <div className="container-site" style={{ maxWidth: "800px" }}>
            <div
              className="mb-8 flex items-center justify-between"
              style={{ paddingBottom: "20px" }}
            >
              <Link
                href="/novidades"
                className="text-sm font-bold"
                style={{ color: "#003F8A" }}
              >
                ← Voltar para novidades
              </Link>
              <div className="flex items-center gap-2">
                {noticia.tag && (
                  <span
                    className="text-xs font-bold"
                    style={{
                      background: tagColors.bg,
                      color: tagColors.color,
                      borderRadius: "8px",
                      padding: "4px 10px",
                    }}
                  >
                    {noticia.tag}
                  </span>
                )}
                {noticia.data && (
                  <span className="text-xs text-gray-400">
                    {formatarData(noticia.data)}
                  </span>
                )}
              </div>
            </div>

            {noticia.imagem && (
              <div className="relative mb-8 h-80 w-full overflow-hidden rounded-2xl">
                <Image
                  src={noticia.imagem}
                  alt={noticia.titulo}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            )}

            {noticia.descricao && (
              <p
                className="text-sm leading-7 text-gray-500"
                style={{
                  marginBottom: "32px",
                  paddingBottom: "24px",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                {noticia.descricao}
              </p>
            )}

            {noticia.blocos && noticia.blocos.length > 0 && (
              <RenderBlocos blocos={noticia.blocos} />
            )}

            <div style={{ marginTop: "48px" }}>
              <Link href="/novidades" className="btn btn-primary btn-md">
                ← Voltar para novidades
              </Link>
            </div>
          </div>
        </section>

        {relacionadas.length > 0 && (
          <section
            className="section bg-warm w-full"
            style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
          >
            <div className="container-site">
              <h2
                className="mb-8 text-xl font-extrabold text-gray-900"
                style={{ paddingBottom: "20px" }}
              >
                Veja também
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relacionadas.map((n) => {
                  const tc = TAG_COLORS[n.tag] ?? {
                    bg: "#f3f4f6",
                    color: "#374151",
                  };
                  return (
                    <Link
                      key={n.id}
                      href={`/novidades/${n.slug}`}
                      className="card flex flex-col overflow-hidden"
                    >
                      <div className="relative h-40">
                        {n.imagem ? (
                          <Image
                            src={n.imagem}
                            alt={n.titulo}
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
                            {n.tag || "Geral"}
                          </span>
                          <span className="text-xs text-gray-400">
                            {formatarData(n.data)}
                          </span>
                        </div>
                        <h3 className="text-sm font-extrabold text-gray-900 line-clamp-2">
                          {n.titulo}
                        </h3>
                        <span
                          className="text-xs font-bold"
                          style={{ color: "#003F8A" }}
                        >
                          Leia mais →
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
