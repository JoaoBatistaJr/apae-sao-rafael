import Link from "next/link";
import Image from "next/image";
import { getCursos } from "@/lib/notion-cursos";

export const metadata = {
  title: "APAE São Rafael | Links",
  description: "Acesse o site, novidades, cursos e faça sua doação.",
  robots: { index: false, follow: false },
};

const iconAcessarSite = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path
      d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const iconNovidades = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M7 9h10M7 13h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const iconDoacao = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 21s-7-4.5-9.5-9C.8 8.4 2 4.5 6 4c2 0 3.5 1.2 4.5 2.8C11.5 5.2 13 4 15 4c4 0 5.2 3.9 3.5 8-2.5 4.5-9.5 9-9.5 9z"
      fill="currentColor"
    />
  </svg>
);

const iconCursos = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 4L2 9l10 5 10-5-10-5z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M6 11.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-5.5"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const iconApoio = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M2 21v-1c0-3 3.5-5 7-5s7 2 7 5v1M16 3.5c1.7.3 3 1.8 3 3.5s-1.3 3.2-3 3.5"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const socials = [
  {
    href: "https://instagram.com/apaesaorafael",
    label: "Instagram",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "https://wa.me/55SEUNUMEROAQUI",
    label: "WhatsApp",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 8.7c-.2.5-.7 1.6-.5 2.2.3 1.1 1.4 2.6 2.4 3.5.9.9 2.4 1.9 3.5 2.2.6.2 1.7-.3 2.2-.5.3-.1.6-.4.6-.7l-.2-1.2c-.1-.4-.5-.6-.9-.5l-1.1.3c-.3.1-.6 0-.8-.2-.5-.4-1.1-1-1.5-1.5-.2-.2-.3-.5-.2-.8l.3-1.1c.1-.4-.1-.8-.5-.9L11 8.5c-.3-.1-.6.2-.7.5z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    href: "https://youtube.com/@apaesaorafael",
    label: "YouTube",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="5"
          width="20"
          height="14"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M10 9.5v5l5-2.5-5-2.5z" fill="currentColor" />
      </svg>
    ),
  },
];

export default async function LinksPage() {
  const cursos = await getCursos().catch(() => []);
  const temCursosAtivos = cursos.length > 0;

  const links = [
    { href: "/doacoes", label: "Fazer uma doação", icon: iconDoacao },
    ...(temCursosAtivos
      ? [{ href: "/cursos", label: "Cursos e oficinas", icon: iconCursos }]
      : []),
    { href: "/novidades", label: "Veja as novidades", icon: iconNovidades },
    { href: "/apoio", label: "Apoie, seja voluntário", icon: iconApoio },
    { href: "/", label: "Visite nosso site", icon: iconAcessarSite },
  ];

  return (
    <main
      className="flex min-h-screen flex-col items-center bg-warm"
      style={{ paddingTop: "48px", paddingBottom: "48px" }}
    >
      <div style={{ width: "100%", maxWidth: "420px", padding: "0 20px" }}>
        {/* HEADER */}
        <div
          className="flex flex-col items-center text-center"
          style={{ marginBottom: "32px" }}
        >
          <div style={{ marginBottom: "16px" }}>
            <Image
              src="/Apae-logo-footer.svg"
              alt="APAE São Rafael"
              width={100}
              height={100}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <h2
            className="font-extrabold text-gray-900"
            style={{ fontSize: "18px" }}
          >
            Boas-vindas à nossa APAE!
          </h2>
          <p
            className="text-gray-500"
            style={{ fontSize: "14px", marginTop: "4px", maxWidth: "300px" }}
          >
            Transformando vidas através do cuidado e da inclusão
          </p>
        </div>

        {/* BOTOES */}
        <nav className="flex flex-col gap-3">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "16px 20px",
                borderRadius: "14px",
                background: "#fff",
                border: "2px solid #e5e7eb",
                color: "#111827",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                transition: "border 0.15s, transform 0.1s",
              }}
            >
              <span style={{ color: "#003F8A", flexShrink: 0 }}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* REDES SOCIAIS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "32px",
          }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                background: "#fff",
                border: "2px solid #e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#003F8A",
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p
          className="text-center text-gray-400"
          style={{ fontSize: "12px", marginTop: "28px" }}
        >
          &copy; {new Date().getFullYear()} APAE São Rafael
        </p>
      </div>
    </main>
  );
}
