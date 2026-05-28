import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Notícias - APAE São Rafael" };

const categorias = ["Todos", "Notícia", "Evento", "Campanha"];

const noticias = [
  {
    img: "/news-festa-junina.png",
    tag: "Evento",
    tagClass: "bg-green-100 text-green-700",
    title: "Festa Junina da APAE São Rafael 2025",
    desc: "Uma tarde cheia de alegria, música e solidariedade. Venha celebrar conosco e apoiar nossas crianças.",
    date: "20 Jun 2025",
    autor: "Equipe APAE",
    href: "/noticias/festa-junina-2025",
    destaque: true,
  },
  {
    img: "/news-fisioterapia.png",
    tag: "Notícia",
    tagClass: "bg-blue-100 text-blue-700",
    title: "APAE recebe novo equipamento de fisioterapia",
    desc: "Graças às doações da comunidade, adquirimos equipamentos modernos para melhorar o atendimento dos nossos alunos.",
    date: "05 Mai 2025",
    autor: "Equipe APAE",
    href: "/noticias/novo-equipamento",
    destaque: false,
  },
  {
    img: "/news-alimentos.png",
    tag: "Campanha",
    tagClass: "bg-orange-100 text-orange-700",
    title: "Campanha de arrecadação de alimentos",
    desc: "Até o fim do mês estamos arrecadando alimentos não perecíveis para as famílias atendidas pela APAE.",
    date: "01 Mai 2025",
    autor: "Equipe APAE",
    href: "/noticias/campanha-alimentos",
    destaque: false,
  },
  {
    img: "/news-voluntarios.png",
    tag: "Notícia",
    tagClass: "bg-blue-100 text-blue-700",
    title: "APAE recebe grupo de novos voluntários",
    desc: "Dez novos voluntários se juntaram à nossa equipe para apoiar as atividades pedagógicas e recreativas.",
    date: "15 Abr 2025",
    autor: "Equipe APAE",
    href: "/noticias/novos-voluntarios",
    destaque: false,
  },
  {
    img: "/news-parceria.png",
    tag: "Notícia",
    tagClass: "bg-blue-100 text-blue-700",
    title: "Nova parceria com Secretaria de Saúde",
    desc: "A APAE firmou parceria com a Secretaria Municipal de Saúde para ampliar os atendimentos de fisioterapia.",
    date: "02 Abr 2025",
    autor: "Equipe APAE",
    href: "/noticias/parceria-saude",
    destaque: false,
  },
  {
    img: "/news-cursoslibras.png",
    tag: "Evento",
    tagClass: "bg-green-100 text-green-700",
    title: "Inscrições abertas para curso de Libras",
    desc: "As inscrições para o novo curso de Libras estão abertas. Vagas limitadas — garanta a sua!",
    date: "20 Mar 2025",
    autor: "Equipe APAE",
    href: "/noticias/curso-libras",
    destaque: false,
  },
];

const noticiaPrincipal = noticias.find((n) => n.destaque);
const noticiasSecundarias = noticias.filter((n) => !n.destaque);

export default function NoticiasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header sólido */}
      <div className="w-full bg-[#0F5A43]">
        <TopBar />
        <Header />
        <div className="container-site py-10 text-center sm:py-14">
          <h1 className="text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Notícias e Eventos
          </h1>
          <p
            className="mx-auto mt-3 text-sm text-white/80 sm:text-base"
            style={{ maxWidth: "520px" }}
          >
            Fique por dentro de tudo que acontece na APAE São Rafael.
          </p>
        </div>
      </div>

      <main className="flex-1 bg-warm">
        <section className="section-pad bg-warm w-full">
          <div className="container-site">
            {/* Filtros de categoria */}
            <div className="mb-8 flex flex-wrap gap-3">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  className={`btn-radius px-4 py-2 text-sm font-bold transition ${
                    cat === "Todos"
                      ? "bg-green-700 text-white"
                      : "border-2 border-gray-200 bg-white text-gray-600 hover:border-green-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Notícia em destaque */}
            {noticiaPrincipal && (
              <Link
                href={noticiaPrincipal.href}
                className="card-radius mb-8 grid overflow-hidden border border-gray-200 bg-white shadow-sm transition hover:shadow-md lg:grid-cols-2"
                style={{ display: "grid" }}
              >
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={noticiaPrincipal.img}
                    alt={noticiaPrincipal.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center gap-4 p-7 sm:p-10">
                  <div className="flex items-center gap-3">
                    <span
                      className={`btn-radius px-2.5 py-1 text-xs font-bold ${noticiaPrincipal.tagClass}`}
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
                  <span className="btn-radius w-fit bg-green-600 px-5 py-2.5 text-sm font-bold text-white">
                    Leia mais
                  </span>
                </div>
              </Link>
            )}

            {/* Grid de notícias */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {noticiasSecundarias.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="card-radius flex flex-col overflow-hidden border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative h-44">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center justify-between">
                      <span
                        className={`btn-radius px-2.5 py-1 text-xs font-bold ${item.tagClass}`}
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
                    <span className="mt-1 text-sm font-bold text-green-700 hover:underline">
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
