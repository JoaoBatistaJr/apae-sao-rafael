import Link from "next/link";
import {
  HeartHandshake,
  CalendarClock,
  Palette,
  ClipboardList,
  Megaphone,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const areas = [
  {
    icon: CalendarClock,
    title: "Apoio em eventos e campanhas",
    desc: "Ajude na organização e execução de eventos, campanhas de arrecadação e ações na comunidade.",
  },
  {
    icon: Palette,
    title: "Atividades recreativas e oficinas",
    desc: "Participe de oficinas de arte, música e recreação junto aos usuários atendidos pela instituição.",
  },
  {
    icon: ClipboardList,
    title: "Suporte administrativo",
    desc: "Contribua com tarefas de organização, cadastro e apoio ao dia a dia administrativo da APAE.",
  },
  {
    icon: Megaphone,
    title: "Divulgação e comunicação",
    desc: "Ajude a dar mais visibilidade ao nosso trabalho nas redes sociais e na comunidade local.",
  },
];

const passos = [
  {
    numero: "01",
    title: "Entre em contato",
    desc: "Preencha o formulário ou fale com a gente pelo WhatsApp contando seu interesse.",
  },
  {
    numero: "02",
    title: "Conversa inicial",
    desc: "Nossa equipe apresenta as áreas disponíveis e entende melhor sua disponibilidade e talentos.",
  },
  {
    numero: "03",
    title: "Integração",
    desc: "Você é apresentado à equipe e às rotinas da instituição antes de começar suas atividades.",
  },
  {
    numero: "04",
    title: "Comece a transformar vidas",
    desc: "Participe das atividades no ritmo combinado, com todo o suporte da nossa equipe.",
  },
];

const faq = [
  {
    q: "Preciso ter experiência prévia para ser voluntário?",
    a: "Não. Buscamos pessoas dispostas a ajudar — a orientação necessária é oferecida pela nossa equipe antes do início das atividades.",
  },
  {
    q: "Quanto tempo preciso disponibilizar?",
    a: "Não há carga horária fixa. Você define, junto com a equipe, a frequência que cabe na sua rotina.",
  },
  {
    q: "Existe idade mínima para ser voluntário?",
    a: "Sim, a partir de 16 anos, com autorização dos responsáveis para menores de idade.",
  },
  {
    q: "O voluntariado tem algum custo?",
    a: "Não. Participar como voluntário na APAE São Rafael é totalmente gratuito.",
  },
];

const STEP = 150;

const whatsappHref =
  "https://wa.me/5584996124672?text=" +
  encodeURIComponent(
    "Olá! Tenho interesse em ser voluntário na APAE São Rafael.",
  );

export default function VoluntarioPage() {
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
            Seja voluntário
          </h1>
          <p
            className="mt-3 text-sm text-white/80 sm:text-base"
            style={{ maxWidth: "520px" }}
          >
            Doe seu tempo e talento para transformar vidas
          </p>
        </div>
      </div>

      <main className="flex-1 bg-warm">
        {/* COMO FUNCIONA */}
        <section className="section w-full">
          <div className="container-site">
            <ScrollReveal>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-3">
                  <HeartHandshake size={28} className="text-[#003F8A]" />
                  <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    Como funciona
                  </h2>
                </div>
                <p
                  className="mt-4 text-base leading-6 text-gray-600"
                  style={{ maxWidth: "700px" }}
                >
                  O voluntariado na APAE São Rafael é uma forma direta de
                  contribuir com o dia a dia da instituição, participando de
                  ações que fortalecem nosso trabalho junto às pessoas atendidas
                  e suas famílias. Cada hora doada representa mais acolhimento,
                  mais atividades e mais qualidade de vida para quem atendemos.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ÁREAS DE ATUAÇÃO */}
        <section className="section bg-warm-muted w-full">
          <div className="container-site">
            <ScrollReveal>
              <div className="section-title">
                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Áreas de atuação
                </h2>
              </div>
            </ScrollReveal>
            <div className="card-grid card-grid-4">
              {areas.map((item, i) => (
                <ScrollReveal key={item.title} delay={STEP * i}>
                  <div className="card h-full">
                    <div className="card-body">
                      <item.icon size={32} className="text-[#003F8A]" />
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
                  Como se tornar voluntário
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {passos.map((passo, i) => (
                <ScrollReveal key={passo.numero} delay={STEP * i}>
                  <div className="flex flex-col gap-3">
                    <span
                      className="text-3xl font-extrabold"
                      style={{ color: "#a855f7" }}
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
                  Vamos transformar vidas juntos?
                </h2>
                <p className="max-w-md text-sm leading-6 text-white/80">
                  Fale com a gente e descubra como seu tempo pode fazer a
                  diferença na vida de quem atendemos.
                </p>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <Link href="/contato" className="btn btn-lg btn-light-purple">
                    Quero ser voluntário
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
