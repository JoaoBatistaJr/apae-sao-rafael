import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const servicos = [
  {
    icon: "🏃",
    title: "Fisioterapia",
    desc: "Atua na prevenção e tratamento de dificuldades motoras. Por meio de exercícios direcionados e estímulos sensoriais, melhora o equilíbrio, a coordenação, a mobilidade e a força muscular.",
  },
  {
    icon: "🗣️",
    title: "Fonoaudiologia",
    desc: "Auxilia no desenvolvimento da fala, da comunicação e da alimentação, tornando a comunicação mais eficiente e segura e fortalecendo vínculos familiares e sociais.",
  },
  {
    icon: "🧠",
    title: "Psicologia",
    desc: "Trabalha o bem-estar emocional, o comportamento e a adaptação social, com terapia individual, orientação familiar e atividades em grupo focadas em autonomia e qualidade de vida.",
  },
  {
    icon: "✋",
    title: "Terapia Ocupacional",
    desc: "Desenvolve habilidades para as atividades do dia a dia, promovendo maior independência e participação social dos atendidos.",
  },
  {
    icon: "🥗",
    title: "Nutrição",
    desc: "Acompanhamento nutricional individualizado para garantir uma alimentação adequada às necessidades de cada pessoa atendida.",
  },
  {
    icon: "👥",
    title: "Assistência Social",
    desc: "Apoio às famílias na orientação de direitos, acesso a benefícios e fortalecimento dos vínculos familiares e comunitários.",
  },
];

export default function AtendimentoSaudePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="w-full bg-[#003F8A]">
        <TopBar />
        <Header />
        <div
          className="container-site flex flex-col items-center text-center"
          style={{ paddingBlock: "48px" }}
        >
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Atendimento em Saúde
          </h1>
          <p
            className="mx-auto mt-4 text-base text-white/80"
            style={{ maxWidth: "520px" }}
          >
            O cuidado integral que a APAE oferece para promover autonomia e
            qualidade de vida.
          </p>
        </div>
      </div>

      <main className="flex-1 bg-warm">
        <div className="container-site" style={{ paddingTop: "60px" }}>
          <div
            className="relative w-full overflow-hidden"
            style={{ height: "400px", borderRadius: "20px" }}
          >
            <Image
              src="/atendimento-saude.png"
              alt="Apoio em Saúde APAE São Rafael"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* Intro */}
        <section
          className="bg-warm w-full"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site">
            <div className="mx-auto" style={{ maxWidth: "760px" }}>
              <h2
                className="text-2xl font-extrabold text-gray-900 sm:text-3xl"
                style={{ marginBottom: "32px" }}
              >
                O Cuidado Integral que a APAE Oferece
              </h2>
              <p className="text-base leading-6 text-gray-600" style={{marginBottom: "12px"}}>
                A promoção da saúde é uma parte essencial do trabalho
                desenvolvido pela APAE. Além do acolhimento educacional e
                social, a instituição oferece serviços especializados que
                contribuem diretamente para o desenvolvimento e a qualidade de
                vida das pessoas com deficiência intelectual ou múltipla.
              </p>
              <p className="mt-5 text-base leading-6 text-gray-600" style={{marginBottom: "12px"}}>
                Esse cuidado integral envolve equipes altamente capacitadas em
                diversas áreas terapêuticas, trabalhando de forma integrada e
                multiprofissional para garantir um tratamento mais completo —
                considerando todos os aspectos do desenvolvimento humano:
                físico, emocional, social e cognitivo.
              </p>
              <p className="mt-5 text-base leading-6 text-gray-600" style={{marginBottom: "12px"}}>
                O apoio em saúde oferecido pela APAE vai muito além do
                atendimento clínico. Ele representa cuidado, respeito e
                acolhimento às famílias, que encontram na instituição um espaço
                de confiança e suporte contínuo. É através desse trabalho que
                muitas pessoas conseguem conquistar avanços significativos,
                superar desafios e viver com mais autonomia e dignidade.
              </p>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section
          className="bg-warm-muted w-full"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site">
            <h2
              className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl"
              style={{ marginBottom: "60px" }}
            >
              Nossos Serviços de Saúde
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicos.map((s) => (
                <div
                  key={s.title}
                  className="border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                  style={{ borderRadius: "20px", padding: "32px" }}
                >
                  <div className="mb-4 text-4xl">{s.icon}</div>
                  <h3 className="mb-3 text-lg font-extrabold text-gray-900" style={{marginBottom: "8px"}}>
                    {s.title}
                  </h3>
                  <p className="text-base leading-6 text-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destaque */}
        <section
          className="bg-warm w-full"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div
                className="relative overflow-hidden"
                style={{ height: "340px", borderRadius: "20px" }}
              >
                <Image
                  src="/atendimento-saude.png"
                  alt="Atendimento APAE São Rafael"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2
                  className="text-2xl font-extrabold text-gray-900 sm:text-3xl"
                  style={{ marginBottom: "24px" }}
                >
                  Atendimento personalizado para cada pessoa
                </h2>
                <p className="text-base leading-6 text-gray-600" style={{marginBottom: "12px"}}>
                  Cada sessão é adaptada às necessidades específicas de cada
                  pessoa, respeitando seu ritmo e potencial. Nossa equipe
                  multiprofissional trabalha em conjunto com as famílias em
                  planos de atendimento individualizados.
                </p>
                <p className="mt-4 text-base leading-6 text-gray-600">
                  A integração entre as diferentes áreas garante um tratamento
                  mais completo e humanizado, sempre focado no desenvolvimento
                  integral e na qualidade de vida dos nossos atendidos.
                </p>
                <Link
                  href="/contato"
                  className="btn btn-primary btn-md"
                  style={{ marginTop: "32px" }}
                >
                  Agende uma visita
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="w-full bg-[#003F8A]"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site flex flex-col items-center text-center">
            <h2
              className="text-2xl font-extrabold text-white sm:text-3xl"
              style={{ marginBottom: "20px" }}
            >
              Precisa de atendimento?
            </h2>
            <p
              className="mx-auto text-base text-white/80"
              style={{ maxWidth: "500px", marginBottom: "40px" }}
            >
              Entre em contato com a APAE São Rafael e saiba como podemos ajudar
              você e sua família.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contato"
                className="btn btn-lg bg-white text-[#003F8A] hover:bg-white/90"
              >
                Entre em contato
              </Link>
              <Link href="/doacoes" className="btn btn-lg btn-outline-white">
                Apoie nossa causa
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
