import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Depoimento = {
  nome: string;
  descricao: string; // ex: "35 anos, mãe de uma criança atendida pela APAE"
  texto: string;
  estrelas: number; // 1 a 5
  videoUrl?: string; // opcional: quando existir, o card pode exibir player no lugar do texto
};

// Conteúdo placeholder — substituir por relatos reais aprovados pela direção da APAE.
const depoimentos: Depoimento[] = [
  {
    nome: "Maria Silva",
    descricao: "35 anos, mãe de uma criança atendida pela APAE",
    texto:
      "A APAE foi fundamental no desenvolvimento do meu filho. Aqui, ele recebeu não só atendimento especializado, mas também muito carinho e acolhimento. Somos eternamente gratos!",
    estrelas: 5,
  },
  {
    nome: "José Antônio",
    descricao: "55 anos, pai de uma criança atendida pela APAE",
    texto:
      "Participar das atividades da APAE transformou a nossa vida. A dedicação dos profissionais e o apoio da comunidade fazem toda a diferença para quem precisa de inclusão e respeito.",
    estrelas: 5,
  },
  {
    nome: "Ana Paula",
    descricao: "42 anos, mãe de uma adolescente atendida pela APAE",
    texto:
      "Cada avanço da minha filha é comemorado por toda a equipe como se fosse deles também. Esse cuidado genuíno faz toda a diferença no nosso dia a dia.",
    estrelas: 5,
  },
  {
    nome: "Carlos Eduardo",
    descricao: "48 anos, voluntário da instituição",
    texto:
      "Ser voluntário na APAE me ensinou mais do que eu poderia imaginar. Ver o progresso de cada pessoa atendida é uma das experiências mais gratificantes que já tive.",
    estrelas: 5,
  },
  {
    nome: "Francisca Oliveira",
    descricao: "60 anos, avó de uma criança atendida pela APAE",
    texto:
      "Minha neta encontrou na APAE um espaço de acolhimento que não imaginávamos possível. A equipe trata cada família com muito respeito e dedicação.",
    estrelas: 5,
  },
  {
    nome: "Pedro Henrique",
    descricao: "38 anos, pai de uma criança atendida pela APAE",
    texto:
      "O acompanhamento da assistência social nos ajudou em um momento muito difícil. Hoje enxergamos um futuro muito mais possível para o nosso filho.",
    estrelas: 5,
  },
];

const avatarCores = [
  "#1c6b42",
  "#003F8A",
  "#7a1633",
  "#6c3d8a",
  "#145e75",
  "#7a5a00",
];

function iniciais(nome: string) {
  return nome
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function DepoimentosPage() {
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
            Depoimentos que Inspiram
          </h1>
          <p
            className="mx-auto mt-4 text-base text-white/80"
            style={{ maxWidth: "560px" }}
          >
            Histórias reais de famílias e pessoas atendidas pela APAE São
            Rafael, transformadas pelo trabalho da nossa equipe.
          </p>
        </div>
      </div>

      <main className="flex-1 bg-warm">
        <section
          className="bg-warm w-full"
          style={{ paddingTop: "80px", paddingBottom: "60px" }}
        >
          <div className="container-site">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {depoimentos.map((dep, i) => (
                <div
                  key={dep.nome}
                  className="flex flex-col border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                  style={{ borderRadius: "24px", padding: "32px" }}
                >
                  <span
                    className="text-4xl text-gray-300"
                    style={{ fontFamily: "Georgia, serif", lineHeight: 1 }}
                    aria-hidden
                  >
                    &ldquo;
                  </span>

                  <div style={{ marginTop: "8px", marginBottom: "16px" }}>
                    {Array.from({ length: dep.estrelas }).map((_, s) => (
                      <span key={s} className="text-yellow-400 text-sm">
                        ★
                      </span>
                    ))}
                  </div>

                  <p
                    className="italic text-base leading-7 text-gray-700"
                    style={{ marginBottom: "24px", flex: 1 }}
                  >
                    &ldquo;{dep.texto}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center rounded-full font-bold text-white"
                      style={{
                        width: "44px",
                        height: "44px",
                        backgroundColor: avatarCores[i % avatarCores.length],
                        flexShrink: 0,
                      }}
                      aria-hidden
                    >
                      {iniciais(dep.nome)}
                    </div>
                    <div>
                      <p className="font-extrabold text-gray-900 text-sm">
                        {dep.nome}
                      </p>
                      <p className="text-sm text-gray-500">{dep.descricao}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - enviar depoimento */}
        <section
          className="w-full bg-[#003F8A]"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site flex flex-col items-center text-center">
            <h2
              className="text-2xl font-extrabold text-white sm:text-3xl"
              style={{ marginBottom: "20px" }}
            >
              A APAE também fez parte da sua história?
            </h2>
            <p
              className="mx-auto text-base text-white/80"
              style={{ maxWidth: "520px", marginBottom: "40px" }}
            >
              Queremos ouvir você. Compartilhe seu relato e ajude a inspirar
              outras famílias da nossa comunidade.
            </p>
            <Link
              href="https://wa.me/5584XXXXXXXXX?text=Ol%C3%A1!%20Gostaria%20de%20compartilhar%20meu%20depoimento%20sobre%20a%20APAE%20S%C3%A3o%20Rafael."
              target="_blank"
              className="btn btn-lg bg-white text-[#003F8A] hover:bg-white/90"
            >
              Enviar meu depoimento
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
