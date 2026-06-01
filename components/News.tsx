import Link from "next/link";
import Image from "next/image";

const noticias = [
  {
    tag: "Evento",
    tagColor: "bg-green-100 text-green-700",
    title: "Festa Junina da APAE São Rafael 2025",
    desc: "Uma tarde cheia de alegria, música e solidariedade. Venha celebrar conosco e apoiar nossas crianças.",
    date: "20 Jun 2025",
    href: "/novidades/festa-junina-2025",
    img: "/novidades-arraia.png",
  },
  {
    tag: "Notícia",
    tagColor: "bg-blue-100 text-blue-700",
    title: "APAE recebe novo equipamento de fisioterapia",
    desc: "Graças às doações da comunidade, adquirimos equipamentos modernos para melhorar o atendimento dos nossos alunos.",
    date: "05 Mai 2025",
    href: "/novidades/novo-equipamento",
    img: "/novidades-equipamento.png",
  },
  {
    tag: "Evento",
    tagColor: "bg-green-100 text-green-700",
    title: "Campanha de arrecadação de alimentos",
    desc: "Até o fim do mês estamos arrecadando alimentos não perecíveis para as famílias atendidas pela APAE.",
    date: "01 Mai 2025",
    href: "/novidades/campanha-alimentos",
    img: "/novidades-mantimentos.png",
  },
];

export default function News() {
  return (
    <section className="section bg-warm w-full relative ">
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

        <div className="card-grid card-grid-3">
          {noticias.map((item) => (
            <div key={item.href} className="card">
              <div className="relative h-52 overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-lg px-3 py-1 text-xs font-bold ${item.tagColor}`}
                  >
                    {item.tag}
                  </span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <h3 className="text-lg font-extrabold leading-snug text-gray-900">
                  {item.title}
                </h3>
                <p className="flex-1 text-sm leading-7 text-gray-500">
                  {item.desc}
                </p>
                <Link
                  href={item.href}
                  className="btn btn-outline-green btn-sm btn-full text-center mt-2"
                >
                  Leia mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
