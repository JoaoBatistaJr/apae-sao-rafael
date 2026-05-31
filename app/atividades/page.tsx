import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const atividades = [
  {
    icon: "📖",
    title: "Atendimento Educacional Especializado (AEE)",
    desc: "Aulas adaptadas que estimulam a aprendizagem e desenvolvem habilidades, respeitando as necessidades de cada aluno.",
  },
  {
    icon: "🏃",
    title: "Terapias de Reabilitação",
    desc: "Sessões de fisioterapia, fonoaudiologia e terapia ocupacional para promover autonomia e desenvolvimento.",
  },
  {
    icon: "🎨",
    title: "Oficinas Pedagógicas e Artísticas",
    desc: "Atividades como pintura, artesanato e música que incentivam a criatividade e a expressão.",
  },
  {
    icon: "⚽",
    title: "Atividades Esportivas",
    desc: "Esportes e recreação adaptados, promovendo saúde, socialização e bem-estar.",
  },
  {
    icon: "🧠",
    title: "Acompanhamento Psicossocial",
    desc: "Apoio psicológico e social para fortalecer vínculos familiares e orientar desafios cotidianos.",
  },
  {
    icon: "🤝",
    title: "Projetos de Inclusão Social",
    desc: "Participação em eventos e campanhas para garantir direitos e promover a inclusão na sociedade.",
  },
];

const vozes = [
  {
    quote:
      "Desde que a Júlia começou a frequentar as oficinas artísticas, percebemos um avanço enorme na sua comunicação e autoestima. A APAE acolheu minha filha com tanto carinho que nos sentimos parte de uma grande família.",
    name: "Maria Antônia",
    role: "mãe da Júlia de 8 anos",
    initials: "MA",
  },
  {
    quote:
      "As atividades esportivas e terapias fizeram toda a diferença no desenvolvimento do Lucas. Ele está mais confiante, ativo e sociável. A dedicação dos profissionais é algo que emociona.",
    name: "Carlos Eduardo",
    role: "pai do Lucas de 12 anos",
    initials: "CE",
  },
  {
    quote:
      "Cada aula é uma troca. Levo minha experiência e recebo em dobro com os sorrisos e aprendizados. A APAE transforma vidas — inclusive a minha.",
    name: "Sueli Fernandes",
    role: "voluntária nas oficinas",
    initials: "SF",
  },
];

export default function AtividadesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="w-full bg-[#003F8A]">
        <TopBar />
        <Header />
        <div
          className="container-site flex flex-col items-center text-center"
          style={{ paddingBlock: "20px" }}
        >
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Nossas Atividades
          </h1>
          <p
            className="mt-3 text-sm text-white/80 sm:text-base"
            style={{ maxWidth: "560px" }}
          >
            Atividades pensadas para promover autonomia, inclusão e qualidade de
            vida.
          </p>
        </div>
      </div>

      <main className="flex-1">
        <section className="bg-warm w-full" style={{ paddingBlock: "80px" }}>
          <div className="container-site">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="text-base leading-8 text-gray-600">
                  Na <strong>APAE de São Rafael</strong>, desenvolvemos diversas
                  atividades que visam promover a autonomia, a qualidade de vida
                  e a inclusão social das pessoas com deficiência intelectual e
                  múltipla. Todas as ações são planejadas e executadas com
                  carinho, responsabilidade e respeito às particularidades de
                  cada indivíduo.
                </p>
                <p className="mt-4 text-base leading-8 text-gray-600">
                  As atividades são realizadas em parceria com famílias,
                  profissionais especializados e voluntários, garantindo um
                  ambiente acolhedor e estimulante para o desenvolvimento
                  integral dos nossos usuários.
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

        <section
          className="bg-warm-muted w-full"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site">
            <h2
              className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl"
              style={{ marginBottom: "60px" }}
            >
              Principais Atividades
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {atividades.map((item) => (
                <div
                  key={item.title}
                  className="border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                  style={{ borderRadius: "20px", padding: "32px" }}
                >
                  <div className="mb-4 text-4xl">{item.icon}</div>
                  <h3 className="mb-3 text-base font-extrabold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-gray-500">{item.desc}</p>
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
              className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl"
              style={{ marginBottom: "60px" }}
            >
              Vozes da nossa comunidade
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {vozes.map((v) => (
                <div
                  key={v.name}
                  className="border border-gray-200 bg-white shadow-sm"
                  style={{ borderRadius: "20px", padding: "32px" }}
                >
                  <div className="mb-4 text-yellow-400">★★★★★</div>
                  <p className="flex-1 text-sm italic leading-7 text-gray-600">
                    &ldquo;{v.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div
                      className="flex shrink-0 items-center justify-center bg-green-700 text-sm font-bold text-white"
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "100%",
                      }}
                    >
                      {v.initials}
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-gray-900">
                        {v.name}
                      </p>
                      <p className="text-xs text-gray-500">{v.role}</p>
                    </div>
                  </div>
                </div>
              ))}
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
              Venha nos conhecer!
            </h2>
            <div
              className="grid grid-cols-1 overflow-hidden lg:grid-cols-2"
              style={{ borderRadius: "24px", border: "1px solid #e5e7eb" }}
            >
              <div className="bg-white" style={{ padding: "56px 48px" }}>
                <h3
                  className="text-xl font-extrabold text-gray-900 sm:text-2xl"
                  style={{ marginBottom: "20px" }}
                >
                  Conheça de perto nossa missão e faça parte dessa
                  transformação.
                </h3>
                <p
                  className="text-base leading-8 text-gray-500"
                  style={{ marginBottom: "12px" }}
                >
                  Agende uma visita e conheça de perto nosso trabalho e as
                  atividades que realizamos com carinho.
                </p>
                <p
                  className="text-base leading-8 text-gray-500"
                  style={{ marginBottom: "32px" }}
                >
                  Sua presença é essencial para fortalecer nossa missão e
                  transformar vidas. Juntos, construímos uma sociedade mais
                  inclusiva e acolhedora.
                </p>
                <Link href="/contato" className="btn btn-primary btn-md">
                  Entre em contato e participe!
                </Link>
              </div>
              <div className="relative" style={{ minHeight: "320px" }}>
                <Image
                  src="/atividades-cta.png"
                  alt="Venha nos conhecer"
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                  style={{
                    background: "rgba(123, 238, 167, 0.92)",
                    padding: "48px",
                  }}
                >
                  <h3
                    className="text-2xl font-extrabold text-green-900 sm:text-3xl"
                    style={{ marginBottom: "16px" }}
                  >
                    Venha nos conhecer!
                  </h3>
                  <p className="text-base font-semibold text-green-800">
                    Agende uma visita e conheça de perto nosso trabalho
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
