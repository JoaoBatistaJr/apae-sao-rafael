import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const etapas = [
  {
    icon: "🤝",
    title: "Acolhimento",
    desc: "Recebemos cada família com respeito e escuta ativa, compreendendo suas necessidades e construindo um atendimento humanizado.",
  },
  {
    icon: "📄",
    title: "Orientação",
    desc: "Prestamos informações sobre direitos, benefícios sociais, programas públicos e serviços que podem auxiliar a família.",
  },
  {
    icon: "🏛️",
    title: "Encaminhamentos",
    desc: "Quando necessário, realizamos encaminhamentos para órgãos públicos e instituições parceiras da rede de proteção social.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Acompanhamento Familiar",
    desc: "Acompanhamos continuamente as famílias, fortalecendo vínculos e auxiliando na superação das dificuldades encontradas.",
  },
  {
    icon: "🌱",
    title: "Promoção da Inclusão",
    desc: "Desenvolvemos ações que incentivam a participação social, a autonomia e o exercício da cidadania das pessoas atendidas.",
  },
  {
    icon: "❤️",
    title: "Cuidado Integrado",
    desc: "Trabalhamos em conjunto com as áreas de saúde e educação para oferecer um atendimento completo e acolhedor.",
  },
];

export default function TriagemNeonatalPage() {
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
            Assistência Social
          </h1>
          <p
            className="mx-auto mt-4 text-base text-white/80"
            style={{ maxWidth: "520px" }}
          >
            Acolhimento, orientação e apoio às famílias para fortalecer a
            inclusão.
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
              src="/banner-social.png"
              alt="Triagem Neonatal APAE São Rafael"
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
                Cuidando das famílias em cada etapa.
              </h2>
              <p
                className="text-base leading-6 text-gray-600"
                style={{ marginBottom: "12px" }}
              >
                A Assistência Social da APAE São Rafael tem como objetivo
                acolher, orientar e acompanhar as pessoas atendidas e suas
                famílias, oferecendo suporte para que tenham acesso aos direitos
                sociais, benefícios e serviços disponíveis.
              </p>
              <p
                className="mt-5 text-base leading-6 text-gray-600"
                style={{ marginBottom: "12px" }}
              >
                Nosso trabalho vai além do atendimento individual. Buscamos
                compreender a realidade de cada família, identificando
                necessidades e construindo estratégias que favoreçam a inclusão,
                a autonomia e a melhoria da qualidade de vida.
              </p>
              <p
                className="mt-5 text-base leading-6 text-gray-600"
                style={{ marginBottom: "12px" }}
              >
                Por meio de um atendimento humanizado e integrado às demais
                áreas da instituição, fortalecemos vínculos, promovemos
                cidadania e contribuímos para que cada pessoa receba o apoio
                necessário em todas as etapas do seu desenvolvimento.
              </p>
            </div>
          </div>
        </section>

        {/* Etapas */}
        <section
          className="bg-warm-muted w-full"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site">
            <h2
              className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl"
              style={{ marginBottom: "60px" }}
            >
              Como Funciona a Assistência Social
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {etapas.map((s) => (
                <div
                  key={s.title}
                  className="border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                  style={{ borderRadius: "20px", padding: "32px" }}
                >
                  <div className="mb-4 text-4xl">{s.icon}</div>
                  <h3
                    className="mb-3 text-lg font-extrabold text-gray-900"
                    style={{ marginBottom: "8px" }}
                  >
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
                  src="/banner-social.png"
                  alt="Orientação sobre triagem neonatal na APAE São Rafael"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2
                  className="text-2xl font-extrabold text-gray-900 sm:text-3xl"
                  style={{ marginBottom: "24px" }}
                >
                  Apoio que transforma realidades
                </h2>
                <p
                  className="text-base leading-6 text-gray-600"
                  style={{ marginBottom: "12px" }}
                >
                  Cada família possui uma história, desafios e necessidades
                  diferentes. Por isso, nosso atendimento é realizado de forma
                  individualizada, buscando orientar, acolher e encontrar
                  soluções que contribuam para o bem-estar de todos.
                </p>
                <p className="mt-4 text-base leading-6 text-gray-600">
                  A Assistência Social atua como um elo entre a instituição, a
                  família e a rede de serviços públicos, garantindo que as
                  pessoas atendidas tenham acesso aos seus direitos e recebam o
                  suporte necessário para seu desenvolvimento e inclusão na
                  sociedade.
                </p>
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
              Precisa de orientação ou deseja conhecer nossos serviços?
            </h2>
            <p
              className="mx-auto text-base text-white/80"
              style={{ maxWidth: "500px", marginBottom: "40px" }}
            >
              Nossa equipe está pronta para acolher você e sua família,
              esclarecer dúvidas e apresentar as formas de atendimento
              oferecidas pela APAE São Rafael.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contato"
                className="btn btn-lg bg-white text-[#003F8A] hover:bg-white/90"
              >
                Entre em contato
              </Link>
              <Link href="/doacoes" className="btn btn-lg btn-outline-white">
                Conheça nossos atendimentos
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
