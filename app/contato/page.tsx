import Image from "next/image";
import { MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const infos = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Rua José Bezerra de Araújo, nº 200\nSão Rafael – RN",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(84) 9 9612-4672",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "apaesaorafael@email.com",
  },
  {
    icon: Clock,
    title: "Horário de atendimento",
    content: "Segunda a Sexta-feira\ndas 08h às 15h",
  },
];

// TODO: manter só as redes que a APAE realmente usa e trocar os links
const redes = ["Facebook", "Instagram", "X", "LinkedIn", "YouTube"];

const whatsappHref =
  "https://wa.me/5584996124672?text=" +
  encodeURIComponent("Olá! Gostaria de falar com a APAE São Rafael.");

export default function ContatoPage() {
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
            Fale Conosco
          </h1>
          <p
            className="mt-3 text-sm text-white/80 sm:text-base"
            style={{ maxWidth: "520px" }}
          >
            Tire suas dúvidas e fale com a nossa equipe pelo WhatsApp
          </p>
        </div>
      </div>

      <main className="flex-1 bg-warm">
        {/* WHATSAPP CTA */}
        <section className="section w-full">
          <div className="container-site">
            <ScrollReveal>
              <div
                className="flex w-full flex-col items-center gap-4 bg-[#003F8A] text-center text-white"
                style={{ borderRadius: "24px", padding: "48px 32px" }}
              >
                <MessageCircle size={32} className="text-yellow-300" />
                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  Fale com a gente agora
                </h2>
                <p className="max-w-md text-sm leading-6 text-white/80">
                  O jeito mais rápido de tirar dúvidas, agendar uma visita ou
                  saber como ajudar é falando direto pelo WhatsApp.
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg btn-light-green mt-2"
                >
                  <MessageCircle size={18} />
                  Chamar no WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* INFORMAÇÕES + MAPA */}
        <section className="section bg-warm-muted w-full">
          <div className="container-site">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {/* Informações */}
              <ScrollReveal>
                <div className="flex flex-col gap-6">
                  <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                    Outras formas de contato
                  </h2>

                  {infos.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <item.icon size={24} className="mt-1 text-[#003F8A]" />
                      <div>
                        <p className="font-extrabold text-gray-900">
                          {item.title}
                        </p>
                        <p
                          className="mt-1 text-sm leading-7 text-gray-500"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div>
                    <p
                      className="font-extrabold text-gray-900"
                      style={{ paddingBottom: "10px" }}
                    >
                      Redes sociais
                    </p>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {redes.map((s) => (
                        <a
                          key={s}
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-light-green btn-sm"
                        >
                          {s}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Mapa clicável */}
              <ScrollReveal delay={150}>
                <a
                  href="https://maps.app.goo.gl/qytYzwe2tUv1gKzf8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card overflow-hidden"
                  style={{ minHeight: "400px" }}
                >
                  <div className="relative flex-1">
                    <Image
                      src="/apae-maps.png"
                      alt="Localização da APAE São Rafael no Google Maps"
                      fill
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-end gap-2 pb-8 text-center"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)",
                      }}
                    >
                      <span className="text-3xl">📍</span>
                      <p className="text-sm font-bold text-white">
                        Clique para abrir no Google Maps
                      </p>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
