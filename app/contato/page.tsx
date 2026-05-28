"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContatoPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header sólido */}
      <div className="w-full bg-[#0F5A43]">
        <TopBar />
        <Header />

        <div className="container-site py-10 text-center sm:py-14">
          <h1 className="text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Fale Conosco
          </h1>

          <p
            className="mx-auto mt-3 text-sm text-white/80 sm:text-base"
            style={{ maxWidth: "520px" }}
          >
            Estamos aqui para tirar suas dúvidas e receber sua mensagem com
            carinho.
          </p>
        </div>
      </div>

      <main className="flex-1 bg-warm">
        {/* Informações + Formulário */}
        <section className="section-pad w-full bg-warm">
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

                {/* Redes sociais */}
                <div>
                  <p className="font-extrabold text-gray-900">Redes sociais</p>

                  <div className="mt-3 flex flex-wrap gap-4">
                    {["Facebook", "Instagram", "X", "LinkedIn", "YouTube"].map(
                      (s) => (
                        <a
                          key={s}
                          href="#"
                          className="btn-radius bg-green-100 px-3 py-1.5 text-xs font-bold text-green-800 transition hover:bg-green-700 hover:text-white"
                        >
                          {s}
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Formulário */}
              <div className="card-radius border border-gray-200 bg-white p-7 shadow-sm sm:p-10">
                {enviado ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                    <span className="text-5xl">✅</span>

                    <h3 className="text-xl font-extrabold text-gray-900">
                      Mensagem enviada!
                    </h3>

                    <p className="text-sm text-gray-500">
                      Entraremos em contato em breve. Obrigado!
                    </p>

                    <button
                      onClick={() => {
                        setEnviado(false);

                        setForm({
                          nome: "",
                          email: "",
                          telefone: "",
                          mensagem: "",
                        });
                      }}
                      className="btn-radius mt-2 bg-green-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-700"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="mb-6 text-xl font-extrabold text-gray-900">
                      Envie sua mensagem
                    </h2>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                          Nome completo
                        </label>

                        <input
                          type="text"
                          name="nome"
                          value={form.nome}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          required
                          className="btn-radius w-full border-2 border-gray-200 bg-white px-4 py-3 text-sm focus:border-green-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                          E-mail
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          required
                          className="btn-radius w-full border-2 border-gray-200 bg-white px-4 py-3 text-sm focus:border-green-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                          Telefone{" "}
                          <span className="font-normal text-gray-400">
                            (opcional)
                          </span>
                        </label>

                        <input
                          type="tel"
                          name="telefone"
                          value={form.telefone}
                          onChange={handleChange}
                          placeholder="(84) 9 9999-9999"
                          className="btn-radius w-full border-2 border-gray-200 bg-white px-4 py-3 text-sm focus:border-green-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                          Mensagem
                        </label>

                        <textarea
                          name="mensagem"
                          value={form.mensagem}
                          onChange={handleChange}
                          placeholder="Escreva sua mensagem..."
                          required
                          rows={5}
                          className="btn-radius w-full border-2 border-gray-200 bg-white px-4 py-3 text-sm focus:border-green-500 focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-radius w-full bg-green-600 py-4 text-base font-bold text-white transition hover:bg-green-700"
                      >
                        Enviar mensagem
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
