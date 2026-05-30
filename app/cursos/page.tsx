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
    tagColor: { background: "#dbeafe", color: "#1d4ed8" },
    title: "Atendimento Educacional Especializado",
    desc: "Capacitação para profissionais e familiares sobre práticas pedagógicas adaptadas para pessoas com deficiência intelectual.",
    duracao: "3 meses",
    vagas: "20 vagas",
    href: "/cursos/aee",
  },
  {
    img: "/curso-inclusao.png",
    tag: "Inclusão",
    tagColor: { background: "#dcfce7", color: "#15803d" },
    title: "Inclusão Social e Cidadania",
    desc: "Curso voltado para a comunidade sobre como promover a inclusão no cotidiano, no trabalho e nas relações sociais.",
    duracao: "1 mês",
    vagas: "30 vagas",
    href: "/cursos/inclusao",
  },
  {
    img: "/curso-libras.png",
    tag: "Comunicação",
    tagColor: { background: "#f3e8ff", color: "#7e22ce" },
    title: "Introdução à Libras",
    desc: "Aprenda o básico da Língua Brasileira de Sinais e amplie sua capacidade de comunicação com pessoas surdas.",
    duracao: "2 meses",
    vagas: "25 vagas",
    href: "/cursos/libras",
  },
  {
    img: "/curso-familia.png",
    tag: "Família",
    tagColor: { background: "#fce7f3", color: "#9d174d" },
    title: "Apoio à Família do Atendido",
    desc: "Orientações práticas para familiares sobre como lidar com os desafios do dia a dia e fortalecer os vínculos afetivos.",
    duracao: "6 semanas",
    vagas: "15 vagas",
    href: "/cursos/familia",
  },
  {
    img: "/curso-artesanato.png",
    tag: "Oficina",
    tagColor: { background: "#fef9c3", color: "#854d0e" },
    title: "Oficina de Artesanato Inclusivo",
    desc: "Atividade prática de criação artística aberta à comunidade, com foco na convivência e na valorização da diversidade.",
    duracao: "8 semanas",
    vagas: "20 vagas",
    href: "/cursos/artesanato",
  },
  {
    img: "/curso-cuidador.png",
    tag: "Saúde",
    tagColor: { background: "#ffedd5", color: "#9a3412" },
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
      <div className="w-full bg-[#0F5A43]">
        <TopBar />
        <Header />
        <div className="container-site py-10 text-center sm:py-14">
          <h1 className="text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Cursos e Capacitações
          </h1>
          <p
            className="mx-auto mt-3 text-sm text-white/80 sm:text-base"
            style={{ maxWidth: "520px" }}
          >
            Aprenda, cresça e contribua com a missão da APAE. Inscreva-se em
            nossos cursos gratuitos.
          </p>
        </div>
      </div>

      <main className="flex-1 bg-warm">
        <section className="section bg-warm w-full">
          <div className="container-site">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {cursos.map((curso) => (
                <div
                  key={curso.href}
                  className="card flex flex-col overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={curso.img}
                      alt={curso.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="card-body">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs font-bold"
                        style={{
                          ...curso.tagColor,
                          borderRadius: "8px",
                          padding: "4px 10px",
                        }}
                      >
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
                      className="btn btn-green btn-sm btn-full mt-2"
                    >
                      Inscrever-se
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="w-full"
          style={{
            background: "#0F5A43",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <div className="container-site text-center">
            <h2
              className="text-xl font-extrabold text-white sm:text-2xl"
              style={{ marginBottom: "16px" }}
            >
              Não encontrou o que procura?
            </h2>
            <p
              className="mx-auto text-sm text-white/80 sm:text-base"
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
