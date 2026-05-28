import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative flex w-full items-center"
      style={{ minHeight: "520px", paddingTop: "60px", paddingBottom: "100px" }}
    >
      <div
        className="pointer-events-none absolute left-0 -bottom-20 select-none"
        aria-hidden="true"
      >
        <Image
          src="/decorations/autism-bow.svg"
          alt=""
          width={80}
          height={80}
          className="w-12 sm:w-16 md:w-20"
        />
      </div>
      <div
        className="pointer-events-none absolute -right-12 -bottom-19 select-none"
        aria-hidden="true"
      >
        <Image
          src="/decorations/autism-bow-2.svg"
          alt=""
          width={80}
          height={80}
          className="w-12 sm:w-16 md:w-32"
        />
      </div>
      <div className="container-site">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Boas vindas
              <br />à nossa APAE
              <br />
              São Rafael – RN
            </h1>
            <p
              className="mt-6 text-base leading-8 text-white/85 md:mt-8 md:text-lg"
              style={{ maxWidth: "480px", paddingBottom: "40px" }}
            >
              Conheça nossa missão, nossas histórias e como fazemos a diferença
              na vida de tantas pessoas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 md:mt-10">
              <Link href="/sobre" className="btn btn-outline-white btn-lg">
                Conheça nossa história
              </Link>
              <Link href="/doacoes" className="btn btn-primary btn-lg">
                Quero ajudar
              </Link>
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="relative aspect-square w-[clamp(320px,35vw,580px)]">
              <Image
                src="/heart.svg"
                alt="APAE"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 max-md:hidden flex animate-bounce justify-center">
        <div
          style={{
            width: "28px",
            height: "44px",
            borderRadius: "14px",
            border: "2px solid rgba(255,255,255,0.5)",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "8px",
              borderRadius: "2px",
              background: "rgba(255,255,255,0.6)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
