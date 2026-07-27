import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Parceiro = {
  nome: string;
  categoria: "Poder Público" | "Instituição" | "Empresa" | "Terceiro Setor";
  descricao: string;
  sigla: string; // usada no placeholder de logo até termos os arquivos reais
};

const parceiros: Parceiro[] = [
  {
    nome: "Prefeitura Municipal de São Rafael",
    categoria: "Poder Público",
    descricao:
      "Parceria institucional para viabilizar estrutura, transporte e apoio às atividades da APAE.",
    sigla: "PM",
  },
  {
    nome: "Secretaria de Saúde",
    categoria: "Poder Público",
    descricao:
      "Suporte técnico e articulação em saúde, incluindo ações de triagem e acompanhamento clínico.",
    sigla: "SS",
  },
  {
    nome: "Rotary Club",
    categoria: "Terceiro Setor",
    descricao:
      "Apoio em campanhas, doações e projetos sociais voltados à comunidade atendida.",
    sigla: "RC",
  },
  {
    nome: "Lions Club",
    categoria: "Terceiro Setor",
    descricao:
      "Parceria em ações beneficentes e mobilização de recursos para a instituição.",
    sigla: "LC",
  },
  {
    nome: "Banco do Brasil",
    categoria: "Empresa",
    descricao:
      "Apoio institucional e incentivo a projetos sociais através de programas corporativos.",
    sigla: "BB",
  },
  {
    nome: "Sicredi",
    categoria: "Empresa",
    descricao:
      "Cooperativa parceira em iniciativas de responsabilidade social e apoio financeiro.",
    sigla: "SI",
  },
  {
    nome: "Sebrae",
    categoria: "Instituição",
    descricao:
      "Capacitação e apoio técnico em gestão para fortalecer a sustentabilidade da instituição.",
    sigla: "SE",
  },
  {
    nome: "SESI",
    categoria: "Instituição",
    descricao:
      "Parceria em ações de saúde, educação e qualidade de vida para a comunidade.",
    sigla: "SI",
  },
];

const categoriaCores: Record<Parceiro["categoria"], string> = {
  "Poder Público": "bg-blue-50 text-[#003F8A]",
  Instituição: "bg-amber-50 text-amber-700",
  Empresa: "bg-emerald-50 text-emerald-700",
  "Terceiro Setor": "bg-purple-50 text-purple-700",
};

