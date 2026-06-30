"use client";

import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const areas = [
  "Apoio em eventos e campanhas",
  "Atividades recreativas e oficinas",
  "Suporte administrativo",
  "Divulgação e comunicação",
];

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

      <main
        className="flex-1 bg-warm"
        style={{ paddingTop: "80px", paddingBottom: "120px" }}
      >
        <div className="container-site mx-auto" style={{ maxWidth: "760px" }}>
          <h2 className="text-2xl font-extrabold text-gray-900">
            Como funciona
          </h2>
          <p className="mt-3 text-base leading-8 text-gray-600">
            O voluntariado na APAE São Rafael é uma forma direta de contribuir
            com o dia a dia da instituição, participando de ações que fortalecem
            nosso trabalho junto às pessoas atendidas e suas famílias.
          </p>

          <h2 className="mt-12 text-2xl font-extrabold text-gray-900">
            Áreas de atuação
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {areas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-3 text-base text-gray-700"
              >
                {area}
              </li>
            ))}
          </ul>

          <div className="mt-14 flex justify-center">
            <Link href="/contato" className="btn btn-lg btn-light-purple">
              Quero ser voluntário
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
