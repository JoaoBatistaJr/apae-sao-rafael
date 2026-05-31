"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  Info,
  BookOpen,
  Newspaper,
  HeartHandshake,
  Phone,
} from "lucide-react";

const navItems = [
  { label: "Início", href: "/", icon: House },
  { label: "Sobre", href: "/sobre", icon: Info },
  { label: "Atividades", href: "/atividades", icon: BookOpen },
  { label: "Novidades", href: "/novidades", icon: Newspaper },
  { label: "Apoie", href: "/apoio", icon: HeartHandshake },
  { label: "Contato", href: "/contato", icon: Phone },
];

export default function BottomNav() {
  const pathname = usePathname();

  const activeIndex = navItems.findIndex((item) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href),
  );

  const itemWidth = 100 / navItems.length;

  return (
    <nav
      className="fixed bottom-0 left-0 z-50 w-full lg:hidden"
      style={{
        background: "#003F8A",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* Bolha deslizante */}
      <span
        style={{
          position: "absolute",
          top: 0,
          left: `${activeIndex * itemWidth}%`,
          width: `${itemWidth}%`,
          height: "3px",
          background: "#7BEEA7",
          borderRadius: "0 0 4px 4px",
          transition: "left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      />

      <div className="flex h-16 items-center">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === activeIndex;

          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
                height: "100%",
                textDecoration: "none",
                color: isActive ? "#7BEEA7" : "rgba(255,255,255,0.75)",
                transition: "color 0.2s",
                touchAction: "manipulation",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <Icon
                size={20}
                strokeWidth={isActive ? 2.5 : 1.8}
                style={{
                  transform: isActive ? "translateY(-1px)" : "none",
                  transition: "transform 0.2s",
                }}
              />
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: isActive ? 700 : 500,
                }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
