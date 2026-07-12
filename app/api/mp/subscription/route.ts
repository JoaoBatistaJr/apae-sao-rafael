import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { amount, payerEmail } = await req.json();

  if (!amount || amount < 1) {
    return NextResponse.json({ error: "Valor inválido" }, { status: 400 });
  }

  if (!payerEmail) {
    return NextResponse.json({ error: "E-mail obrigatório" }, { status: 400 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  try {
    const res = await fetch("https://api.mercadopago.com/preapproval", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reason: "Padrinho mensal APAE São Rafael",
        auto_recurring: {
          frequency: 1,
          frequency_type: "months",
          transaction_amount: Number(amount),
          currency_id: "BRL",
        },
        back_url: `${siteUrl}/doacoes/sucesso`,
        payer_email: payerEmail,
        status: "pending",
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Erro MP preapproval:", data);
      return NextResponse.json({ error: data }, { status: 400 });
    }

    return NextResponse.json({ init_point: data.init_point });
  } catch (err) {
    console.error("Erro ao criar assinatura:", err);
    return NextResponse.json({ error: "Erro ao criar assinatura" }, { status: 500 });
  }
}