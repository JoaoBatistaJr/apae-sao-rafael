import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

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

const STEP = 150;

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
                <h2
                  className="text-2xl font-extrabold text-gray-900 sm:text-3xl fade-up"
                  style={{ marginBottom: "24px", animationDelay: "300ms" }}
                >
                  Compromisso com a Inclusão
                </h2>
                {[
                  "Na APAE de São Rafael, desenvolvemos diversas atividades que visam promover a autonomia, a qualidade de vida e a inclusão social das pessoas com deficiência intelectual e múltipla. Todas as ações são planejadas e executadas com carinho, responsabilidade e respeito às particularidades de cada indivíduo.",
                  "As atividades realizadas em parceria com famílias, profissionais especializados e voluntários, garantindo um ambiente acolhedor e estimulante para o desenvolvimento integral dos nossos usuários.",
                  "Somos uma entidade que acredita no potencial de todos e trabalhamos diariamente para contruir um comunidade mais inclusa, justa e acolhedora.",
                ].map((text, i) => (
                  <ScrollReveal key={i} delay={STEP * i}>
                    <p
                      className="mt-4 text-base leading-6 text-gray-700 fade-up"
                      style={{ paddingBottom: "10px", animationDelay: "450ms" }}
                    >
                      {text}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
              <div
                className="relative overflow-hidden fade-up"
                style={{
                  height: "340px",
                  borderRadius: "10px",
                  animationDelay: "450ms",
                }}
              >
                <Image
                  src="/apae-conscientização-do-autismo.png"
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
            <ScrollReveal delay={600}>
              <h2
                className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl"
                style={{ marginBottom: "60px" }}
              >
                Principais Atividades
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              {atividades.map((item, i) => (
                <ScrollReveal
                  key={item.title}
                  delay={STEP * i}
                  className="h-full"
                >
                  <div
                    className="h-full border border-gray-200 bg-white shadow-sm transition hover:shadow-md select-none"
                    style={{ borderRadius: "20px", padding: "32px" }}
                  >
                    <div className="mb-4 text-5xl">{item.icon}</div>
                    <h3
                      className="mb-3 text-base font-extrabold text-gray-900"
                      style={{ paddingBlock: "10px" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-base leading-5 text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-warm w-full"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site">
            <ScrollReveal delay={450}>
              <h2
                className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl"
                style={{ marginBottom: "40px" }}
              >
                Vozes da nossa comunidade
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 select-none items-stretch">
              {vozes.map((v, i) => (
                <ScrollReveal key={v.name} delay={STEP * i} className="h-full">
                  <div
                    className="flex h-full flex-col border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                    style={{ borderRadius: "20px", padding: "32px" }}
                  >
                    <div
                      className="mb-4 text-2xl text-yellow-300"
                      style={{ marginBottom: "16px" }}
                    >
                      ★★★★★
                    </div>
                    <p className="text-base italic leading-6 text-gray-600">
                      &ldquo;{v.quote}&rdquo;
                    </p>
                    <div
                      className="mt-auto flex items-center gap-3"
                      style={{ paddingTop: "40px" }}
                    >
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
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="bg-warm-muted w-full"
          style={{ paddingBlock: "80px" }}
        >
          <div className="container-site">
            <ScrollReveal>
              <h2
                className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl"
                style={{ marginBottom: "40px" }}
              >
                Venha nos conhecer!
              </h2>
            </ScrollReveal>
            <div
              className="grid grid-cols-1 lg:grid-cols-2 items-stretch"
              style={{
                borderRadius: "20px",
                border: "1px solid #e5e7eb",
                overflow: "hidden",
              }}
            >
              <ScrollReveal>
                <div
                  className="h-full bg-white"
                  style={{ padding: "56px 48px" }}
                >
                  <h3
                    className="text-xl font-extrabold text-gray-900 sm:text-2xl"
                    style={{ marginBottom: "20px" }}
                  >
                    Conheça de perto nossa missão e faça parte dessa
                    transformação.
                  </h3>
                  {[
                    "Agende uma visita e conheça de perto nosso trabalho e as atividades que realizamos com carinho.",
                    "Sua presença é essencial para fortalecer nossa missão e transformar vidas. Juntos, construímos uma sociedade mais inclusiva e acolhedora.",
                  ].map((text, i) => (
                    <ScrollReveal key={i} delay={STEP * i}>
                      <p
                        className="text-base leading-6 text-gray-600"
                        style={{ marginBottom: "12px" }}
                      >
                        {text}
                      </p>
                    </ScrollReveal>
                  ))}
                  <Link
                    href="/contato"
                    className="btn btn-primary btn-md"
                    style={{ marginTop: "12px" }}
                  >
                    Entre em contato e participe!
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={STEP}>
                <div
                  className="relative h-full overflow-hidden"
                  style={{ minHeight: "320px" }}
                >
                  <Image
                    src="/apae-conscientização-do-autismo.png"
                    alt="Venha nos conhecer"
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center"
                    style={{
                      background: "rgba(123, 238, 267, 0.75)",
                      padding: "48px",
                    }}
                  >
                    <h3
                      className="text-2xl font-extrabold text-blue-950 sm:text-3xl"
                      style={{ marginBottom: "16px" }}
                    >
                      Esperamos por você!
                    </h3>
                    <p className="text-base font-semibold text-blue-900">
                      Agende uma visita e conheça de perto nosso trabalho
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
