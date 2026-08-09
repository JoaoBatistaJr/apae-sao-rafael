"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type PaymentMethod = "cartao" | "pix";
type DonationType = "unica" | "amigo";
type Frequency = "mensal" | "anual";

const UNICA_AMOUNTS = [25, 50, 100] as const;
const AMIGO_MENSAL_AMOUNTS = [10, 20, 50] as const;
const AMIGO_ANUAL_AMOUNTS = [120, 250, 300] as const;

const PINK = "#e94e77";
const BLUE = "#3b82f6";

export default function DoacoesPage() {
  return (
    <Suspense fallback={null}>
      <DoacoesPageInner />
    </Suspense>
  );
}

function DoacoesPageInner() {
  const searchParams = useSearchParams();
  const initialType: DonationType =
    searchParams.get("tipo") === "amigo" ? "amigo" : "unica";

  const [donationType, setDonationType] = useState<DonationType>(initialType);
  const [frequency, setFrequency] = useState<Frequency>("mensal");
  const [amount, setAmount] = useState<number | "outro">(
    initialType === "amigo" ? AMIGO_MENSAL_AMOUNTS[0] : UNICA_AMOUNTS[1],
  );
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pix");
  const [payerEmail, setPayerEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const accentColor = donationType === "unica" ? PINK : BLUE;

  // Anual é tecnicamente uma doação única (pagamento avulso), não uma assinatura.
  const isRecurring = donationType === "amigo" && frequency === "mensal";
  const showPaymentMethod =
    donationType === "unica" ||
    (donationType === "amigo" && frequency === "anual");
  const showEmailField = isRecurring;

  const currentAmounts =
    donationType === "unica"
      ? UNICA_AMOUNTS
      : frequency === "mensal"
        ? AMIGO_MENSAL_AMOUNTS
        : AMIGO_ANUAL_AMOUNTS;

  const minAmount =
    donationType === "amigo" ? (frequency === "anual" ? 120 : 10) : 1;

  const finalAmount = amount === "outro" ? Number(customAmount) : amount;
  const customAmountInvalid =
    amount === "outro" &&
    customAmount !== "" &&
    Number(customAmount) < minAmount;

  const handleSelectDonationType = (type: DonationType) => {
    setDonationType(type);
    setAmount(type === "unica" ? UNICA_AMOUNTS[1] : AMIGO_MENSAL_AMOUNTS[0]);
    setFrequency("mensal");
    setCustomAmount("");
  };

  const handleSelectFrequency = (freq: Frequency) => {
    setFrequency(freq);
    setAmount(
      freq === "mensal" ? AMIGO_MENSAL_AMOUNTS[0] : AMIGO_ANUAL_AMOUNTS[0],
    );
    setCustomAmount("");
  };

  const handleDonate = async () => {
    if (!finalAmount || finalAmount < minAmount) {
      alert(
        donationType === "amigo"
          ? `O valor mínimo para ser Amigo APAE é R$ ${minAmount}.`
          : "Informe um valor válido.",
      );
      return;
    }

    if (isRecurring) {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payerEmail);
      if (!emailValid) {
        alert("Informe um e-mail válido para ser Amigo APAE.");
        return;
      }
    }

    setLoading(true);

    // Mensal = assinatura recorrente real (PreApproval).
    // Anual e Doação única = pagamento avulso (Preference) — o Mercado Pago
    // não suporta cobrança recorrente anual, só mensal.
    const endpoint = isRecurring
      ? "/api/mp/subscription"
      : "/api/mp/preference";

    const body = isRecurring
      ? { amount: finalAmount, payerEmail, frequency: "mensal" }
      : {
          amount: finalAmount,
          method: paymentMethod,
          title:
            donationType === "amigo"
              ? "Amigo APAE - Contribuição Anual"
              : "Doação para APAE São Rafael",
        };

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
        alert("Erro ao processar sua doação. Tente novamente.");
        setLoading(false);
      }
    } catch {
      alert("Erro de conexão. Tente novamente.");
      setLoading(false);
    }
  };

  const amountBtn = (val: number) => (
    <button
      key={val}
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
        background: amount === val ? accentColor : "#ffffff",
        color: amount === val ? "#fff" : "#374151",
        cursor: "pointer",
        touchAction: "manipulation",
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
      }}
    >
      R$ {val}
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
            Doe para a APAE
          </h1>
          <p
            className="mt-3 text-sm text-white/80 sm:text-base"
            style={{ maxWidth: "480px" }}
          >
            Cada contribuição transforma vidas.
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
          {/* TIPO */}
          <div style={{ marginBottom: "28px" }}>
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
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-start",
                  padding: "18px",
                  borderRadius: "16px",
                  border: `2px solid ${donationType === "unica" ? PINK : "#e5e7eb"}`,
                  background: donationType === "unica" ? "#fff5f7" : "#fff",
                  cursor: "pointer",
                  touchAction: "manipulation",
                }}
              >
                <input
                  type="radio"
                  name="donationType"
                  value="unica"
                  checked={donationType === "unica"}
                  onChange={() => handleSelectDonationType("unica")}
                  style={{
                    position: "absolute",
                    opacity: 0,
                    width: 0,
                    height: 0,
                  }}
                />
                {donationType === "unica" ? (
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: PINK,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ) : (
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      border: "2px solid #d1d5db",
                      background: "#fff",
                    }}
                  />
                )}
                <div style={{ paddingRight: "24px" }}>
                  <p className="font-extrabold text-gray-900">
                    ❤️ Doação única
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Contribua com qualquer valor — toda ajuda faz diferença para
                    os projetos da APAE.
                  </p>
                </div>
              </label>
              <label
                style={{
                  flex: 1,
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-start",
                  padding: "18px",
                  borderRadius: "16px",
                  border: `2px solid ${donationType === "amigo" ? BLUE : "#e5e7eb"}`,
                  background: donationType === "amigo" ? "#eff6ff" : "#fff",
                  cursor: "pointer",
                  touchAction: "manipulation",
                }}
              >
                <input
                  type="radio"
                  name="donationType"
                  value="amigo"
                  checked={donationType === "amigo"}
                  onChange={() => handleSelectDonationType("amigo")}
                  style={{
                    position: "absolute",
                    opacity: 0,
                    width: 0,
                    height: 0,
                  }}
                />
                {donationType === "amigo" ? (
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: BLUE,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ) : (
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      border: "2px solid #d1d5db",
                      background: "#fff",
                    }}
                  />
                )}
                <div style={{ paddingRight: "24px" }}>
                  <p className="font-extrabold text-gray-900">💙 Amigo APAE</p>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Você pode contribuir mensalmente com R$ 10 ou, se preferir,
                    com o valor anual de R$ 120 — de uma só vez.
                  </p>
                </div>
              </label>
            </div>

            {donationType === "amigo" && (
              <>
                {/* FREQUÊNCIA */}
                <div style={{ marginTop: "16px" }}>
                  <p className="mb-2 text-sm font-semibold text-gray-700">
                    Frequência da contribuição
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleSelectFrequency("mensal")}
                      style={{
                        padding: "12px",
                        borderRadius: "10px",
                        border: `2px solid ${frequency === "mensal" ? BLUE : "#e5e7eb"}`,
                        background: frequency === "mensal" ? BLUE : "#fff",
                        color: frequency === "mensal" ? "#fff" : "#374151",
                        fontWeight: 700,
                        fontSize: "17px",
                        cursor: "pointer",
                      }}
                    >
                      Mensal
                    </button>
                    <button
                      onClick={() => handleSelectFrequency("anual")}
                      style={{
                        padding: "12px",
                        borderRadius: "10px",
                        border: `2px solid ${frequency === "anual" ? BLUE : "#e5e7eb"}`,
                        background: frequency === "anual" ? BLUE : "#fff",
                        color: frequency === "anual" ? "#fff" : "#374151",
                        fontWeight: 700,
                        fontSize: "17px",
                        cursor: "pointer",
                      }}
                    >
                      Anual
                    </button>
                  </div>
                  {frequency === "anual" && (
                    <p
                      className="text-xs leading-5 text-gray-500"
                      style={{ marginTop: "5px", fontWeight: 700 }}
                    >
                      Cobrança única. Você recebe um lembrete para renovar no
                      ano seguinte.
                    </p>
                  )}
                  {frequency === "mensal" && (
                    <p
                      className="text-xs leading-5 text-gray-500"
                      style={{ marginTop: "5px", fontWeight: 700 }}
                    >
                      Cobrança automática todo mês. Cancele quando quiser.
                    </p>
                  )}
                </div>
              </>
            )}
          </div>

          {/* VALORES */}
          <div style={{ marginBottom: "36px" }}>
            <h2
              className="text-center font-extrabold text-gray-900"
              style={{ fontSize: "17px", marginBottom: "16px" }}
            >
              Escolha o valor da contribuição
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {currentAmounts.map((val) => amountBtn(val))}
              <button
                onPointerDown={(e) => {
                  e.preventDefault();
                  setAmount("outro");
                }}
                style={{
                  padding: "16px 0",
                  fontSize: "17px",
                  fontWeight: 700,
                  borderRadius: "12px",
                  width: "100%",
                  minHeight: "56px",
                  border: amount === "outro" ? "none" : "2px solid #e5e7eb",
                  background: amount === "outro" ? accentColor : "#ffffff",
                  color: amount === "outro" ? "#fff" : "#374151",
                  cursor: "pointer",
                  touchAction: "manipulation",
                  WebkitTapHighlightColor: "transparent",
                  userSelect: "none",
                }}
              >
                Outro
              </button>
            </div>
            {amount === "outro" && (
              <div style={{ marginTop: "12px" }}>
                <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                  Valor em R${" "}
                  {donationType === "amigo" && `(mínimo R$ ${minAmount})`}
                </label>
                <input
                  type="number"
                  min={minAmount}
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder={`Mínimo R$ ${minAmount}`}
                  className="w-full bg-white px-4 text-base focus:outline-none"
                  style={{
                    borderRadius: "10px",
                    padding: "16px",
                    fontSize: "16px",
                    minHeight: "56px",
                    border: `2px solid ${customAmountInvalid ? "#dc2626" : "#e5e7eb"}`,
                  }}
                />
                {customAmountInvalid && (
                  <p className="mt-1.5 text-xs font-semibold text-red-600">
                    O valor mínimo é R$ {minAmount}.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* E-MAIL — só assinatura mensal (Amigo APAE recorrente) */}
          {showEmailField && (
            <div style={{ marginBottom: "36px" }}>
              <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                Seu e-mail
              </label>
              <input
                type="email"
                value={payerEmail}
                onChange={(e) => setPayerEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                required
                className="w-full border-2 border-gray-200 bg-white px-4 text-base focus:border-blue-400 focus:outline-none"
                style={{
                  borderRadius: "10px",
                  padding: "16px",
                  fontSize: "16px",
                  minHeight: "56px",
                }}
              />
              <p className="mt-1.5 text-xs text-gray-400">
                Usamos seu e-mail apenas para gerenciar sua assinatura de Amigo
                APAE.
              </p>
            </div>
          )}

          {/* MÉTODO — doação única e Amigo APAE anual (ambos são pagamento avulso) */}
          {showPaymentMethod && (
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
                        fontSize: "15px",
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

          {/* BOTÃO */}
          <button
            onClick={handleDonate}
            disabled={loading || customAmountInvalid}
            style={{
              display: "block",
              width: "100%",
              padding: "18px",
              fontSize: "18px",
              fontWeight: 700,
              borderRadius: "12px",
              border: "none",
              background:
                loading || customAmountInvalid ? "#d1d5db" : "#22c55e",
              color: "#fff",
              cursor:
                loading || customAmountInvalid ? "not-allowed" : "pointer",
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => {
              if (!loading && !customAmountInvalid)
                e.currentTarget.style.background = "#16a34a";
            }}
            onMouseLeave={(e) => {
              if (!loading && !customAmountInvalid)
                e.currentTarget.style.background = "#22c55e";
            }}
          >
            {loading
              ? "Processando..."
              : donationType === "amigo"
                ? "Quero ser Amigo APAE 💙"
                : "Fazer doação ❤️"}
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
