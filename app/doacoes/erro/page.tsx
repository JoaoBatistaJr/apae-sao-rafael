import Link from "next/link";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DoacaoErroPage() {
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
            background: "#fee2e2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="#dc2626"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1
          className="font-extrabold text-gray-900"
          style={{ fontSize: "26px", marginBottom: "12px" }}
        >
          Não foi possível concluir sua doação
        </h1>
        <p
          className="text-gray-500"
          style={{ maxWidth: "440px", padding: "0 20px", lineHeight: "1.6" }}
        >
          O pagamento não foi aprovado. Isso pode acontecer por falha no cartão
          ou cancelamento durante o checkout. Nenhum valor foi cobrado.
        </p>

        <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
          <Link
            href="/doacoes"
            style={{
              padding: "14px 28px",
              borderRadius: "10px",
              background: "#003F8A",
              color: "#fff",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            Tentar novamente
          </Link>
          <Link
            href="/"
            style={{
              padding: "14px 28px",
              borderRadius: "10px",
              border: "2px solid #e5e7eb",
              color: "#374151",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            Voltar ao início
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
