import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import BottomNav from "@/components/BottomNav";
import PuzzleBg from "@/components/PuzzleBg";

export const metadata = {
  title: "APAE São Rafael - RN",
  description: "Associação de Pais e Amigos dos Excepcionais de São Rafael - RN",
};

export const viewport = {
  viewportFit: "cover",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${nunitoSans.variable}`}
        suppressHydrationWarning
        style={{ position: "relative", background: "#fffdf9", minHeight: "100vh", height: "100%" }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-visible w-full"
          aria-hidden="true"
          style={{ minHeight: "100%", height: "100%" }}
        >
          <PuzzleBg />
        </div>

        <Providers>
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
            className="pb-16 lg:pb-0"
          >
            {children}
          </div>
        </Providers>

        <BottomNav />
      </body>
    </html>
  );
}
