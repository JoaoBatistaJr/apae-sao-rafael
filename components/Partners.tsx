import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const partners = [
  "Prefeitura Municipal",
  "Secretaria de Saúde",
  "Rotary Club",
  "Lions Club",
  "Banco do Brasil",
  "Sicredi",
  "Sebrae",
  "SESI",
];

export default function Partners() {
  return (
    <section className="section bg-warm w-full relative">
      <div
        className="pointer-events-none absolute left-10 -top-12 select-none scale-x-[-1]"
        aria-hidden="true"
      >
        <Image
          src="/decorations/autism-heart.svg"
          alt=""
          width={150}
          height={150}
          className="w-12 sm:w-16 md:w-30"
        />
      </div>
      <div className="container-site">
        <ScrollReveal>
          <div className="section-title">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl flex items-center justify-center gap-3">
              <Image
                src="/decorations/puzzle-yellow.svg"
                alt=""
                width={36}
                height={36}
                aria-hidden="true"
              />
              Nossos Parceiros
              <Image
                src="/decorations/puzzle-yellow.svg"
                alt=""
                width={36}
                height={36}
                aria-hidden="true"
              />
            </h2>
          </div>
        </ScrollReveal>

        <div className="card-grid card-grid-4">
          {partners.map((p, i) => (
            <ScrollReveal key={p} delay={i * 80}>
              <div
                className="flex h-24 items-center justify-center border border-gray-200 bg-white px-4 shadow-sm transition hover:shadow-md md:h-28"
                style={{ borderRadius: "16px" }}
              >
                <span className="text-center text-sm font-semibold text-gray-500 md:text-base">
                  {p}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div
            className="mt-12 flex justify-center"
            style={{ paddingTop: "40px" }}
          >
            <Link href="/parceiros" className="btn btn-green btn-md">
              Conheça nossos Parceiros
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
