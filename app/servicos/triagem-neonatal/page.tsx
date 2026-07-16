import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const etapas = [
  {
    icon: "🩸",
    title: "Coleta do exame",
    desc: "Realizada preferencialmente entre o 3º e o 5º dia de vida do bebê, com uma pequena amostra de sangue colhida no calcanhar.",
  },
  {
    icon: "🔬",
    title: "Análise laboratorial",
    desc: "A amostra é encaminhada para triagem de diversas doenças metabólicas, genéticas e endocrinológicas.",
  },
  {
    icon: "📋",
    title: "Orientação às famílias",
    desc: "A equipe da APAE orienta os responsáveis sobre a importância do exame e como agendar a coleta.",
  },
  {
    icon: "🤝",
    title: "Encaminhamento e acompanhamento",
    desc: "Em caso de alteração no resultado, a família é encaminhada para diagnóstico e acompanhamento especializado.",
  },
  {
    icon: "⏱️",
    title: "Diagnóstico precoce",
    desc: "Identificar condições logo nos primeiros dias de vida amplia as chances de tratamento e desenvolvimento adequado.",
  },
  {
    icon: "❤️",
    title: "Cuidado desde o início",
    desc: "A triagem neonatal é o primeiro passo de um cuidado contínuo, que a APAE oferece durante toda a infância e desenvolvimento.",
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
            Triagem Neonatal
          </h1>
          <p
            className="mx-auto mt-4 text-base text-white/80"
            style={{ maxWidth: "520px" }}
          >
            Diagnóstico precoce que faz a diferença nos primeiros dias de vida.
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
              src="/triagem-neonatal-hero.png"
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
                Exame do Pezinho: o primeiro passo do cuidado
              </h2>
              <p className="text-base leading-8 text-gray-600">
                A APAE São Rafael realiza a orientação e o encaminhamento para o
                Exame do Pezinho, um teste simples e essencial que permite
                identificar precocemente diversas doenças metabólicas, genéticas
                e endocrinológicas ainda nos primeiros dias de vida do bebê.
              </p>
              <p className="mt-5 text-base leading-8 text-gray-600">
                Quanto mais cedo uma condição é identificada, maiores são as
                chances de iniciar o tratamento adequado e reduzir impactos no
                desenvolvimento da criança. Por isso, a triagem neonatal é
                considerada um dos exames mais importantes da saúde infantil.
              </p>
              <p className="mt-5 text-base leading-8 text-gray-600">
                Nossa equipe orienta as famílias sobre a importância do exame,
                auxilia no agendamento da coleta e, quando necessário, encaminha
                para acompanhamento especializado — garantindo que nenhuma
                criança fique sem o cuidado que precisa desde o início da vida.
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
              Como Funciona a Triagem Neonatal
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {etapas.map((s) => (
                <div
                  key={s.title}
                  className="border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                  style={{ borderRadius: "20px", padding: "32px" }}
                >
                  <div className="mb-4 text-4xl">{s.icon}</div>
                  <h3 className="mb-3 text-lg font-extrabold text-gray-900">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-7 text-gray-500">{s.desc}</p>
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
                  src="/triagem-neonatal-atendimento.png"
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
                  Orientação completa para as famílias
                </h2>
                <p className="text-base leading-8 text-gray-600">
                  Sabemos que a rotina dos primeiros dias com um recém-nascido é
                  intensa. Por isso, nossa equipe acompanha de perto cada
                  família, esclarecendo dúvidas e facilitando o acesso ao exame
                  no momento certo.
                </p>
                <p className="mt-4 text-base leading-8 text-gray-600">
                  Caso o resultado indique alguma alteração, a família não fica
                  sozinha: encaminhamos para diagnóstico e damos continuidade ao
                  acompanhamento junto às demais equipes especializadas da APAE.
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
              Quer saber mais sobre a Triagem Neonatal?
            </h2>
            <p
              className="mx-auto text-base text-white/80"
              style={{ maxWidth: "500px", marginBottom: "40px" }}
            >
              Entre em contato com a APAE São Rafael e tire suas dúvidas sobre o
              Exame do Pezinho.
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
