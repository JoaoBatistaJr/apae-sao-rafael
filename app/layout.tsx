import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata = {
  title: "APAE São Rafael - RN",
  description:
    "Associação de Pais e Amigos dos Excepcionais de São Rafael - RN",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${nunitoSans.variable}`}
        suppressHydrationWarning
        style={{ position: "relative", background: "#fffdf9" }}
      >
        {/* Conteúdo */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          {children}
        </div>

        <BottomNav />
      </body>
    </html>
  );
}
