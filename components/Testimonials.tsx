import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "A APAE foi fundamental no desenvolvimento do meu filho. Aqui, ele recebeu não só atendimento especializado, mas também muito carinho e acolhimento. Somos eternamente gratos!",
    name: "Maria Silva",
    role: "35 anos, mãe de uma criança atendida pela APAE",
    initials: "MS",
  },
  {
    quote:
      "Participar das atividades da APAE transformou a nossa vida. A dedicação dos profissionais e o apoio da comunidade fazem toda a diferença para quem precisa de inclusão e respeito.",
    name: "José Antônio",
    role: "55 anos, pai de uma criança atendida pela APAE",
    initials: "JA",
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-warm-muted w-full relative">
      <div
        className="pointer-events-none absolute right-5 -top-12 select-none"
        aria-hidden="true"
      >
        <Image
          src="/decorations/autism-heart.svg"
          alt=""
          width={130}
          height={130}
          className="w-12 sm:w-16 md:w-30"
        />
      </div>
      <div className="container-site">
        <div className="section-title">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl flex items-center justify-center gap-3">
            <Image
              src="/decorations/puzzle-blue.svg"
              alt=""
              width={45}
              height={45}
              aria-hidden="true"
            />
            Depoimentos que Inspiram
            <Image
              src="/decorations/puzzle-blue.svg"
              alt=""
              width={45}
              height={45}
              aria-hidden="true"
            />
          </h2>
        </div>

        <div className="card-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="card">
              <div className="card-body">
                <div className="text-5xl font-serif leading-none text-gray-200">
                  &ldquo;
                </div>
                <div className="text-yellow-400">★★★★★</div>
                <p className="flex-1 text-base italic leading-8 text-gray-600 md:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div
                    className="flex shrink-0 items-center justify-center bg-green-700 font-bold text-white"
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "100%",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-extrabold text-gray-900">{t.name}</p>
                    <p className="mt-0.5 text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-12 flex justify-center"
          style={{ paddingTop: "40px" }}
        >
          <Link href="/depoimentos" className="btn btn-outline-green btn-md">
            Veja mais Histórias
          </Link>
        </div>
      </div>
    </section>
  );
}
