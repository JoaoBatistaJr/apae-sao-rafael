import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mvv = [
  {
    icon: "🎯",
    title: "Missão",
    desc: "Promover atendimento especializado, inclusão social e desenvolvimento humano de pessoas com deficiência, garantindo seus direitos e fortalecendo suas habilidades.",
  },
  {
    icon: "🔭",
    title: "Visão",
    desc: "Ser referência regional em qualidade de atendimento, inclusão e defesa dos direitos das pessoas com deficiência, ampliando continuamente nossos serviços.",
  },
  {
    icon: "💚",
    title: "Valores",
    desc: "Atuamos com respeito, dignidade e empatia — acolhendo cada pessoa e família com transparência, compromisso social e humanização em todos os nossos atendimentos.",
  },
];

const estrutura = [
  { icon: "🎨", label: "Atendimento em Artes" },
  { icon: "🧶", label: "Oficina de Artesanato" },
  { icon: "🍳", label: "Aulas de Culinária" },
  { icon: "🌱", label: "Projeto Semear" },
  { icon: "👩‍👧", label: "Artesanato para Mães" },
  { icon: "📚", label: "AEE – Atendimento Educacional Especializado" },
];

const servicos = [
  { icon: "🔍", label: "Avaliação inicial e acompanhamento multiprofissional" },
  { icon: "📋", label: "Atendimentos regulares conforme plano individual" },
  { icon: "🤝", label: "Projetos de inclusão social" },
  { icon: "🎓", label: "Atividades pedagógicas e socioeducativas" },
  { icon: "👨‍👩‍👧", label: "Grupos de apoio às famílias" },
  { icon: "📣", label: "Participação em campanhas e ações comunitárias" },
];

export default function SobrePage() {
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
            Sobre a APAE São Rafael
          </h1>
          <p className="mt-3 text-sm text-white/80 sm:text-base">
            Conheça nossa história, nossa equipe e o trabalho que transforma
            vidas na nossa comunidade.
          </p>
        </div>
      </div>

      <main className="flex-1">
        <section
          className="bg-warm w-full"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2
                  className="text-2xl font-extrabold text-gray-900 sm:text-3xl"
                  style={{ marginBottom: "24px" }}
                >
                  Quem Somos
                </h2>
                <p
                  className="text-base leading-6 text-gray-700"
                  style={{ paddingBottom: "10px" }}
                >
                  A APAE São Rafael é uma instituição sem fins lucrativos
                  voltada ao atendimento de pessoas com deficiência intelectual,
                  múltipla e transtorno do espectro autista do município de São
                  Rafael e região.
                </p>
                <p
                  className="mt-4 text-base leading-6 text-gray-700"
                  style={{ paddingBottom: "10px" }}
                >
                  Reconhecida como utilidade pública municipal e estadual,
                  atendemos mais de 50 pessoas em atividades que promovem
                  desenvolvimento físico, cognitivo e social — sempre de forma
                  gratuita.
                </p>
                <p
                  className="mt-4 text-base leading-6 text-gray-700"
                  style={{ paddingBottom: "10px" }}
                >
                  Acreditamos no potencial de cada pessoa e trabalhamos junto às
                  famílias e à comunidade para construir uma cidade mais
                  inclusiva e acolhedora.
                </p>
              </div>
              <div
                className="relative overflow-hidden"
                style={{ height: "340px", borderRadius: "10px" }}
              >
                <Image
                  src="/sobre-quem-somos.jpg"
                  alt="APAE São Rafael"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-warm-muted w-full"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site">
            <h2
              className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl"
              style={{ marginBottom: "60px" }}
            >
              Nossa Missão, Visão e Valores
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {mvv.map((item) => (
                <div
                  key={item.title}
                  className="border border-gray-200 bg-white shadow-sm"
                  style={{ borderRadius: "20px", padding: "40px" }}
                >
                  <div className="mb-4 text-5xl">{item.icon}</div>
                  <h3
                    className="mb-3 text-xl font-extrabold text-gray-900"
                    style={{ paddingBlock: "10px" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base leading-5 text-gray-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-warm w-full"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site">
            <h2
              className="text-2xl font-extrabold text-gray-900 sm:text-3xl"
              style={{ marginBottom: "40px" }}
            >
              Nossa História
            </h2>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div
                className="relative overflow-hidden"
                style={{ height: "320px", borderRadius: "20px" }}
              >
                <Image
                  src="/sobre-historia.png"
                  alt="História da APAE São Rafael"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-base leading-6 text-gray-600">
                  Em 25 de agosto de 2023, familiares de pessoas com deficiência
                  e membros da comunidade de São Rafael se uniram para fazer o
                  que o município ainda não tinha: um espaço dedicado ao
                  atendimento especializado de quem mais precisava.
                </p>
                <p className="text-base leading-6 text-gray-600">
                  Nos primeiros anos, cada conquista foi construída
                  coletivamente. A sala de fisioterapia saiu do papel graças ao
                  1º Bingo da APAE, que reuniu centenas de pessoas. A Câmara
                  Municipal doou um veículo. A Federação das APAEs do RN veio
                  até nós reconhecer o trabalho. Os títulos de utilidade pública
                  municipal e estadual vieram logo em seguida.
                </p>
                <p className="text-base leading-6 text-gray-600">
                  Hoje, em 2026, atendemos mais de 50 pessoas e seguimos
                  crescendo, sempre com a comunidade como maior parceira.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-warm-muted w-full"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site">
            <h2
              className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl"
              style={{ marginBottom: "60px" }}
            >
              Nossa Estrutura
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {estrutura.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                  style={{ borderRadius: "16px", padding: "24px" }}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-sm font-semibold text-gray-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="relative mt-12 overflow-hidden"
              style={{ height: "320px", borderRadius: "20px",  marginTop: "48px" }}
            >
              <Image
                src="/sobre-estrutura.png"
                alt="Estrutura da APAE São Rafael"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section
          className="bg-warm w-full"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site">
            <h2
              className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl"
              style={{ marginBottom: "60px" }}
            >
              Como Funcionamos
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {servicos.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                  style={{ borderRadius: "16px", padding: "24px" }}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-sm font-semibold text-gray-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
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
          <div className="container-site">
            <h2
              className="text-center text-2xl font-extrabold text-white sm:text-3xl"
              style={{ marginBottom: "60px" }}
            >
              Horários e Contato
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {[
                {
                  icon: "🕐",
                  title: "Horário",
                  content: "Segunda a Sexta-feira\ndas 08h às 15h",
                },
                {
                  icon: "📍",
                  title: "Endereço",
                  content:
                    "Rua José Bezerra de Araújo, nº 200\nCentro – São Rafael/RN\nCEP 59.518-000",
                },
                {
                  icon: "📞",
                  title: "Contato",
                  content: "(84) 9 9612-4672\nCNPJ: 52.662.073/0001-42",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="text-center"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "20px",
                    padding: "40px",
                  }}
                >
                  <div className="mb-4 text-4xl">{item.icon}</div>
                  <h3 className="mb-3 text-lg font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-7 text-white/80"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="mt-12 flex justify-center"
              style={{ paddingTop: "40px" }}
            >
              <Link href="/contato" className="btn btn-outline-white btn-md">
                Entre em contato
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
