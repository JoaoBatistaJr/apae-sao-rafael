"use client";

import Link from "next/link";
import { Gift, HandHelping, HeartHandshake, Users } from "lucide-react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const supportOptions = [
  {
    title: "Doações financeiras",
    description:
      "Contribua com qualquer valor para ajudar na manutenção dos atendimentos e projetos da APAE.",
    href: "/doacoes",
    button: "Quero doar",
    btnClass: "btn-light-red",
    icon: HeartHandshake,
  },
  {
    title: "Seja voluntário",
    description:
      "Doe seu tempo e talento participando de ações, eventos e atividades da nossa instituição.",
    href: "/contato",
    button: "Participar",
    btnClass: "btn-light-purple",
    icon: HandHelping,
  },
  {
    title: "Parcerias",
    description:
      "Empresas e instituições podem apoiar projetos sociais e fortalecer nossas iniciativas.",
    href: "/contato",
    button: "Ser parceiro",
    btnClass: "btn-light-blue",
    icon: Users,
  },
  {
    title: "Doação de materiais",
    description:
      "Ajude com alimentos, roupas, brinquedos, materiais escolares e itens essenciais.",
    href: "/contato",
    button: "Como ajudar",
    btnClass: "btn-light-green",
    icon: Gift,
  },
];

export default function ApoioPage() {
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
            Apoie a APAE
          </h1>
          <p
            className="mt-3 text-sm text-white/80 sm:text-base"
            style={{ maxWidth: "520px" }}
          >
            Contribua com a APAE São Rafael e ajude a transformar vidas.
          </p>
        </div>
      </div>

      <main
        className="flex-1 bg-warm"
        style={{ paddingTop: "80px", paddingBottom: "120px" }}
      >
        <div className="container-site flex flex-col items-center">
          {/* GRID */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-full" style={{paddingBottom: "40px"}}>
            {supportOptions.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="card group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="flex h-56 items-center justify-center bg-gray-50">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Icon size={52} className="text-gray-800" />
                    </div>
                  </div>
                  <div className="card-body flex h-full flex-col">
                    <h2 className="min-h-16 text-2xl font-extrabold leading-snug text-gray-900">
                      {item.title}
                    </h2>
                    <p className="min-h-24 flex-1 text-base leading-8 text-gray-500">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className={`btn btn-lg btn-full mt-4 text-center ${item.btnClass}`}
                    >
                      {item.button}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* BLOCO PADRINHO */}
          <section
            className="mt-20 w-full flex flex-col items-center overflow-hidden bg-[#003F8A] px-6 py-14 text-center text-white sm:px-10"
            style={{ borderRadius: "24px", padding:"40px" }}
          >
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              ❤️ Seja um padrinho APAE
            </h2>
            <p className="mx-auto text-center mt-5 max-w-2xl text-base leading-8 text-green-100" style={{paddingBlock: "20px"}}>
              Com uma contribuição mensal, você ajuda a garantir a continuidade
              dos atendimentos, terapias e projetos realizados pela APAE São
              Rafael.
            </p>
            <Link
              href="/doacoes"
              className="btn btn-xl btn-pink mt-8 inline-block"
            >
              Quero ser padrinho
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
