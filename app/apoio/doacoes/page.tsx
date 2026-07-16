import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Sparkles } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const destinos = [
  {
    icon: "🩺",
    title: "Terapias e atendimentos",
    desc: "Fisioterapia, fonoaudiologia, terapia ocupacional e acompanhamento psicossocial.",
  },
  {
    icon: "📚",
    title: "Educação e oficinas",
    desc: "Atendimento educacional especializado e oficinas pedagógicas e artísticas.",
  },
  {
    icon: "🍽️",
    title: "Alimentação e materiais",
    desc: "Suporte alimentar e materiais usados no dia a dia dos atendimentos.",
  },
  {
    icon: "🏛️",
    title: "Manutenção da instituição",
    desc: "Estrutura, equipe e recursos necessários para manter a APAE funcionando.",
  },
];

const formas = [
  {
    icon: "💗",
    title: "Doação única",
    desc: "Contribua com o valor que puder em um único pagamento, via PIX ou cartão.",
  },
  {
    icon: "🔁",
    title: "Padrinho mensal",
    desc: "Uma contribuição recorrente que garante previsibilidade para os atendimentos ao longo do ano.",
  },
];

const faq = [
  {
    q: "Existe um valor mínimo para doar?",
    a: "Não. Qualquer valor ajuda a manter os atendimentos e projetos da instituição.",
  },
  {
    q: "O pagamento é seguro?",
    a: "Sim, as doações são processadas pelo Mercado Pago, com criptografia e proteção de dados.",
  },
  {
    q: "Posso cancelar minha doação mensal quando quiser?",
    a: "Sim. A assinatura de padrinho pode ser cancelada a qualquer momento, sem burocracia.",
  },
  {
    q: "Como sei que minha doação está sendo bem usada?",
    a: "Os recursos são aplicados diretamente nos atendimentos, terapias e projetos da APAE São Rafael.",
  },
];

const STEP = 150;

const whatsappHref =
  "https://wa.me/5584996124672?text=" +
  encodeURIComponent(
    "Olá! Tenho uma dúvida sobre como doar para a APAE São Rafael.",
  );

export default function ApoioDoacoesPage() {
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
            Doações financeiras
          </h1>
          <p
            className="mt-3 text-sm text-white/80 sm:text-base"
            style={{ maxWidth: "520px" }}
          >
            Sua contribuição transforma vidas na APAE São Rafael
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
                    Contribua com qualquer valor para ajudar na manutenção dos
                    atendimentos e projetos da APAE São Rafael. Cada doação, de
                    qualquer tamanho, sustenta terapias, oficinas e o cuidado
                    diário com as pessoas atendidas e suas famílias.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={STEP}>
                <div
                  className="relative overflow-hidden bg-gray-200"
                  style={{ height: "320px", borderRadius: "10px" }}
                >
                  {/* TODO: substituir por foto real de doações/atendimentos */}
                  <Image
                    src="/placeholder-doacoes.png"
                    alt="Doações para a APAE São Rafael"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* PARA ONDE VAI */}
        <section className="section bg-warm-muted w-full">
          <div className="container-site">
            <ScrollReveal>
              <div className="section-title">
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Para onde vai sua doação
                </h2>
              </div>
            </ScrollReveal>
            <div className="card-grid card-grid-4">
              {destinos.map((item, i) => (
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

        {/* FORMAS DE CONTRIBUIR */}
        <section className="section w-full">
          <div className="container-site">
            <ScrollReveal>
              <div className="section-title">
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Formas de contribuir
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {formas.map((item, i) => (
                <ScrollReveal key={item.title} delay={STEP * i}>
                  <div className="card h-full">
                    <div className="card-body">
                      <div className="text-4xl">{item.icon}</div>
                      <h3 className="text-lg font-extrabold text-gray-900">
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
                style={{ borderRadius: "24px", padding: "48px 32px" }}
              >
                <Sparkles size={32} className="text-yellow-300" />
                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  Pronto para fazer a diferença?
                </h2>
                <p className="max-w-md text-sm leading-6 text-white/80">
                  Escolha o valor e a forma de contribuição — leva menos de um
                  minuto.
                </p>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/doacoes"
                    className="btn btn-lg bg-white text-[#003F8A] hover:bg-white/90"
                  >
                    Fazer doação
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-lg btn-outline-white"
                  >
                    <MessageCircle size={18} />
                    Tirar dúvidas
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
