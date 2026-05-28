import Link from "next/link";
import Image from "next/image";

const items = [
  {
    img: "/apoio-doador.png",
    title: "Seja um doador",
    desc: "Sua contribuição ajuda a manter projetos sociais, educacionais e de saúde para centenas de famílias.",
    btn: "Doe agora",
    btnClass: "btn-pink",
    href: "/doacoes",
  },
  {
    img: "/apoio-acoes.png",
    title: "Participe das ações",
    desc: "Fique por dentro dos eventos, campanhas e atividades promovidas pela APAE em nossa comunidade.",
    btn: "Ver ações",
    btnClass: "btn-light-yellow",
    href: "/atividades",
  },
  {
    img: "/apoio-voluntario.png",
    title: "Seja um voluntário",
    desc: "Doe seu tempo e talento para transformar vidas. Conheça nossas comunidades de voluntários.",
    btn: "Inscreva-se",
    btnClass: "btn-light-purple",
    href: "/voluntario",
  },
];

export default function SupportUs() {
  return (
    <section className="section bg-warm-muted w-full relative ">
      <div
        className="pointer-events-none absolute -right-1 -top-12 select-none"
        aria-hidden="true"
      >
        <Image
          src="/decorations/balloon-red.svg"
          alt=""
          width={120}
          height={120}
          className="w-12 sm:w-16 md:w-30"
        />
      </div>
      <div className="container-site">
        <div className="section-title">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl flex items-center justify-center gap-3">
            <Image
              src="/decorations/puzzle-pink.svg"
              alt=""
              width={36}
              height={36}
              aria-hidden="true"
            />
            Apoie a APAE
            <Image
              src="/decorations/puzzle-pink.svg"
              alt=""
              width={36}
              height={36}
              aria-hidden="true"
            />
          </h2>
        </div>

        <div className="card-grid card-grid-3">
          {items.map((item) => (
            <div key={item.href} className="card">
              <div className="relative h-52 overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
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
          ))}
        </div>

        <div
          className="mt-12 flex justify-center"
          style={{ paddingTop: "40px" }}
        >
          <Link href="/apoio" className="btn btn-outline-green btn-md">
            Ver todas as formas de apoio
          </Link>
        </div>
      </div>
    </section>
  );
}
