"use client";

import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const items = [
  "Alimentos não perecíveis",
  "Roupas e calçados em bom estado",
  "Brinquedos educativos",
  "Materiais escolares e de higiene",
];

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

      <main
        className="flex-1 bg-warm"
        style={{ paddingTop: "80px", paddingBottom: "120px" }}
      >
        <div className="container-site mx-auto" style={{ maxWidth: "760px" }}>
          <h2 className="text-2xl font-extrabold text-gray-900">
            Como funciona
          </h2>
          <p className="mt-3 text-base leading-8 text-gray-600">
            A doação de materiais ajuda a suprir necessidades diárias da
            instituição e das famílias atendidas. Qualquer contribuição faz
            diferença no cuidado e bem-estar de quem participamos.
          </p>

          <h2 className="mt-12 text-2xl font-extrabold text-gray-900">
            O que é aceito
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-base text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-14 flex justify-center">
            <Link href="/contato" className="btn btn-lg btn-light-green">
              Como ajudar
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
