import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Sparkles } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const categorias = [
  {
    icon: "🍚",
    title: "Alimentos não perecíveis",
    desc: "Arroz, feijão, óleo, macarrão, enlatados e outros itens de despensa.",
  },
  {
    icon: "👕",
    title: "Roupas e calçados",
    desc: "Peças em bom estado de conservação, de qualquer tamanho ou idade.",
  },
  {
    icon: "🧩",
    title: "Brinquedos educativos",
    desc: "Jogos, brinquedos pedagógicos e materiais lúdicos em bom estado.",
  },
  {
    icon: "🎒",
    title: "Material escolar e higiene",
    desc: "Cadernos, canetas, mochilas, itens de higiene pessoal e limpeza.",
  },
];

const passos = [
  {
    numero: "01",
    title: "Separe os itens",
    desc: "Reúna os materiais que deseja doar, seguindo as categorias aceitas.",
  },
  {
    numero: "02",
    title: "Entre em contato",
    desc: "Fale com a gente pelo WhatsApp ou formulário para combinar a doação.",
  },
  {
    numero: "03",
    title: "Combine a entrega",
    desc: "Defina data e forma de entrega — na sede da APAE ou em ponto combinado.",
  },
  {
    numero: "04",
    title: "Itens chegam a quem precisa",
    desc: "Sua doação é destinada às famílias e atividades que mais precisam.",
  },
];

const faq = [
  {
    q: "Os itens precisam estar novos?",
    a: "Não necessariamente. Aceitamos itens usados, desde que estejam em bom estado de conservação e uso.",
  },
  {
    q: "Vocês buscam a doação?",
    a: "Para quantidades maiores, podemos combinar a retirada. Entre em contato para avaliarmos o melhor formato.",
  },
  {
    q: "Posso doar qualquer quantidade?",
    a: "Sim! Toda contribuição é bem-vinda, de uma peça de roupa a doações em maior volume.",
  },
  {
    q: "Como sei que minha doação chegou a quem precisa?",
    a: "Nossa equipe organiza e distribui os itens de acordo com as necessidades identificadas nos atendimentos.",
  },
];

const STEP = 150;

const whatsappHref =
  "https://wa.me/5584996124672?text=" +
  encodeURIComponent(
    "Olá! Gostaria de fazer uma doação de materiais para a APAE São Rafael.",
  );

export default function MateriaisPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="w-full bg-[#003F8A]">
        <TopBar />
        <Header />
        <div
          className="container-site flex flex-col items-center text-center"
          style={{ paddingBlock: "20px" }}
        >
          <h1 className="text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Doação de materiais
          </h1>
          <p
            className="mt-3 text-sm text-white/80 sm:text-base"
            style={{ maxWidth: "520px" }}
          >
            Ajude com itens essenciais para o dia a dia da instituição
          </p>
        </div>
      </div>

      <main className="flex-1 bg-warm">
        {/* COMO FUNCIONA */}
        <section className="section w-full">
          <div className="container-site">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <ScrollReveal>
                <div>
                  <h2
                    className="text-2xl font-extrabold text-gray-900 sm:text-3xl"
                    style={{ marginBottom: "16px" }}
                  >
                    Como funciona
                  </h2>
                  <p className="text-base leading-6 text-gray-600">
                    A doação de materiais ajuda a suprir necessidades diárias da
                    instituição e das famílias atendidas. Alimentos, roupas,
                    brinquedos e materiais escolares se transformam em cuidado,
                    aprendizado e bem-estar para quem participa dos nossos
                    projetos.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={STEP}>
                <div
                  className="relative overflow-hidden bg-gray-200"
                  style={{ height: "320px", borderRadius: "10px" }}
                >
                  {/* TODO: substituir por foto real de doações de materiais */}
                  <Image
                    src="/placeholder-materiais.png"
                    alt="Doação de materiais para a APAE São Rafael"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* O QUE É ACEITO */}
        <section className="section bg-warm-muted w-full">
          <div className="container-site">
            <ScrollReveal>
              <div className="section-title">
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  O que é aceito
                </h2>
              </div>
            </ScrollReveal>
            <div className="card-grid card-grid-4">
              {categorias.map((item, i) => (
                <ScrollReveal key={item.title} delay={STEP * i}>
                  <div className="card h-full">
                    <div className="card-body">
                      <div className="text-4xl">{item.icon}</div>
                      <h3 className="text-base font-extrabold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-6 text-gray-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* PASSO A PASSO */}
        <section className="section w-full">
          <div className="container-site">
            <ScrollReveal>
              <div className="section-title">
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Como doar
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {passos.map((passo, i) => (
                <ScrollReveal key={passo.numero} delay={STEP * i}>
                  <div className="flex flex-col gap-3">
                    <span
                      className="text-3xl font-extrabold"
                      style={{ color: "#003F8A" }}
                    >
                      {passo.numero}
                    </span>
                    <h3 className="text-base font-extrabold text-gray-900">
                      {passo.title}
                    </h3>
                    <p className="text-sm leading-6 text-gray-500">
                      {passo.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section bg-warm-muted w-full">
          <div className="container-site">
            <ScrollReveal>
              <div className="section-title">
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Perguntas frequentes
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {faq.map((item, i) => (
                <ScrollReveal key={item.q} delay={STEP * i}>
                  <div className="card h-full">
                    <div className="card-body">
                      <h3 className="text-base font-extrabold text-gray-900">
                        {item.q}
                      </h3>
                      <p className="text-sm leading-6 text-gray-500">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="section w-full">
          <div className="container-site">
            <ScrollReveal>
              <div
                className="flex w-full flex-col items-center gap-4 bg-[#003F8A] text-center text-white"
                style={{
                  borderRadius: "24px",
                  padding: "48px 32px",
                }}
              >
                <Sparkles size={32} className="text-yellow-300" />
                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  Sua doação faz a diferença
                </h2>
                <p className="max-w-md text-sm leading-6 text-white/80">
                  Fale com a gente e combine a melhor forma de entregar sua
                  doação de materiais.
                </p>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contato"
                    className="btn btn-lg bg-white text-[#003F8A] hover:bg-white/90"
                  >
                    Quero doar materiais
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-outline-white"
                  >
                    <MessageCircle size={18} />
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
