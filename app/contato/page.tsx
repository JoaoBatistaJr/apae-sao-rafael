"use client";

import Image from "next/image";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
            Estamos aqui para tirar suas dúvidas e receber sua mensagem com
            carinho.
          </p>
        </div>
      </div>

      <main className="flex-1 bg-warm">
        <section className="section bg-warm w-full">
          <div className="container-site">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {/* Informações */}
              <div className="flex flex-col gap-6">
                <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                  Informações de contato
                </h2>

                {[
                  {
                    icon: "📍",
                    title: "Endereço",
                    content:
                      "Rua José Bezerra de Araújo, nº 200\nSão Rafael – RN",
                  },
                  {
                    icon: "📞",
                    title: "Telefone / WhatsApp",
                    content: "(84) 9 9999-9999",
                  },
                  {
                    icon: "✉️",
                    title: "E-mail",
                    content: "apaesaorafael@email.com",
                  },
                  {
                    icon: "🕐",
                    title: "Horário de atendimento",
                    content: "Segunda a Sexta-feira\ndas 08h às 15h",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="text-2xl">{item.icon}</span>
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
                  <p className="font-extrabold text-gray-900">Redes sociais</p>
                  <div className="mt-3 flex flex-wrap gap-4">
                    {["Facebook", "Instagram", "X", "LinkedIn", "YouTube"].map(
                      (s) => (
                        <a
                          key={s}
                          href="#"
                          className="btn btn-light-green btn-sm"
                        >
                          {s}
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Mapa clicável */}
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
