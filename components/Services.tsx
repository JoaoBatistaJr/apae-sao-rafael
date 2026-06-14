import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    img: "/servico-pezinho.png",
    title: "Triagem Neonatal",
    desc: "Realização e orientação sobre o Exame do Pezinho para diagnóstico precoce de doenças.",
    btn: "Saiba mais",
    btnClass: "btn-light-green",
    href: "/servicos/exame-pezinho",
  },
  {
    img: "/servico-educacao.png",
    title: "Educação Especializada",
    desc: "A APAE oferece acompanhamento pedagógico adaptado para crianças com deficiência intelectual e múltipla.",
    btn: "Saiba mais",
    btnClass: "btn-light-blue",
    href: "/servicos/educacao",
  },
  {
    img: "/servico-saude.png",
    title: "Atendimento em Saúde",
    desc: "Serviços de fisioterapia, psicologia e fonoaudiologia.",
    btn: "Saiba mais",
    btnClass: "btn-light-red",
    href: "/saude",
  },
];

export default function Services() {
  return (
    <section className="section bg-warm w-full relative">
      <div className="container-site">
        <ScrollReveal>
          <div className="section-title">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl flex items-center justify-center gap-3">
              <Image
                src="/decorations/puzzle-green.svg"
                alt=""
                width={36}
                height={36}
                aria-hidden="true"
              />
              Nossos Atendimentos
              <Image
                src="/decorations/puzzle-green.svg"
                alt=""
                width={36}
                height={36}
                aria-hidden="true"
              />
            </h2>
          </div>
        </ScrollReveal>

        <div className="card-grid card-grid-3">
          {services.map((item, i) => (
            <ScrollReveal key={item.href} delay={i * 100}>
              <div className="card">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="card-body">
                  <h3 className="text-lg font-extrabold leading-snug text-gray-900">
                    {item.title}
                  </h3>
                  <p className="flex-1 text-xm leading-7 text-gray-500">
                    {item.desc}
                  </p>
                  <Link
                    href={item.href}
                    className={`btn btn-base btn-full mt-2 text-center ${item.btnClass}`}
                  >
                    {item.btn}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
