import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

type Depoimento = {
  id: string;
  nome: string;
  descricao: string;
  texto: string[]; // cada item é um parágrafo
  fotoUrl: string; // se o arquivo ainda não existir em /public, cai no avatar com iniciais
};

const depoimentos: Depoimento[] = [
  {
    id: "miriam-peixoto",
    nome: "Miriam Peixoto",
    descricao: "mãe de uma criança atendida pela APAE",
    texto: [
      "Para nós, a APAE é muito mais do que uma instituição; é um verdadeiro porto seguro e um lugar onde o desenvolvimento do meu filho acontece com muito amor, respeito e dedicação.",
      "Ver a alegria dele todas as vezes que chega o dia e a hora de ir para a APAE não tem preço. Ele ama estar lá, pede sempre para ir e se envolve de coração em cada atividade. Esse carinho e esse entusiasmo mostram, na prática, o quanto ele se sente acolhido, amado e feliz naquele espaço.",
      "Como mãe, vejo claramente o quanto a APAE contribui para o desenvolvimento, para a autonomia e para o crescimento dele no dia a dia. A evolução é contínua e nos enche de orgulho. Sou profundamente grata a toda a equipe da APAE de São Rafael pelo trabalho maravilhoso, pelo respeito à neurodiversidade e por transformarem a vida da nossa família!",
    ],
    fotoUrl: "/miriam-peixoto.jpeg",
  },
  {
    id: "depoimento-2",
    nome: "[NOME-2]",
    descricao: "mãe de um filho atendido pela APAE",
    texto: [
      "A APAE é uma associação de pais e amigos dos excepcionais. Ela representa, na minha vida e na de muitos pais, uma rede essencial de acolhimento, defesa de direitos e inclusão social para pessoas com deficiência intelectual e múltipla.",
      "Na minha vida, ela trouxe orientação e o apoio de vários profissionais, me ajudando a aprender a conhecer e a conviver com outras pessoas. Na vida do meu filho, funciona como um porto seguro que transforma potencial em conquistas reais — terapias, treino para atividades básicas do dia a dia, comunicação aprimorada, novas habilidades e laços de amizade.",
      "A APAE tem como objetivo promover a melhoria da qualidade de vida dos pais e dos nossos filhos.",
    ],
    fotoUrl: "/nome-2.jpeg",
  },
  {
    id: "francinilda",
    nome: "Francinilda",
    descricao: "mãe de dois filhos atendidos pela APAE",
    texto: [
      "A APAE representa amor, cuidado, acolhimento e esperança. Como mãe de dois filhos assistidos por essa instituição, sou profundamente grata por todo carinho, cuidado e dedicação que recebemos.",
      "Cada conquista dos meus filhos também é da APAE, que acredita no potencial deles e caminha conosco passo a passo. Para nós, a APAE é muito mais que uma instituição, é um lugar que transforma vidas e renova a esperança todos os dias. Grata por todo apoio.",
    ],
    fotoUrl: "/francinilda.jpeg",
  },
];

const avatarCores = ["#1c6b42", "#003F8A", "#7a1633"];

function iniciais(nome: string) {
  return nome
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}



function existeArquivo(caminhoPublico: string) {
  const caminhoAbsoluto = path.join(process.cwd(), "public", caminhoPublico);
  return fs.existsSync(caminhoAbsoluto);
}

function Foto({ dep, cor }: { dep: Depoimento; cor: string }) {
  const temFoto = existeArquivo(dep.fotoUrl);

  return (
    <div
      className="relative w-full overflow-hidden bg-gray-100"
      style={{ borderRadius: "24px", aspectRatio: "4 / 5" }}
    >
      {temFoto ? (
        <Image
          src={dep.fotoUrl}
          alt={`Foto de ${dep.nome}`}
          fill
          sizes="(max-width: 1024px) 100vw, 480px"
          className="object-cover"
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center text-5xl font-bold text-white"
          style={{ backgroundColor: cor }}
          aria-hidden
        >
          {iniciais(dep.nome)}
        </div>
      )}
    </div>
  );
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
          style={{ paddingTop: "80px", paddingBottom: "40px" }}
        >
          <div className="container-site flex flex-col" style={{ gap: "80px" }}>
            {depoimentos.map((dep, i) => {
              const invertido = i % 2 === 1;
              const cor = avatarCores[i % avatarCores.length];

              return (
                <ScrollReveal key={dep.id}>
                  <div
                    className={`flex flex-col items-center gap-10 lg:items-stretch ${
                      invertido ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
                  >
                    <div
                      className="w-full lg:w-2/5"
                      style={{ maxWidth: "480px" }}
                    >
                      <Foto dep={dep} cor={cor} />
                      <div style={{ marginTop: "8px", marginLeft: "20px" }}>
                        <p className="font-extrabold text-gray-900">
                          {dep.nome}
                        </p>
                        <p className="text-sm text-gray-500">{dep.descricao}</p>
                      </div>
                    </div>

                    <div className="flex w-full flex-col justify-center lg:w-3/5">
                      <span
                        className="text-5xl leading-0 text-gray-300"
                        style={{ fontFamily: "Georgia, serif" }}
                        aria-hidden
                      >
                        &ldquo;
                      </span>
                      <div
                        className="flex flex-col gap-4"
                        style={{ marginTop: "8px" }}
                      >
                        {dep.texto.map((paragrafo, p) => (
                          <p
                            key={p}
                            className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-8"
                          >
                            {paragrafo}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        <section
          className="w-full bg-[#003F8A]"
          style={{
            paddingTop: "80px",
            paddingBottom: "80px",
            marginTop: "40px",
          }}
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
