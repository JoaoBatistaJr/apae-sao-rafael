"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre a APAE", href: "/sobre" },
  { label: "Atividades", href: "/atividades" },
  { label: "Novidades", href: "/novidades" },
  { label: "Apoie", href: "/apoio" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    visible: false,
  });

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const nav = navRef.current;
    if (!nav) return;
    const navRect = nav.getBoundingClientRect();
    const itemRect = e.currentTarget.getBoundingClientRect();
    setIndicator({
      left: itemRect.left - navRect.left,
      width: itemRect.width,
      visible: true,
    });
  };

  const handleMouseLeave = () =>
    setIndicator((prev) => ({ ...prev, visible: false }));

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="w-full">
      <div className="container-site">
        <div className="flex h-20 items-center justify-between md:h-24">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/LogoAPAEhome.svg"
              alt="APAE São Rafael"
              width={170}
              height={50}
              className="object-contain"
              style={{ height: "auto", padding: "20px" }}
            />
          </Link>

          <nav
            ref={navRef}
            onMouseLeave={handleMouseLeave}
            className="relative hidden items-center gap-6 lg:flex xl:gap-8"
          >
            <span
              className="pointer-events-none absolute -bottom-2 h-1 rounded-full bg-white transition-all duration-300"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.visible ? 1 : 0,
              }}
            />

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={handleMouseEnter}
                className="relative text-base font-bold tracking-wide text-white transition-all duration-200"
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-white" />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
