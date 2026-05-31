import Link from "next/link";
import Image from "next/image";

const infoLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre a APAE", href: "/sobre" },
  { label: "Atividades", href: "/atividades" },
  { label: "Notícias", href: "/noticias" },
  { label: "Apoie a APAE", href: "/apoio" },
  { label: "Contato", href: "/contato" },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <div
        style={{
          background: "rgba(255, 253, 249, 0.85)",
          paddingTop: "80px",
          paddingBottom: "60px",
        }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Image
                src="/Apae-logo-footer.svg"
                alt="APAE São Rafael"
                width={120}
                height={60}
                style={{ height: "auto" }}
                className="object-contain w-20 sm:w-24 lg:w-32"
              />
            </div>

            <div>
              <h4 className="font-extrabold text-gray-900 md:text-lg">
                Endereço
              </h4>
              <p className="mt-3 text-sm leading-7 text-gray-500 md:mt-4 md:text-base">
                Rua José Bezerra de Araújo,
                <br />
                nº 200, São Rafael – RN
              </p>
            </div>

            <div>
              <h4 className="font-extrabold text-gray-900 md:text-lg">
                Contato
              </h4>
              <p className="mt-3 text-sm leading-7 text-gray-500 md:mt-4 md:text-base">
                (84) 9 9999-9999
                <br />
                apaesaorafael@email.com
              </p>
              <div className="mt-4 flex gap-4 text-sm text-gray-500">
                {["FB", "IG", "X", "LI", "YT"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="transition hover:text-green-700"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-extrabold text-gray-900 md:text-lg">
                Informações
              </h4>
              <ul className="mt-3 space-y-2.5 md:mt-4">
                {infoLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 transition hover:text-green-700 md:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full"
        style={{
          background: "#0B77E5",
          paddingBlock: "20px",
        }}
      >
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-sm font-bold text-white">
              APAE São Rafael © {new Date().getFullYear()}. Todos os direitos
              reservados.
            </span>
            <div className="flex flex-wrap gap-6">
              {[
                { label: "Política de Privacidade", href: "/privacidade" },
                { label: "Termos de Serviço", href: "/termos" },
                { label: "Configurações de cookies", href: "/cookies" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold text-white underline transition hover:text-green-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
