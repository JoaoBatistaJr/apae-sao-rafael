import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Cursos - APAE São Rafael" };

const cursos = [
  {
    img: "/curso-aee.png",
    tag: "Educação",
    tagClass: "bg-blue-100 text-blue-700",
    title: "Atendimento Educacional Especializado",
    desc: "Capacitação para profissionais e familiares sobre práticas pedagógicas adaptadas para pessoas com deficiência intelectual.",
    duracao: "3 meses",
    vagas: "20 vagas",
    href: "/cursos/aee",
  },
  {
    img: "/curso-inclusao.png",
    tag: "Inclusão",
    tagClass: "bg-green-100 text-green-700",
    title: "Inclusão Social e Cidadania",
    desc: "Curso voltado para a comunidade sobre como promover a inclusão no cotidiano, no trabalho e nas relações sociais.",
    duracao: "1 mês",
    vagas: "30 vagas",
    href: "/cursos/inclusao",
  },
  {
    img: "/curso-libras.png",
    tag: "Comunicação",
    tagClass: "bg-purple-100 text-purple-700",
    title: "Introdução à Libras",
    desc: "Aprenda o básico da Língua Brasileira de Sinais e amplie sua capacidade de comunicação com pessoas surdas.",
    duracao: "2 meses",
    vagas: "25 vagas",
    href: "/cursos/libras",
  },
  {
    img: "/curso-familia.png",
    tag: "Família",
    tagClass: "bg-pink-100 text-pink-700",
    title: "Apoio à Família do Atendido",
    desc: "Orientações práticas para familiares sobre como lidar com os desafios do dia a dia e fortalecer os vínculos afetivos.",
    duracao: "6 semanas",
    vagas: "15 vagas",
    href: "/cursos/familia",
  },
  {
    img: "/curso-artesanato.png",
    tag: "Oficina",
    tagClass: "bg-yellow-100 text-yellow-700",
    title: "Oficina de Artesanato Inclusivo",
    desc: "Atividade prática de criação artística aberta à comunidade, com foco na convivência e na valorização da diversidade.",
    duracao: "8 semanas",
    vagas: "20 vagas",
    href: "/cursos/artesanato",
  },
  {
    img: "/curso-cuidador.png",
    tag: "Saúde",
    tagClass: "bg-orange-100 text-orange-700",
    title: "Formação de Cuidadores",
    desc: "Capacitação para cuidadores de pessoas com deficiência, abordando técnicas de cuidado, higiene, comunicação e ética.",
    duracao: "2 meses",
    vagas: "20 vagas",
    href: "/cursos/cuidadores",
  },
];

export default function CursosPage() {
  return (
    <div className="flex min-h-screen flex-col">

      {/* Header sólido */}
      <div className="w-full bg-[#0F5A43]">
        <TopBar />
        <Header />
        <div className="container-site py-10 text-center sm:py-14">
          <h1 className="text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Cursos e Capacitações
          </h1>
          <p className="mx-auto mt-3 text-sm text-white/80 sm:text-base" style={{ maxWidth: "520px" }}>
            Aprenda, cresça e contribua com a missão da APAE. Inscreva-se em nossos cursos gratuitos.
          </p>
        </div>
      </div>

      <main className="flex-1 bg-warm">

        {/* Grid de cursos */}
        <section className="section-pad bg-warm w-full">
          <div className="container-site">

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cursos.map((curso) => (
                <div
                  key={curso.href}
                  className="card-radius flex flex-col overflow-hidden border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  {/* Imagem */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={curso.img}
                      alt={curso.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center justify-between">
                      <span className={`btn-radius px-2.5 py-1 text-xs font-bold ${curso.tagClass}`}>
                        {curso.tag}
                      </span>
                      <div className="flex gap-3 text-xs text-gray-400">
                        <span>⏱ {curso.duracao}</span>
                        <span>👥 {curso.vagas}</span>
                      </div>
                    </div>

                    <h3 className="text-base font-extrabold leading-snug text-gray-900">
                      {curso.title}
                    </h3>

                    <p className="flex-1 text-sm leading-7 text-gray-500">
                      {curso.desc}
                    </p>

                    <Link
                      href={curso.href}
                      className="btn-radius mt-2 block w-full bg-green-600 py-3 text-center text-sm font-bold text-white transition hover:bg-green-700"
                    >
                      Inscrever-se
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="w-full" style={{ background: "#0F5A43", paddingTop: "60px", paddingBottom: "60px" }}>
          <div className="container-site text-center">
            <h2 className="text-xl font-extrabold text-white sm:text-2xl" style={{ marginBottom: "16px" }}>
              Não encontrou o que procura?
            </h2>
            <p className="mx-auto text-sm text-white/80 sm:text-base" style={{ maxWidth: "480px", marginBottom: "32px" }}>
              Entre em contato e nos conte o que você precisa. Estamos sempre desenvolvendo novos cursos.
            </p>
            <Link
              href="/contato"
              className="btn-radius bg-white font-bold text-green-800 transition hover:bg-green-50"
              style={{ display: "inline-block", padding: "13px 32px", fontSize: "15px" }}
            >
              Fale conosco
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}