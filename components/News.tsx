import Link from "next/link";
import Image from "next/image";
import { getNoticias } from "@/lib/notion";
import ScrollReveal from "@/components/ScrollReveal";

export const dynamic = "force-dynamic";

const TAG_COLORS: Record<string, string> = {
  Evento: "bg-green-100 text-green-700",
  Notícia: "bg-blue-100 text-blue-700",
  Conquista: "bg-yellow-100 text-yellow-700",
  Projeto: "bg-purple-100 text-purple-700",
  Campanha: "bg-orange-100 text-orange-700",
};

function formatarData(dataStr: string): string {
  if (!dataStr) return "";
  const data = new Date(dataStr + "T00:00:00");
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default async function News() {
  const noticias = (await getNoticias().catch(() => [])).slice(0, 3);

  return (
    <section className="section bg-warm w-full relative">
      <div
        className="pointer-events-none absolute -left-1 -top-12 select-none"
        aria-hidden="true"
      >
        <Image
          src="/decorations/balloon-blue.svg"
          alt=""
          width={150}
          height={150}
          className="w-16 sm:w-20 md:w-36"
        />
      </div>
      <div className="container-site">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4 section-title">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl flex items-center justify-center gap-3">
                <Image
                  src="/decorations/puzzle-purple.svg"
                  alt=""
                  width={36}
                  height={36}
                  aria-hidden="true"
                />
                Novidades e Eventos
                <Image
                  src="/decorations/puzzle-purple.svg"
                  alt=""
                  width={36}
                  height={36}
                  aria-hidden="true"
                />
              </h2>
              <p className="mt-3 text-base text-gray-500 text-center">
                Fique por dentro do que acontece na APAE São Rafael.
              </p>
            </div>
            <Link href="/novidades" className="btn btn-outline-green btn-sm">
              Ver todas
            </Link>
          </div>
        </ScrollReveal>

        <div className="card-grid card-grid-3">
          {noticias.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 100}>
              <div className="card flex flex-col overflow-hidden h-full">
                <div className="relative h-52 overflow-hidden">
                  {item.imagem ? (
                    <Image
                      src={item.imagem}
                      alt={item.titulo}
                      fill
                      className="object-cover"
                      unoptimized
                      priority={i === 0}
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-200" />
                  )}
                </div>
                <div className="card-body flex flex-col flex-1">
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-lg px-3 py-1 text-xs font-bold ${TAG_COLORS[item.tag] ?? "bg-gray-100 text-gray-600"}`}
                    >
                      {item.tag || "Geral"}
                    </span>
                    <span className="text-xs text-gray-400">
                      {formatarData(item.data)}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold leading-snug text-gray-900">
                    {item.titulo}
                  </h3>
                  <p className="flex-1 text-sm leading-7 text-gray-500">
                    {item.descricao}
                  </p>
                  <Link
                    href={`/novidades/${item.slug}`}
                    className="btn btn-outline-green btn-sm btn-full text-center mt-2"
                  >
                    Leia mais
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
