import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Novidades - APAE São Rafael" };

const noticias = [
  {
    img: "/novidades-arraia.png",
    tag: "Evento",
    tagColor: { background: "#dcfce7", color: "#15803d" },
    title: "Festa Junina da APAE São Rafael 2025",
    desc: "Uma tarde cheia de alegria, música e solidariedade. Venha celebrar conosco e apoiar nossas crianças.",
    date: "20 Jun 2025",
    href: "/novidades/festa-junina-2025",
    destaque: true,
  },
  {
    img: "/novidades-equipamento.png",
    tag: "Notícia",
    tagColor: { background: "#dbeafe", color: "#1d4ed8" },
    title: "APAE recebe novo equipamento de fisioterapia",
    desc: "Graças às doações da comunidade, adquirimos equipamentos modernos para melhorar o atendimento dos nossos alunos.",
    date: "05 Mai 2025",
    href: "/novidades/novo-equipamento",
    destaque: false,
  },
  {
    img: "/novidades-mantimentos.png",
    tag: "Campanha",
    tagColor: { background: "#ffedd5", color: "#9a3412" },
    title: "Campanha de arrecadação de alimentos",
    desc: "Até o fim do mês estamos arrecadando alimentos não perecíveis para as famílias atendidas pela APAE.",
    date: "01 Mai 2025",
    href: "/novidades/campanha-alimentos",
    destaque: false,
  },
  {
    img: "/novidades-voluntario.png",
    tag: "Notícia",
    tagColor: { background: "#dbeafe", color: "#1d4ed8" },
    title: "APAE recebe grupo de novos voluntários",
    desc: "Dez novos voluntários se juntaram à nossa equipe para apoiar as atividades pedagógicas e recreativas.",
    date: "15 Abr 2025",
    href: "/novidades/novos-voluntarios",
    destaque: false,
  },
  {
    img: "/novidades-parceria.png",
    tag: "Notícia",
    tagColor: { background: "#dbeafe", color: "#1d4ed8" },
    title: "Nova parceria com Secretaria de Saúde",
    desc: "A APAE firmou parceria com a Secretaria Municipal de Saúde para ampliar os atendimentos de fisioterapia.",
    date: "02 Abr 2025",
    href: "/novidades/parceria-saude",
    destaque: false,
  },
  {
    img: "/novidades-cursoslibras.png",
    tag: "Evento",
    tagColor: { background: "#dcfce7", color: "#15803d" },
    title: "Inscrições abertas para curso de Libras",
    desc: "As inscrições para o novo curso de Libras estão abertas. Vagas limitadas — garanta a sua!",
    date: "20 Mar 2025",
    href: "/novidades/curso-libras",
    destaque: false,
  },
];

const noticiaPrincipal = noticias.find((n) => n.destaque);
const noticiasSecundarias = noticias.filter((n) => !n.destaque);

export default function NoticiasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="w-full bg-[#0F5A43]">
        <TopBar />
        <Header />
        <div
          className="container-site flex flex-col items-center text-center"
          style={{ paddingBlock: "30px" }}
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

      <main className="flex-1 bg-warm">
        <section className="section bg-warm w-full">
          <div className="container-site">
            {noticiaPrincipal && (
              <Link
                href={noticiaPrincipal.href}
                className="card mb-10 grid overflow-hidden lg:grid-cols-2"
                style={{ display: "grid", marginBottom: "40px" }}
              >
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={noticiaPrincipal.img}
                    alt={noticiaPrincipal.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="card-body justify-center">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-bold"
                      style={{
                        ...noticiaPrincipal.tagColor,
                        borderRadius: "8px",
                        padding: "4px 10px",
                      }}
                    >
                      {noticiaPrincipal.tag}
                    </span>
                    <span className="text-xs text-gray-400">
                      {noticiaPrincipal.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold leading-snug text-gray-900 sm:text-2xl">
                    {noticiaPrincipal.title}
                  </h2>
                  <p className="text-sm leading-7 text-gray-500">
                    {noticiaPrincipal.desc}
                  </p>
                  <span className="btn btn-green btn-sm w-fit">Leia mais</span>
                </div>
              </Link>
            )}

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {noticiasSecundarias.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="card flex flex-col overflow-hidden"
                >
                  <div className="relative h-44">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="card-body">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs font-bold"
                        style={{
                          ...item.tagColor,
                          borderRadius: "8px",
                          padding: "4px 10px",
                        }}
                      >
                        {item.tag}
                      </span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                    <h3 className="text-base font-extrabold leading-snug text-gray-900">
                      {item.title}
                    </h3>
                    <p className="flex-1 text-sm leading-7 text-gray-500">
                      {item.desc}
                    </p>
                    <span
                      className="text-sm font-bold"
                      style={{ color: "#0F5A43" }}
                    >
                      Leia mais →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
