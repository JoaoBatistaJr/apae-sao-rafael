"use client";

import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const benefits = [
  "Associação da sua marca a uma causa social",
  "Visibilidade institucional em ações e eventos",
  "Fortalecimento da responsabilidade social da empresa",
  "Impacto direto na comunidade local",
];

export default function ParceriasPage() {
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
            Parcerias
          </h1>
          <p
            className="mt-3 text-sm text-white/80 sm:text-base"
            style={{ maxWidth: "520px" }}
          >
            Empresas e instituições fortalecendo projetos sociais
          </p>
        </div>
      </div>

      <main
        className="flex-1 bg-warm"
        style={{ paddingTop: "80px", paddingBottom: "120px" }}
      >
        <div className="container-site mx-auto" style={{ maxWidth: "760px" }}>
          <h2 className="text-2xl font-extrabold text-gray-900">
            Como funciona
          </h2>
          <p className="mt-3 text-base leading-8 text-gray-600">
            Empresas e instituições podem apoiar a APAE São Rafael por meio de
            patrocínios, doações recorrentes ou ações conjuntas, fortalecendo
            nossos projetos e ampliando o alcance do trabalho realizado.
          </p>

          <h2 className="mt-12 text-2xl font-extrabold text-gray-900">
            Benefícios da parceria
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 text-base text-gray-700"
              >
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-14 flex justify-center">
            <Link href="/contato" className="btn btn-lg btn-light-blue">
              Ser parceiro
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
