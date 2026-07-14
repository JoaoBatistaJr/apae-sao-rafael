"use client";

import Link from "next/link";
import { useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type DonationAmount = 25 | 50 | 100 | "outro";
type DonationType = "unica" | "padrinho";
type PaymentMethod = "cartao" | "pix";

// Cores centralizadas — alinhadas ao design system (.btn-primary, .btn-green)
const COLOR_PINK = "#e94e77";
const COLOR_PINK_SOFT = "#f472b6";
const COLOR_GREEN = "#22c55e";
const COLOR_GREEN_DARK = "#16a34a";

export default function DoacoesPage() {
  const [amount, setAmount] = useState<DonationAmount>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<DonationType>("unica");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pix");
  const [payerEmail, setPayerEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDonate = async () => {
    setError(null);
    const finalAmount = amount === "outro" ? Number(customAmount) : amount;

    if (!finalAmount || finalAmount < 1) {
      setError("Informe um valor válido.");
      return;
    }

    if (donationType === "padrinho") {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payerEmail);
      if (!emailValid) {
        setError("Informe um e-mail válido para ser padrinho.");
        return;
      }
    }

    setLoading(true);

    const endpoint =
      donationType === "padrinho"
        ? "/api/mp/subscription"
        : "/api/mp/preference";

    const body =
      donationType === "padrinho"
        ? { amount: finalAmount, payerEmail }
        : { amount: finalAmount, method: paymentMethod };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();

      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        setError("Erro ao processar sua doação. Tente novamente.");
        setLoading(false);
      }
    } catch {
      setError("Erro de conexão. Tente novamente.");
      setLoading(false);
    }
  };

  const amountBtn = (val: DonationAmount, label: string) => (
    <button
      type="button"
      aria-pressed={amount === val}
      onClick={() => setAmount(val)}
      style={{
        padding: "16px 0",
        fontSize: "17px",
        fontWeight: 700,
        borderRadius: "12px",
        width: "100%",
        minHeight: "56px",
        border: amount === val ? "none" : "2px solid #e5e7eb",
        background: amount === val ? COLOR_PINK : "#ffffff",
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
            Finalize sua doação
          </h1>
          <p
            className="mt-3 text-sm text-white/80 sm:text-base"
            style={{ maxWidth: "520px" }}
          >
            Escolha o valor e a forma de contribuição
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
                <label
                  htmlFor="custom-amount"
                  className="mb-1.5 block text-sm font-semibold text-gray-700"
                >
                  Valor em R$
                </label>
                <input
                  id="custom-amount"
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
            <h2
              className="text-center font-extrabold text-gray-900"
              style={{ fontSize: "17px", marginBottom: "16px" }}
            >
              Como você deseja ajudar?
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "18px",
                  borderRadius: "16px",
                  border: `2px solid ${donationType === "unica" ? COLOR_PINK_SOFT : "#e5e7eb"}`,
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
                    accentColor: COLOR_PINK,
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
                  border: `2px solid ${donationType === "padrinho" ? COLOR_PINK_SOFT : "#e5e7eb"}`,
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
                    accentColor: COLOR_PINK,
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
              <>
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
                <div style={{ marginTop: "14px" }}>
                  <label
                    htmlFor="payer-email"
                    className="mb-1.5 block text-sm font-semibold text-gray-700"
                  >
                    Seu e-mail
                  </label>
                  <input
                    id="payer-email"
                    type="email"
                    value={payerEmail}
                    onChange={(e) => setPayerEmail(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    required
                    className="w-full border-2 border-gray-200 bg-white px-4 text-base focus:border-pink-400 focus:outline-none"
                    style={{
                      borderRadius: "10px",
                      padding: "16px",
                      fontSize: "16px",
                      minHeight: "56px",
                    }}
                  />
                  <p className="mt-1.5 text-xs text-gray-500">
                    Usamos seu e-mail apenas para gerenciar sua assinatura de
                    padrinho.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* MÉTODO — só doação única */}
          {donationType === "unica" && (
            <div style={{ marginBottom: "36px" }}>
              <h2
                className="text-center font-extrabold text-gray-900"
                style={{ fontSize: "17px", marginBottom: "16px" }}
              >
                Forma de pagamento
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    id: "cartao" as PaymentMethod,
                    label: "Cartão",
                    icon: (
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 48 48"
                        fill="none"
                      >
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
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 48 48"
                        fill="none"
                      >
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
                    type="button"
                    aria-pressed={paymentMethod === m.id}
                    onClick={() => setPaymentMethod(m.id)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      padding: "20px 8px",
                      borderRadius: "12px",
                      border: `2px solid ${paymentMethod === m.id ? COLOR_GREEN_DARK : "#e5e7eb"}`,
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
          )}

          {/* ERRO */}
          {error && (
            <p
              role="alert"
              className="mb-4 text-center text-sm font-semibold text-red-600"
            >
              {error}
            </p>
          )}

          {/* BOTÃO */}
          <button
            type="button"
            onClick={handleDonate}
            disabled={loading}
            style={{
              display: "block",
              width: "100%",
              padding: "18px",
              fontSize: "18px",
              fontWeight: 700,
              borderRadius: "12px",
              border: "none",
              background: loading ? "#86efac" : COLOR_GREEN,
              color: "#fff",
              cursor: loading ? "not-allowed" : "pointer",
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => {
              if (!loading) e.currentTarget.style.background = COLOR_GREEN_DARK;
            }}
            onMouseLeave={(e) => {
              if (!loading) e.currentTarget.style.background = COLOR_GREEN;
            }}
          >
            {loading
              ? "Processando..."
              : donationType === "padrinho"
                ? "Quero ser padrinho ❤️"
                : "Fazer doação"}
          </button>

          <p className="mt-3 text-center text-xs text-gray-500">
            🔒 Pagamento processado com segurança pelo Mercado Pago
          </p>

          <div className="mt-2 text-center">
            <Link
              href="/apoio/doacoes"
              className="text-xs font-semibold text-gray-500 underline"
            >
              Saiba mais sobre como usamos sua doação
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
