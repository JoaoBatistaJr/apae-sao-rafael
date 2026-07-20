import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pilares = [
  {
    icon: "📖",
    title: "Atendimento Educacional Especializado (AEE)",
    desc: "Aulas adaptadas às necessidades de cada aluno, estimulando aprendizagem e desenvolvendo habilidades cognitivas e sociais.",
  },
  {
    icon: "📝",
    title: "Plano de Ensino Individualizado",
    desc: "Cada aluno tem um plano pedagógico próprio, construído junto à equipe multiprofissional e à família.",
  },
  {
    icon: "🎨",
    title: "Oficinas Pedagógicas",
    desc: "Atividades de arte, música e artesanato que estimulam a criatividade e reforçam o aprendizado de forma lúdica.",
  },
  {
    icon: "🧩",
    title: "Estímulo à Autonomia",
    desc: "Atividades voltadas para o desenvolvimento de habilidades práticas do dia a dia, ampliando a independência dos alunos.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Parceria com as Famílias",
    desc: "Acompanhamento próximo aos responsáveis, com orientações e trocas constantes sobre o desenvolvimento de cada aluno.",
  },
  {
    icon: "🏫",
    title: "Integração com a Rede Regular",
    desc: "Apoio à inclusão escolar, orientando escolas regulares sobre adaptações necessárias para receber os alunos atendidos.",
  },
];

export default function EducacaoEspecializadaPage() {
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
            Educação Especializada
          </h1>
          <p
            className="mx-auto mt-4 text-base text-white/80"
            style={{ maxWidth: "520px" }}
          >
            Aprendizagem adaptada para o desenvolvimento pleno de cada aluno.
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
              src="/educacao-especializada.png"
              alt="Educação Especializada APAE São Rafael"
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
                Um ensino pensado para cada aluno
              </h2>
              <p className="text-base leading-6 text-gray-600" style={{marginBottom: "12px"}}>
                A APAE São Rafael oferece Atendimento Educacional Especializado
                (AEE) para crianças, jovens e adultos com deficiência
                intelectual e múltipla, com aulas e atividades pedagógicas
                adaptadas ao ritmo e ao potencial de cada aluno.
              </p>
              <p className="mt-5 text-base leading-6 text-gray-600" style={{marginBottom: "12px"}}>
                Nossa equipe pedagógica trabalha de forma integrada com as áreas
                de saúde e assistência social, garantindo que cada plano de
                ensino considere as particularidades de desenvolvimento,
                comunicação e comportamento de cada pessoa atendida.
              </p>
              <p className="mt-5 text-base leading-6 text-gray-600" style={{marginBottom: "12px"}}>
                Mais do que ensinar conteúdos, a educação especializada da APAE
                busca desenvolver autonomia, autoestima e habilidades sociais,
                preparando os alunos para uma vida mais independente e
                participativa na comunidade.
              </p>
            </div>
          </div>
        </section>

        {/* Pilares */}
        <section
          className="bg-warm-muted w-full"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site">
            <h2
              className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl"
              style={{ marginBottom: "60px" }}
            >
              Como Trabalhamos a Educação Especializada
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pilares.map((s) => (
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
                  src="/educacao-especializada.png"
                  alt="Sala de aula especializada na APAE São Rafael"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2
                  className="text-2xl font-extrabold text-gray-900 sm:text-3xl"
                  style={{ marginBottom: "24px" }}
                >
                  Aprendizagem no ritmo de cada aluno
                </h2>
                <p className="text-base leading-6 text-gray-600" style={{marginBottom: "12px"}}>
                  Cada aluno é acompanhado individualmente, com estratégias
                  pedagógicas adaptadas às suas necessidades específicas de
                  aprendizagem, comunicação e comportamento.
                </p>
                <p className="mt-4 text-base leading-6 text-gray-600">
                  A integração entre educação, saúde e assistência social
                  garante um acompanhamento completo, sempre com o objetivo de
                  ampliar a autonomia e a qualidade de vida dos nossos alunos.
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
              Quer conhecer nosso trabalho educacional?
            </h2>
            <p
              className="mx-auto text-base text-white/80"
              style={{ maxWidth: "500px", marginBottom: "40px" }}
            >
              Entre em contato com a APAE São Rafael e saiba como matricular ou
              acompanhar um aluno.
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