export default function ParceirosPage() {
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
            Nossos Parceiros
          </h1>
          <p
            className="mx-auto mt-4 text-base text-white/80"
            style={{ maxWidth: "560px" }}
          >
            A APAE São Rafael só existe graças à união de instituições, empresas
            e pessoas que acreditam na transformação de vidas.
          </p>
        </div>
      </div>

      <main className="flex-1 bg-warm">
        {/* Grid de parceiros */}
        <section
          className="bg-warm w-full"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site">
            <h2
              className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl"
              style={{ marginBottom: "60px" }}
            >
              Quem apoia nossa missão
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {parceiros.map((parceiro) => (
                <div
                  key={parceiro.nome}
                  className="flex flex-col items-center border border-gray-200 bg-white text-center shadow-sm transition hover:shadow-md"
                  style={{ borderRadius: "20px", padding: "32px" }}
                >
                  <div
                    className="flex items-center justify-center rounded-full font-extrabold"
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "#003F8A15",
                      color: "#003F8A",
                      marginBottom: "16px",
                    }}
                    aria-hidden
                  >
                    {parceiro.sigla}
                  </div>
                  <span
                    className={`rounded-full text-xs font-semibold ${categoriaCores[parceiro.categoria]}`}
                    style={{ padding: "4px 12px", marginBottom: "12px" }}
                  >
                    {parceiro.categoria}
                  </span>
                  <h3
                    className="text-lg font-extrabold text-gray-900"
                    style={{ marginBottom: "8px" }}
                  >
                    {parceiro.nome}
                  </h3>
                  <p className="text-base leading-6 text-gray-500">
                    {parceiro.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como se tornar parceiro - 4 passos */}
        <section
          className="bg-warm-muted w-full"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site">
            <div className="flex flex-col items-center text-center">
              <h2
                className="text-2xl font-extrabold text-gray-900 sm:text-3xl"
                style={{ marginBottom: "16px" }}
              >
                Quer ser um parceiro?
              </h2>
              <p
                className="text-base leading-6 text-gray-600"
                style={{ maxWidth: "620px", marginBottom: "60px" }}
              >
                Empresas, instituições e órgãos públicos podem apoiar a APAE São
                Rafael de diversas formas. Veja como funciona:
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  numero: "1",
                  titulo: "Contato inicial",
                  texto:
                    "Fale com a nossa equipe para entender as formas de parceria disponíveis.",
                },
                {
                  numero: "2",
                  titulo: "Alinhamento",
                  texto:
                    "Definimos juntos o formato do apoio: financeiro, material, técnico ou institucional.",
                },
                {
                  numero: "3",
                  titulo: "Formalização",
                  texto:
                    "Assinatura de termo de parceria ou convênio, quando aplicável.",
                },
                {
                  numero: "4",
                  titulo: "Acompanhamento",
                  texto:
                    "Você recebe retornos periódicos sobre o impacto gerado pela parceria.",
                },
              ].map((passo) => (
                <div
                  key={passo.numero}
                  className="border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                  style={{ borderRadius: "20px", padding: "32px" }}
                >
                  <div
                    className="flex items-center justify-center rounded-full font-extrabold text-white"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#003F8A",
                      marginBottom: "16px",
                    }}
                  >
                    {passo.numero}
                  </div>
                  <h3
                    className="text-lg font-extrabold text-gray-900"
                    style={{ marginBottom: "8px" }}
                  >
                    {passo.titulo}
                  </h3>
                  <p className="text-base leading-6 text-gray-500">
                    {passo.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="bg-warm w-full"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <div className="container-site">
            <h2
              className="text-center text-2xl font-extrabold text-gray-900 sm:text-3xl"
              style={{ marginBottom: "60px" }}
            >
              Perguntas frequentes
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  pergunta: "Qualquer empresa pode ser parceira?",
                  resposta:
                    "Sim. Empresas de qualquer porte, órgãos públicos e instituições do terceiro setor podem propor parcerias com a APAE.",
                },
                {
                  pergunta: "A parceria precisa ser financeira?",
                  resposta:
                    "Não. Aceitamos apoio material, prestação de serviços, capacitação, cessão de espaço e divulgação, entre outros.",
                },
                {
                  pergunta: "Existe contrapartida para o parceiro?",
                  resposta:
                    "Sim, conforme o tipo de parceria: divulgação da marca em nossos canais, certificado de apoio institucional e relatórios de impacto.",
                },
                {
                  pergunta: "Como recebo comprovação para prestação de contas?",
                  resposta:
                    "Emitimos recibo, termo de parceria ou nota, conforme a natureza jurídica do apoio prestado.",
                },
              ].map((item) => (
                <div
                  key={item.pergunta}
                  className="border border-gray-200 bg-white shadow-sm"
                  style={{ borderRadius: "20px", padding: "32px" }}
                >
                  <h3
                    className="text-lg font-extrabold text-gray-900"
                    style={{ marginBottom: "8px" }}
                  >
                    {item.pergunta}
                  </h3>
                  <p className="text-base leading-6 text-gray-500">
                    {item.resposta}
                  </p>
                </div>
              ))}
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
              Vamos construir essa parceria juntos?
            </h2>
            <p
              className="mx-auto text-base text-white/80"
              style={{ maxWidth: "520px", marginBottom: "40px" }}
            >
              Fale com nossa equipe e descubra como sua empresa ou instituição
              pode fazer parte da rede de apoio da APAE São Rafael.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contato"
                className="btn btn-lg bg-white text-[#003F8A] hover:bg-white/90"
              >
                Entre em contato
              </Link>
              <Link
                href="/apoio/doacoes"
                className="btn btn-lg btn-outline-white"
              >
                Conheça outras formas de apoio
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
