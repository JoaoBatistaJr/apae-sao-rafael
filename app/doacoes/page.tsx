"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type DonationAmount = 25 | 50 | 100 | "outro";
type DonationType = "unica" | "padrinho";
type PaymentMethod = "boleto" | "cartao" | "pix";

export default function DoacoesPage() {
  const [amount, setAmount] = useState<DonationAmount>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<DonationType>("unica");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pix");

  const handleDonate = () => {
    const final = amount === "outro" ? `R$ ${customAmount}` : `R$ ${amount}`;
    const typeLabel =
      donationType === "unica" ? "Doação única" : "Padrinho mensal";
    alert(
      `${typeLabel} de ${final} via ${paymentMethod} — integração com Mercado Pago em breve!`,
    );
  };

  const amountBtn = (val: DonationAmount, label: string) => (
    <button
      onPointerDown={(e) => {
        e.preventDefault();
        setAmount(val);
      }}
      style={{
        padding: "16px 0",
        fontSize: "17px",
        fontWeight: 700,
        borderRadius: "12px",
        width: "100%",
        minHeight: "56px",
        border: amount === val ? "none" : "2px solid #e5e7eb",
        background: amount === val ? "#e94e77" : "#ffffff",
        color: amount === val ? "#fff" : "#374151",
        cursor: "pointer",
        touchAction: "manipulation",
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
      }}
    >
      {label}
    </button>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <div className="w-full bg-[#003F8A]">
        <TopBar />
        <Header />
        <div
          className="container-site flex flex-col items-center text-center"
          style={{ paddingBlock: "20px" }}
        >
          <h1 className="text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Apoie a APAE
          </h1>
          <p
            className="mt-5 max-w-3xl text-sm leading-relaxed text-white/80"
            style={{ maxWidth: "520px" }}
          >
            Sua contribuição ajuda a manter atendimentos, terapias e projetos
            que transformam vidas todos os dias.
          </p>
        </div>
      </div>

      <main
        className="flex-1 bg-warm"
        style={{ paddingTop: "60px", paddingBottom: "80px" }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
          }}
        >
          {/* VALORES */}
          <div style={{ marginBottom: "36px" }}>
            <h2
              className="text-center font-extrabold text-gray-900"
              style={{ fontSize: "17px", marginBottom: "16px" }}
            >
              Escolha o valor da contribuição
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {amountBtn(25, "R$ 25")}
              {amountBtn(50, "R$ 50")}
              {amountBtn(100, "R$ 100")}
              {amountBtn("outro", "Outro")}
            </div>
            {amount === "outro" && (
              <div style={{ marginTop: "12px" }}>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                  Valor em R$
                </label>
                <input
                  type="number"
                  min="1"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Ex: 75"
                  className="w-full border-2 border-gray-200 bg-white px-4 text-base focus:border-pink-400 focus:outline-none"
                  style={{
                    borderRadius: "10px",
                    padding: "16px",
                    fontSize: "16px",
                    minHeight: "56px",
                  }}
                />
              </div>
            )}
          </div>

          {/* TIPO */}
          <div style={{ marginBottom: "36px" }}>
            <p
              className="text-center font-extrabold text-gray-900"
              style={{ fontSize: "17px", marginBottom: "16px" }}
            >
              Como você deseja ajudar?
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "18px",
                  borderRadius: "16px",
                  border: `2px solid ${donationType === "unica" ? "#f472b6" : "#e5e7eb"}`,
                  background: "#fff",
                  cursor: "pointer",
                  touchAction: "manipulation",
                }}
              >
                <input
                  type="radio"
                  name="donationType"
                  value="unica"
                  checked={donationType === "unica"}
                  onChange={() => setDonationType("unica")}
                  style={{
                    marginTop: "3px",
                    accentColor: "#e94e77",
                    width: "16px",
                    height: "16px",
                  }}
                />
                <div>
                  <p className="font-extrabold text-gray-900">Doação única</p>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Faça uma contribuição pontual para apoiar os projetos da
                    APAE.
                  </p>
                </div>
              </label>
              <label
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "18px",
                  borderRadius: "16px",
                  border: `2px solid ${donationType === "padrinho" ? "#f472b6" : "#e5e7eb"}`,
                  background: donationType === "padrinho" ? "#fff7f9" : "#fff",
                  cursor: "pointer",
                  touchAction: "manipulation",
                }}
              >
                <input
                  type="radio"
                  name="donationType"
                  value="padrinho"
                  checked={donationType === "padrinho"}
                  onChange={() => setDonationType("padrinho")}
                  style={{
                    marginTop: "3px",
                    accentColor: "#e94e77",
                    width: "16px",
                    height: "16px",
                  }}
                />
                <div>
                  <p className="font-extrabold text-gray-900">
                    ❤️ Padrinho mensal
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Ajude continuamente no atendimento de crianças, jovens e
                    famílias acompanhadas pela APAE.
                  </p>
                </div>
              </label>
            </div>
            {donationType === "padrinho" && (
              <div
                style={{
                  marginTop: "14px",
                  borderRadius: "14px",
                  border: "1px solid #fbcfe8",
                  background: "#fff0f5",
                  padding: "14px 18px",
                  textAlign: "center",
                }}
              >
                <p className="text-sm leading-6 text-pink-700">
                  ❤️ Sua contribuição mensal ajuda a manter atendimentos,
                  terapias e projetos ativos durante todo o ano.
                </p>
              </div>
            )}
          </div>

          {/* MÉTODO */}
          <div style={{ marginBottom: "36px" }}>
            <h2
              className="text-center font-extrabold text-gray-900"
              style={{ fontSize: "17px", marginBottom: "16px" }}
            >
              Forma de pagamento
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  id: "boleto" as PaymentMethod,
                  label: "Boleto",
                  icon: (
                    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                      <rect x="4" y="10" width="4" height="28" fill="#111" />
                      <rect x="10" y="10" width="2" height="28" fill="#111" />
                      <rect x="14" y="10" width="5" height="28" fill="#111" />
                      <rect x="21" y="10" width="2" height="28" fill="#111" />
                      <rect x="25" y="10" width="6" height="28" fill="#111" />
                      <rect x="33" y="10" width="2" height="28" fill="#111" />
                      <rect x="37" y="10" width="4" height="28" fill="#111" />
                      <rect x="43" y="10" width="2" height="28" fill="#111" />
                    </svg>
                  ),
                },
                {
                  id: "cartao" as PaymentMethod,
                  label: "Cartão",
                  icon: (
                    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                      <rect
                        x="4"
                        y="10"
                        width="40"
                        height="28"
                        rx="4"
                        stroke="#111"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <rect x="4" y="18" width="40" height="7" fill="#111" />
                      <rect
                        x="10"
                        y="31"
                        width="10"
                        height="3"
                        rx="1.5"
                        fill="#111"
                      />
                      <rect
                        x="24"
                        y="31"
                        width="6"
                        height="3"
                        rx="1.5"
                        fill="#111"
                      />
                    </svg>
                  ),
                },
                {
                  id: "pix" as PaymentMethod,
                  label: "PIX",
                  icon: (
                    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                      <path
                        d="M24 12L36 24L24 36L12 24L24 12Z"
                        fill="#32BCAD"
                      />
                      <path
                        d="M18 6L24 0L30 6"
                        stroke="#32BCAD"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M42 18L48 24L42 30"
                        stroke="#32BCAD"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M30 42L24 48L18 42"
                        stroke="#32BCAD"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 30L0 24L6 18"
                        stroke="#32BCAD"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setPaymentMethod(m.id)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    padding: "20px 8px",
                    borderRadius: "12px",
                    border: `2px solid ${paymentMethod === m.id ? "#16a34a" : "#e5e7eb"}`,
                    background: paymentMethod === m.id ? "#f0fdf4" : "#fff",
                    cursor: "pointer",
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "transparent",
                    transition: "border 0.15s, background 0.15s",
                    width: "100%",
                  }}
                >
                  {m.icon}
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#374151",
                    }}
                  >
                    {m.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* BOTÃO */}
          <button
            onClick={handleDonate}
            style={{
              display: "block",
              width: "100%",
              padding: "18px",
              fontSize: "18px",
              fontWeight: 700,
              borderRadius: "12px",
              border: "none",
              background: "#22c55e",
              color: "#fff",
              cursor: "pointer",
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#16a34a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#22c55e")}
          >
            {donationType === "padrinho"
              ? "Quero ser padrinho ❤️"
              : "Fazer doação"}
          </button>

          <p className="mt-3 mb-3 text-center text-xs text-gray-400">
            🔒 Ambiente 100% seguro
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
