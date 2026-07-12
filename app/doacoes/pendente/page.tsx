import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DoacaoPendentePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="w-full bg-[#003F8A]" style={{ paddingBlock: "20px" }}>
        <TopBar />
        <Header />
      </div>

      <main
        className="flex flex-1 flex-col items-center justify-center bg-warm text-center"
        style={{ paddingTop: "60px", paddingBottom: "80px" }}
      >
        <div
          style={{
            width: "88px",
            height: "88px",
            borderRadius: "50%",
            background: "#fef9c3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="#ca8a04" strokeWidth="3" />
            <path
              d="M12 7v5l3 3"
              stroke="#ca8a04"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1
          className="font-extrabold text-gray-900"
          style={{ fontSize: "26px", marginBottom: "12px" }}
        >
          Sua doação está sendo processada
        </h1>
        <p
          className="text-gray-500"
          style={{ maxWidth: "440px", padding: "0 20px", lineHeight: "1.6" }}
        >
          Recebemos sua solicitação e estamos aguardando a confirmação do
          pagamento. Isso pode levar alguns minutos.
        </p>

        <Link
          href="/"
          style={{
            marginTop: "32px",
            padding: "14px 28px",
            borderRadius: "10px",
            background: "#003F8A",
            color: "#fff",
            fontWeight: 700,
            fontSize: "15px",
          }}
        >
          Voltar para o início
        </Link>
      </main>

      <Footer />
    </div>
  );
}
