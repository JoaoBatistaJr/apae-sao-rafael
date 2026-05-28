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
    desc: "Respeito, dignidade, empatia, acolhimento, transparência, compromisso social e humanização em todos os atendimentos.",
  },
];

const estrutura = [
  { icon: "🏠", label: "Salas de atendimento individual" },
  { icon: "📚", label: "Sala de pedagogia e atividades educativas" },
  { icon: "🏃", label: "Sala de fisioterapia equipada" },
  { icon: "🗣️", label: "Sala de fonoaudiologia" },
  { icon: "🎨", label: "Espaço para oficinas socioeducativas" },
  { icon: "🌳", label: "Área externa para convivência e lazer" },
  { icon: "♿", label: "Recepção e banheiros acessíveis" },
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
      {/* Header sólido */}
      <div className="w-full bg-[#0F5A43]">
        <TopBar />
        <Header />
      </div>
      {/* Título da página */}
      <div className="container-site flex flex-col items-center py-12 text-center" style={{paddingBlock: '60px'}}>
        <h1 className="text-3xl font-extrabold text-black sm:text-4xl lg:text-5xl">
          Sobre a APAE São Rafael
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-black/80">
          Conheça nossa história, nossa equipe e o trabalho que transforma vidas
          na nossa comunidade.
        </p>
      </div>

      <main className="flex-1 bg-warm">
        {/* Imagem principal */}
        <div className="container-site" >
          <div
            className="relative w-full overflow-hidden "
            style={{ height: "400px", borderRadius: "20px" }}
          >
            <Image
              src="/sobre-hero.png"
              alt="Equipe APAE São Rafael"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Quem Somos */}
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
                <p className="text-base leading-8 text-gray-600">
                  A APAE São Rafael é uma instituição sem fins lucrativos
                  dedicada à promoção da inclusão, autonomia e qualidade de vida
                  de pessoas com deficiência intelectual, múltipla e transtorno
                  do espectro autista.
                </p>
                <p className="mt-4 text-base leading-8 text-gray-600">
                  Atuamos com carinho, compromisso e responsabilidade social,
                  oferecendo atendimento especializado a crianças, adolescentes
                  e adultos do nosso município e região.
                </p>
                <p className="mt-4 text-base leading-8 text-gray-600">
                  Somos uma entidade que acredita no potencial de todos e
                  trabalhamos diariamente para construir uma comunidade mais
                  inclusiva, justa e acolhedora.
                </p>
              </div>
              <div
                className="relative overflow-hidden"
                style={{ height: "340px", borderRadius: "10px" }}
              >
                <Image
                  src="/sobre-quem-somos.png"
                  alt="APAE São Rafael"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Missão Visão Valores */}
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
                  <h3 className="mb-3 text-xl font-extrabold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* História */}
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
                <p className="text-base leading-8 text-gray-600">
                  Fundada por um grupo de familiares, profissionais da saúde e
                  membros da comunidade, a APAE São Rafael nasceu da necessidade
                  de oferecer atendimento especializado às pessoas com
                  deficiência da nossa cidade.
                </p>
                <p className="text-base leading-8 text-gray-600">
                  O início foi simples: uma pequena sala cedida por voluntários,
                  poucos recursos e muita vontade de fazer a diferença. Com o
                  apoio da população e o empenho dos voluntários, a instituição
                  cresceu e ampliou sua capacidade de atendimento.
                </p>
                <p className="text-base leading-8 text-gray-600">
                  Hoje somos parte fundamental da rede de apoio do município,
                  atendendo dezenas de famílias todos os meses e mantendo viva
                  nossa missão de promover inclusão e dignidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Estrutura */}
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
              style={{ height: "320px", borderRadius: "20px"}}
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

        {/* Como Funcionamos */}
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
            <p
              className="mx-auto mt-8 text-center text-sm leading-7 text-gray-500"
              style={{ maxWidth: "600px" }}
            >
              A instituição atende gratuitamente e mantém suas atividades por
              meio de convênios, doações, parcerias e eventos solidários.
            </p>
          </div>
        </section>

        {/* Horários e Contato */}
        <section
          className="w-full"
          style={{
            background: "#0F5A43",
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
                    "Rua José Bezerra de Araújo,\nnº 200, São Rafael – RN",
                },
                {
                  icon: "📞",
                  title: "Contato",
                  content: "(84) 9 9999-9999\napaesaorafael@email.com",
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
            <div className="mt-12 flex justify-center">
              <Link
                href="/contato"
                className="btn-radius bg-white font-bold text-green-800 transition hover:bg-green-50"
                style={{
                  display: "inline-block",
                  padding: "14px 36px",
                  fontSize: "15px",
                }}
              >
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
